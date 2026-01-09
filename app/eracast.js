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
  // @returns {Promise<string>}
  window.fetchEraCast1080WebmUrl = async function fetchEraCast1080WebmUrl(videoId) {
    try {
      if (!videoId || typeof videoId !== 'string') return '';

      const watchUrl = `https://www.eracast.cc/watch?v=${encodeURIComponent(videoId)}`;
      const res = await fetch(watchUrl, { method: 'GET', mode: 'cors' });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const html = await res.text();

      // This regex gets 1080p video
      const re = /targetDiv\.setAttribute\(\s*['"]src['"]\s*,\s*['"]([^'"]*?_1080\.)['"]\s*\+\s*ext\s*\)\s*;/;
      const m = html.match(re);
      if (!m || !m[1]) return '';

      const prefix = m[1];
      const abs = new URL(prefix + 'mp4', watchUrl).href; // this is not the math function
      return abs;
    } catch (err) {
      console.error('fetchEraCast1080WebmUrl error:', err);
      return '';
    }
  };
})();
