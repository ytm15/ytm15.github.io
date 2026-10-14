(async function initEraCastParser() {
  console.log("Start");
  window.fetchEraCastFeed = async function fetchEraCastFeed(url = ERACAST_PROXY_MODE_option + 'https://www.eracast.cc/') {
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

  window.fetchEraCastSearch = async function fetchEraCastSearch(query, page = 1, sort = '') {
    const searchUrl = new URL('https://www.eracast.cc/results');
    searchUrl.searchParams.set('search_query', query);
    searchUrl.searchParams.set('page', String(page));
    if (sort) searchUrl.searchParams.set('search_sort', sort);

    const response = await fetch(ERACAST_PROXY_MODE_option + encodeURIComponent(searchUrl.href), { method: 'GET', mode: 'cors' });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const dom = new DOMParser().parseFromString(await response.text(), 'text/html');
    const durationSeconds = (value) => {
      const parts = value.trim().split(':').map(Number);
      return parts.every(Number.isFinite) ? parts.reduce((seconds, part) => seconds * 60 + part, 0) : 0;
    };
    const absoluteImage = (image) => {
      const source = image?.getAttribute('data-thumb') || image?.getAttribute('src') || '';
      return source ? new URL(source, searchUrl).href : '';
    };
    const results = Array.from(dom.querySelectorAll('.item-section .yt-lockup')).map((lockup) => {
      const titleLink = lockup.querySelector('.yt-lockup-title a');
      if (!titleLink) return null;
      const href = new URL(titleLink.getAttribute('href'), searchUrl);
      const title = (titleLink.getAttribute('title') || titleLink.textContent || '').trim();
      const thumbnail = absoluteImage(lockup.querySelector('.yt-lockup-thumbnail img'));
      const metadata = Array.from(lockup.querySelectorAll('.yt-lockup-meta-info li'), item => item.textContent.trim());

      if (lockup.classList.contains('yt-lockup-channel')) {
        const channelId = href.pathname.match(/^\/channel\/([^/]+)/)?.[1];
        if (!channelId) return null;
        const videoCount = Number(metadata.find(text => /\bvideos?\b/i.test(text))?.replace(/[^\d]/g, '') || 0);
        const subscribers = lockup.querySelector('[aria-label$="subscribers"]')?.getAttribute('aria-label') || '';
        return { type: 'channel', channelId, title, thumbnail, videoCount, subscribers };
      }
      if (lockup.classList.contains('yt-lockup-playlist')) {
        const playlistId = href.searchParams.get('list');
        if (!playlistId) return null;
        return { type: 'playlist', playlistId, title, thumbnail, videoCount: Number(metadata.find(text => /\bvideos?\b/i.test(text))?.replace(/[^\d]/g, '') || 0), author: lockup.querySelector('.yt-lockup-byline a')?.textContent.trim() || '' };
      }
      const videoId = href.searchParams.get('v');
      if (!videoId) return null;
      const authorLink = lockup.querySelector('.yt-lockup-byline a[href*="/channel/"]');
      const authorId = authorLink?.getAttribute('href')?.match(/\/channel\/([^/?#]+)/)?.[1] || '';
      const publishedText = metadata.find(text => !/views?\b/i.test(text)) || '';
      const viewCountText = metadata.find(text => /views?\b/i.test(text)) || '';
      return {
        type: 'video', videoId, title, thumbnail,
        lengthSeconds: durationSeconds(lockup.querySelector('.video-time')?.textContent || ''),
        author: authorLink?.textContent.trim() || '', authorId, publishedText,
        viewCount: viewCountText ? Number(viewCountText.replace(/[^\d]/g, '')) : null
      };
    }).filter(Boolean);

    const nextLink = dom.querySelector('a.yt-uix-pager-next');
    const nextPage = nextLink ? Number(new URL(nextLink.getAttribute('href'), searchUrl).searchParams.get('page')) : null;
    return { results, countText: dom.querySelector('.num-results')?.textContent.trim() || '', nextPage: Number.isFinite(nextPage) ? nextPage : null };
  };

  // @param {string} videoId
  // @returns {Promise<{thumbnail:{url:string}[],title:string,formats:{url:string,mimeType:string,qualityLabel:string}[]}|{}>}
  window.fetchEraCastVideoFormats = async function fetchEraCastVideoFormats(videoId) {
    try {
      if (!videoId || typeof videoId !== 'string') return {};

      const watchUrl = ERACAST_PROXY_MODE_option + `https://www.eracast.cc/watch?v=${encodeURIComponent(videoId)}`;
      const res = await fetch(watchUrl, { method: 'GET', mode: 'cors' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const html = await res.text();

      const dom = new DOMParser().parseFromString(html, 'text/html');
      var ogImage = dom.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
      const prefixFindImage = /[^\/]+(?=\/?$)/;
      ogImage = ogImage + ogImage.match(prefixFindImage) + "_1.jpg";
      const ogTitle = dom.querySelector('meta[property="og:title"]')?.getAttribute('content') || '';console.log(ogImage);

      const prefixRe = /targetDiv\.setAttribute\(\s*['"]src['"]\s*,\s*['"]([^'"]*?)_(?:1080|720|480)\.['"]\s*\+\s*ext\s*\)/;
      const prefixMatch = html.match(prefixRe);
      if (!prefixMatch) return {};
      const prefix = prefixMatch[1];
      console.log("Prefix found:", prefix);

      const sourcesBlockMatch = html.match(/var\s+sources\s*=\s*\{([\s\S]*?)\}\s*;/);
      const sourcesBlock = sourcesBlockMatch ? sourcesBlockMatch[1] : '';
      const flag = (key) => {
        const m = sourcesBlock.match(new RegExp(`${key}\\s*:\\s*(true|false)`));
        return m ? m[1] === 'true' : false;
      };
      console.log("Sources block:", sourcesBlock);
      const sources = {
        1080: flag(1080),
        720: flag(720),
        480: flag(480),
        360: flag(360),
        webm: flag('webm'),
        av1: flag('av1')
      };
      console.log("Sources parsed:", sources);

      const getExt = (resolution) => {
        if (!sources[resolution]) return null;
        if (sources.av1 && resolution === 480) return 'webm';
        if (sources.av1 && (resolution === 1080 || resolution === 720)) return 'mp4';
        if (sources.webm && (resolution === 1080 || resolution === 720)) return 'webm';
        return 'mp4';
      };

      const formats = [];
      [360, 480, 720, 1080].forEach((quality) => {
        const ext = getExt(quality);
        if (!ext) return;
        formats.push({
          url: new URL(`${prefix}_${quality}.${ext}`, watchUrl).href,
          mimeType: `video/${ext}`,
          qualityLabel: `${quality}p`
        });
      });

      if (!formats.length) return {};

      const thumbnail = ogImage ? [{ url: ogImage }, { url: ogImage }, { url: ogImage }, { url: ogImage }] : [];

      return {
        thumbnail,
        title: ogTitle,
        formats
      };
    } catch (err) {
      console.error('fetchEraCastVideoFormats error:', err);
      return {};
    }
  };

  // @param {string} videoId
  // @returns {Promise<object|{}>}
  window.fetchEraCastVideoInfo = async function fetchEraCastVideoInfo(videoId) {
    try {
      if (!videoId || typeof videoId !== 'string') return {};

      const watchUrl = ERACAST_PROXY_MODE_option + `https://www.eracast.cc/watch?v=${encodeURIComponent(videoId)}`;
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
        var ogImage = dom.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
        const prefixFindImage = /[^\/]+(?=\/?$)/;
        ogImage = ogImage + ogImage.match(prefixFindImage) + "_1.jpg";
        if (!ogImage) return [];
        return [{ url: ogImage, width: 0, height: 0 }];
      })();

      console.log({
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
        relatedVideos: { continuation: '', data: [{videoId: videoId,title:"placeholder video btw",channelTitle:"",thumbnail:[{url:""},{url:""}],lengthText:"0:00"}] }
      });

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
        relatedVideos: { continuation: '', data: [{videoId: videoId,title:"placeholder video btw",channelTitle:"",thumbnail:[{url:""},{url:""}],lengthText:"0:00"}] }
      };
    } catch (err) {
      console.error('fetchEraCastVideoInfo error:', err);
      return {};
    }
  };
})();
