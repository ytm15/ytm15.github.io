(async function initEraCastParser() {
  console.log("Start");
  window.fetchEraCastFeed = async function fetchEraCastFeed(url = 'https://www.eracast.cc/') {
    try {
      const res = await fetch(url, { method: 'GET', mode: 'cors' });
      console.log("Start");
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const html = await res.text();
      const dom = new DOMParser().parseFromString(html, 'text/html');

      const feedContainers = dom.querySelectorAll('.feed-item-container');
      const results = [];

      feedContainers.forEach(container => {
        const items = container.querySelectorAll('li.yt-shelf-grid-item');
        items.forEach(item => {
          const lockup = item.querySelector('.yt-lockup-video');
          if (!lockup) return;

          const thumbLink = lockup.querySelector('.yt-lockup-thumbnail a[href*="/watch"]');
          const imgEl = lockup.querySelector('.yt-lockup-thumbnail img');
          const durationText = (lockup.querySelector('.video-time')?.textContent || '').trim();

          const titleLink = lockup.querySelector('.yt-lockup-title a[href*="/watch"]');
          const bylineLink = lockup.querySelector('.yt-lockup-byline a[href*="/channel/"]');
          const metaLis = lockup.querySelectorAll('.yt-lockup-meta .yt-lockup-meta-info li');

          const parseVideoId = (href) => {
            try {
              const u = new URL(href, url);
              return u.searchParams.get('v') || '';
            } catch {
              return '';
            }
          };

          const parseLengthSeconds = (t) => {
            if (!t) return 0;
            const parts = t.split(':').map(p => parseInt(p, 10));
            if (parts.some(isNaN)) return 0;
            let sec = 0;
            if (parts.length === 3) sec = parts[0] * 3600 + parts[1] * 60 + parts[2];
            else if (parts.length === 2) sec = parts[0] * 60 + parts[1];
            else sec = parts[0];
            return sec;
          };

          const videoThumbnails = [];
          if (imgEl?.src) {
            videoThumbnails.push({
              url: imgEl.src,
              width: parseInt(imgEl.getAttribute('width') || '0', 10) || undefined,
              height: parseInt(imgEl.getAttribute('height') || '0', 10) || undefined,
              quality: 'default'
            });
          }

          const videoId = titleLink ? parseVideoId(titleLink.href) : (thumbLink ? parseVideoId(thumbLink.href) : '');
          const title = (titleLink?.getAttribute('title') || titleLink?.textContent || '').trim();
          const author = (bylineLink?.textContent || '').trim();
          const authorUrlAbs = bylineLink ? new URL(bylineLink.href, url).href : '';
          const authorIdMatch = authorUrlAbs.match(/\/channel\/([A-Za-z0-9_-]+)/);
          const authorId = authorIdMatch ? authorIdMatch[1] : '';

          let viewCountText = '';
          let publishedText = '';
          if (metaLis && metaLis.length >= 1) {
            viewCountText = metaLis[0].textContent.trim();
          }
          if (metaLis && metaLis.length >= 2) {
            publishedText = metaLis[1].textContent.trim();
          }

          const obj = {
            author,
            authorId,
            authorThumbnails: [],
            authorUrl: bylineLink ? new URL(bylineLink.pathname, url).pathname : '',
            authorVerified: false,
            description: '',
            descriptionHtml: '',
            hasCaptions: false,
            is3d: false,
            is4k: false,
            is8k: false,
            isNew: false,
            isUpcoming: false,
            isVr180: false,
            isVr360: false,
            lengthSeconds: parseLengthSeconds(durationText),
            liveNow: false,
            premium: false,
            published: 0,
            publishedText,
            title,
            type: 'video',
            videoId,
            videoThumbnails,
            viewCount: 0,
            viewCountText
          };

          if (obj.videoId && obj.title) {
            results.push(obj);
          }
        });
      });

      console.log(results);
      return results;
    } catch (err) {
      console.error('fetchEraCastFeed error:', err);
      return [];
    }
  };

  // @param {string} videoId
  // @returns {Promise<{thumbnail:string,title:string,formats:{url:string}[]}|{}>}
  window.fetchEraCast1080WebmUrl = async function fetchEraCast1080WebmUrl(videoId) {
    try {
      if (!videoId || typeof videoId !== 'string') return {};

      const watchUrl = `https://www.eracast.cc/watch?v=${encodeURIComponent(videoId)}`;
      const res = await fetch(watchUrl, { method: 'GET', mode: 'cors' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const html = await res.text();

      const dom = new DOMParser().parseFromString(html, 'text/html');
      const ogImage = dom.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      const ogTitle = dom.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';

      // This regex gets 1080p video
      const re = /targetDiv\.setAttribute\(\s*['"]src['"]\s*,\s*['"]([^'"]*?_1080\.)['"]\s*\+\s*ext\s*\)\s*;/;
      const m = html.match(re);
      if (!m || !m[1]) return {};

      const prefix = m[1];
      const videoUrl = new URL(prefix + 'mp4', watchUrl).href; // this is not the math function

      console.log({
        thumbnail: ogImage,
        title: ogTitle,
        formats: [{ url: videoUrl }]
      });
      return {
        thumbnail: ogImage,
        title: ogTitle,
        formats: [{ url: videoUrl }]
      };
    } catch (err) {
      console.error('fetchEraCast1080WebmUrl error:', err);
      return {};
    }
  };

  // @param {string} videoId
  // @returns {Promise<object|{}>}
  window.fetchEraCastVideoInfo = async function fetchEraCastVideoInfo(videoId) {
    try {
      if (!videoId || typeof videoId !== 'string') return {};

      const watchUrl = `https://www.eracast.cc/watch?v=${encodeURIComponent(videoId)}`;
      const res = await fetch(watchUrl, { method: 'GET', mode: 'cors' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const html = await res.text();
      const dom = new DOMParser().parseFromString(html, 'text/html');

      const title = dom.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';

      const parseLengthSeconds = (t) => {
        if (!t) return 0;
        const parts = t.split(':').map(p => parseInt(p, 10));
        if (parts.some(isNaN)) return 0;
        if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
        if (parts.length === 2) return parts[0] * 60 + parts[1];
        return parts[0];
      };

      const lengthText = (dom.querySelector('.video-time')?.textContent || '').trim();
      const lengthSeconds = parseLengthSeconds(lengthText);

      const channelTitle = (dom.querySelector('.g-hovercard')?.textContent || '').trim();

      const subscribeBtn = dom.querySelector(
        '[class~="yt-uix-button"][class~="yt-uix-button-size-default"][class~="yt-uix-button-subscribe-branded"][class~="yt-uix-button-has-icon"][class~="no-icon-markup"][class~="yt-uix-subscription-button"][class~="yt-can-buffer"]'
      );
      const channelId = subscribeBtn?.getAttribute('data-channel-external-id') || '';

      const description = (dom.querySelector('#eow-description')?.textContent || '').trim();

      const viewCountRaw = (dom.querySelector('.view-count')?.textContent || '').trim();
      const viewCountNumber = (() => {
        // Commas
        const m = viewCountRaw.replace(/\u00a0/g, ' ').match(/([0-9][0-9,\.]*)/);
        if (!m) return 0;
        const n = parseInt(m[1].replace(/[^0-9]/g, ''), 10);
        return Number.isFinite(n) ? n : 0;
      })();

      const watchTimeText = (dom.querySelector('.watch-time-text')?.textContent || '').replace(/\s+/g, ' ').trim();
      const toIsoPublished = (t) => {
        // Published date -> ISO 8601 (To be compatible)
        const cleaned = (t || '').replace(/^Published on\s+/i, '').trim();
        const d = new Date(cleaned);
        if (Number.isNaN(d.getTime())) return '';
        d.setHours(0, 0, 0, 0);
        const pad = (x) => String(x).padStart(2, '0');
        const offMin = -d.getTimezoneOffset();
        const sign = offMin >= 0 ? '+' : '-';
        const abs = Math.abs(offMin);
        const offH = pad(Math.floor(abs / 60));
        const offM = pad(abs % 60);
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T00:00:00${sign}${offH}:${offM}`;
      };
      const publishDateIso = toIsoPublished(watchTimeText);

      const likeCountText = (dom.querySelector('#watch-like span')?.textContent || '').trim();
      const dislikeCountText = (dom.querySelector('#watch-dislike span')?.textContent || '').trim();

      const subscriberCountCore = (dom.querySelector('.yt-subscriber-count')?.textContent || '').trim();
      const subscriberCountText = subscriberCountCore ? `${subscriberCountCore} subscribers` : '';

      const channelThumbnail = dom.querySelector('.yt-thumb-clip img')?.getAttribute('src') || '';

      const thumbnailList = (() => {
        const ogImage = dom.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
        if (!ogImage) return [];
        return [{ url: ogImage, width: 0, height: 0 }];
      })();

      return {
        id: videoId,
        title,
        lengthSeconds: String(lengthSeconds),
        keywords: [],
        channelTitle,
        channelId,
        description,
        thumbnail: thumbnailList,
        allowRatings: true,
        viewCount: String(viewCountNumber),
        isPrivate: false,
        isUnpluggedCorpus: false,
        isLiveContent: false,
        isLive: false,
        isCrawlable: true,
        isFamilySafe: true,
        availableCountries: [],
        isUnlisted: false,
        category: '',
        publishDate: publishDateIso,
        publishedAt: publishDateIso,
        uploadDate: publishDateIso,
        isShortsEligible: false,
        likeCount: likeCountText.replace(/[^0-9]/g, '') || likeCountText,
        dislikeCount: dislikeCountText.replace(/[^0-9]/g, '') || dislikeCountText,
        hasCaption: false,
        storyboards: [],
        playableInEmbed: true,
        channelThumbnail: [{url:channelThumbnail}],
        subscriberCountText,
        extraMeta: [],
        relatedVideos: { continuation: '', data: [{videoId: videoId,title:"placeholder video btw",channelTitle:"YouTube Mobile 2015/legoskid",thumbnail:[{url:""},{url:""}],lengthText:"0:00"}] }
      };
    } catch (err) {
      console.error('fetchEraCastVideoInfo error:', err);
      return {};
    }
  };
})();
