var spinnerParent = document.querySelector("#app");
spinner();

/* async function fetchData() {
    try {
        const response = await fetch('https://invidious.protokolla.fi/api/v1/popular');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
} */

/* async function fetchDataTrending() {
    try {
        // if (urlpage !== "trending")
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "trending") {
        const response = await fetch('https://invidious.protokolla.fi/api/v1/trending');
        const data = await response.json();
        return data;
        // else if (urlpage == "trending")
        } else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
        const response = await fetch("https://invidious.protokolla.fi/api/v1/trending?type=" + trendType);
        const data = await response.json();
        return data;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
    }
} */

/* async function renderData() */
function renderData() {
    const headerTitle = document.querySelector(".header-title");
    headerTitle.setAttribute("aria-label", "");
    headerTitle.textContent = "";

    const headerBar = document.querySelector("ytm15-header-bar");
   
    const tabBar = document.createElement("div");
    tabBar.classList.add("tab-bar");
    tabBar.setAttribute('role', 'tablist');
    tabBar.setAttribute('isChannel', 'false');

    const tabBarTabs = document.createElement("div");
    tabBarTabs.classList.add("tab-bar-tabs");
    tabBarTabs.setAttribute('role', 'tablist');

    const tBTabCont = document.createElement("div");
    tBTabCont.classList.add("tabbar-tab-container", "home-tab");
    tBTabCont.setAttribute('role', 'tab');

    const tab = document.createElement("a");
    tab.classList.add("tab");
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-label', 'Home');
    tab.setAttribute('aria-selected', 'false');
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined) {
    tab.setAttribute('aria-selected', 'true');
    }
    tab.href = "#";
    tab.innerHTML = `<img class="ytm15-img-icon ytm15-img home-icon" src="ic_tab_home.png"></img>`;

    const tBTabCont1 = document.createElement("div");
    tBTabCont1.classList.add("tabbar-tab-container", "trending-tab");
    tBTabCont1.setAttribute('role', 'tab');

    const tab1 = document.createElement("a");
    tab1.classList.add("tab");
    tab1.setAttribute('role', 'tab');
    tab1.setAttribute('aria-label', 'Trending');
    tab1.setAttribute('aria-selected', 'false');
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
    tab1.setAttribute('aria-selected', 'true');
    }
    tab1.href = "#/trending";
    tab1.innerHTML = `<img class="ytm15-img-icon ytm15-img home-icon" src="ic_tab_trending.png"></img>`

    tabBar.appendChild(tabBarTabs);
    tabBarTabs.appendChild(tBTabCont);
    tBTabCont.appendChild(tab);
    tabBarTabs.appendChild(tBTabCont1);
    tBTabCont1.appendChild(tab1);

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").innerHTML = "";
    document.querySelector(".tab-bar").appendChild(tabBarTabs);
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    }

    function eventListenFunc() {
/* if (urlpage == "trending") */
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
        /* const pageCont = document.querySelector('.page-container'); */
        pageCont.innerHTML = "";

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.removeAttribute("hidden");

        /* tab.setAttribute('aria-selected', 'false');
        tab1.setAttribute('aria-selected', 'true'); */

        /* const data = await fetchDataTrending();
        console.log(data); */

        const getHomeData = new XMLHttpRequest();
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "trending") {
        getHomeData.open('GET', 'https://invidious.protokolla.fi/api/v1/trending', true);
        } else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
        getHomeData.open('GET', 'https://invidious.protokolla.fi/api/v1/trending?type=" + trendType', true);
        }

        getHomeData.onerror = function(event) {
        console.error("An error occurred with this operation (" + getHomeData.status + ")");

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.setAttribute("hidden", "");

        const error = document.createElement("div");
        error.classList.add('error-container');
        error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
        pageCont.before(error);
        return;
        };

        getHomeData.send();

        getHomeData.onload = function() {
        if (getHomeData.status === 200) {
        const data = JSON.parse(getHomeData.response);
        console.log(data);

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.setAttribute("hidden", "");

        /* if (!data) {
        const error = document.createElement("div");
        error.classList.add('error-container');
        error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
        pageCont.before(error);
        return;
        } */

        headerTitle.setAttribute("aria-label", "Trending");
        headerTitle.textContent = "Trending";

        if (!document.querySelector(".tab-bar")) {
        headerBar.appendChild(tabBar);
        headerBar.classList.add('has-tab-bar');
        tabBar.removeAttribute("hidden");
        document.querySelector(".tab-bar").setAttribute("isChannel", "false");
        };

        if (document.querySelector(".tab-bar")) {
        document.querySelector(".tab-bar").removeAttribute("hidden");
        document.querySelector(".tab-bar").setAttribute("isChannel", "false");
        headerBar.classList.add('has-tab-bar');
        };

        const page = document.createElement("page");
        page.classList.add('home');

        const tabContainer = document.createElement("div");
        tabContainer.classList.add('tabs-content-container');

        const tabContent = document.createElement("div");
        tabContent.classList.add('tab-content');
        tabContent.setAttribute("tab-identifier", "Trending");

        const tabContent2 = document.createElement("div");
        tabContent2.classList.add('tab-content');
        tabContent2.setAttribute("tab-identifier", "What_to_watch_placeholder");

        const section = document.createElement("div");
        section.classList.add('section-list');

        const sectLazyList = document.createElement("div");
        sectLazyList.classList.add('lazy-list');
        section.appendChild(sectLazyList);

        const parent = document.querySelector(".page-container");
        parent.appendChild(page);
        page.appendChild(tabContainer);
        tabContainer.appendChild(tabContent2);
        tabContainer.appendChild(tabContent);
        tabContent.appendChild(section);

        var oldTitle = document.querySelector("title");
    
        var title = document.createElement("title");
        title.textContent = 'Trending - 2015YouTube';

        oldTitle.parentNode.replaceChild(title, oldTitle);

        data.forEach(function(item) {
        /* const channelData = fetch('https://yt.lemnoslife.com/noKey/channels?part=snippet,status&id=' + item.authorId); */

        const itemSect = document.createElement("div");
        itemSect.classList.add('item-section');

        const LazyList = document.createElement("div");
        LazyList.classList.add('lazy-list', 'no-animation');

        const video = document.createElement('div');
        video.classList.add('video-with-context', 'item');

        const media = document.createElement('div');
        media.classList.add('media-item');

        const thumbnail = document.createElement('a');
        thumbnail.classList.add('media-item-thumbnail');
        thumbnail.href = "javascript:void(0);";
        thumbnail.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const thumbg = document.createElement('div');
        thumbg.classList.add('thumbnail-bg');

        const image = document.createElement('img');
        image.classList.add('thumbnail-img', 'ytm15-img', 'lazy');
        image.src = item.videoThumbnails[2].url;
        image.loading = "lazy";
        image.onload = function(){image.classList.add('loaded');};

        const overlayBottom = document.createElement('div');
        overlayBottom.classList.add('thumbnail-overlay-bottom');

        const time = document.createElement('div');
        time.classList.add('thumbnail-overlay-time-status');
        /* time.textContent = item.lengthSeconds.toLocaleString() + ' secs'; */
        if (item.lengthSeconds > "3599") {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(11, 8)
        } else {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(14, 5)
        }

        /* if (item.lengthSeconds == 0) {
        time.textContent = 'YT Short';
        } */

        if (item.lengthSeconds == 0) {
        time.textContent = "";
        const getVideoLength = new XMLHttpRequest();
        getVideoLength.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,snippet&id=' + item.videoId, true);
 
        getVideoLength.send();
 
        getVideoLength.onload = function(){
          if (getVideoLength.status === 200) {
          const response = JSON.parse(getVideoLength.response);
          if (response.items[0].contentDetails.duration > "3599") {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(11, 8)
          } else {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(14, 5)
          }
          } else {
          console.error("An error occurred with this operation (" + getVideoLength.status + ")");
          }
        };
        }

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('media-headline');

        const subhead = document.createElement('div');
        subhead.classList.add('subhead');

        const author = document.createElement('span');
        author.textContent = '';
        author.classList.add('media-byline', 'small-text');

        const authorName = document.createElement('a');
        authorName.textContent = item.author;
        authorName.classList.add('name');
        authorName.href = "#/channel/" + item.authorId;

        author.appendChild(authorName);

        const published = document.createElement('span');
        published.textContent = item.publishedText;
        published.classList.add('media-stats', 'small-text');

        const views = document.createElement('span');
        views.textContent = item.viewCount.toLocaleString() + ' views';
        views.classList.add('media-stats', 'small-text');

        const details = document.createElement('div');
        details.classList.add('media-item-details');

        const channel = document.createElement('div');
        channel.classList.add('media-channel');

        const channelA = document.createElement('a');
        channelA.setAttribute("aria-label", "Visit channel");
        channelA.href = "#/channel/" + item.authorId;

        const extEndpoint = document.createElement('a');
        extEndpoint.classList.add('media-extra-endpoint');
        extEndpoint.href = "javascript:void(0);";
        extEndpoint.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const cImage = document.createElement('img');
        cImage.classList.add('profile-img', 'ytm15-img', 'lazy');
        cImage.loading = "lazy";
        cImage.onload = function(){cImage.classList.add('loaded');}; 

        /* channelData
         .then(response => {
         if (!response.ok) {
         throw new Error('Network response was not ok');
         }
         return response.json();
         })
         .then(data1 => {
          // console.log('JSON data:', data1);
          cImage.src = data1.items[0].snippet.thumbnails.default.url;
         })
         .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        }); */

        const channelData = new XMLHttpRequest();
        channelData.open('GET', 'https://yt.lemnoslife.com/noKey/channels?part=snippet,status&id=' + item.authorId, true);
 
        channelData.send();
 
        channelData.onload = function(){
          if (channelData.status === 200) {
          const data1 = JSON.parse(channelData.response);
          cImage.src = data1.items[0].snippet.thumbnails.default.url;
          } else {
          console.error("An error occurred with this operation (" + channelData.status + ")");
          }
        };

        const profileIcon = document.createElement('div');
        profileIcon.classList.add('media-icon', 'profile-icon');

        channel.appendChild(channelA);
        channel.appendChild(extEndpoint);
        channelA.appendChild(profileIcon);
        profileIcon.appendChild(cImage);

        const metadata = document.createElement('div');
        metadata.classList.add('media-item-info');

        const metaContent = document.createElement('a');
        metaContent.classList.add('media-item-metadata');
        metaContent.href = "javascript:void(0);";
        metaContent.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const mediaMenu = document.createElement('ytm15-menu-button');
        mediaMenu.classList.add('media-item-menu');

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("icon-button", "menu-button");
        menuBtn.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");
        const menuAlign = function(e) {
        menuCont.setAttribute("style", `left: calc(${e.pageX}px - 161px); top: calc(${e.pageY}px - 20px);`);
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        function menuRemoveExtras() {

        }

        menuBtnCancel.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        menuOverlay.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        };
        menuBtn.setAttribute("aria-label", "Action menu");
        menuBtn.setAttribute("aria-haspopup", "true");
        menuBtn.innerHTML = `<ytm15-icon class="menu-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></ytm15-icon>`;
        mediaMenu.appendChild(menuBtn);

        media.appendChild(thumbnail);
	thumbnail.appendChild(thumbg);
	thumbnail.appendChild(image);
	thumbnail.appendChild(overlayBottom);
	overlayBottom.appendChild(time);
        metaContent.appendChild(title);
        metaContent.appendChild(subhead);
        subhead.appendChild(author);
        subhead.appendChild(views);
        subhead.appendChild(published);
        media.appendChild(details);
        details.appendChild(channel);
        details.appendChild(metadata);
        metadata.appendChild(metaContent);
        metadata.appendChild(mediaMenu);
        video.appendChild(media);
        LazyList.appendChild(video);
        itemSect.appendChild(LazyList);
        sectLazyList.appendChild(itemSect);
        });
    } else {
    getHomeData.onerror();
    }
    };
    }

    /* if (urlpage == "popular") */ 
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular") {
        pageCont.innerHTML = "";

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.removeAttribute("hidden");

        if (document.querySelector(".tab-bar")) {
        document.querySelector(".tab-bar").setAttribute("hidden", "");
        headerBar.classList.remove('has-tab-bar');
        document.querySelector(".tab-bar").setAttribute("isChannel", "false");
        };

        /* const data = await fetchData();
        console.log(data); */

        const getHomeData1 = new XMLHttpRequest();

        getHomeData1.open('GET', 'https://invidious.protokolla.fi/api/v1/popular', true);

        getHomeData1.onerror = function(event) {
        console.error("An error occurred with this operation (" + getHomeData1.status + ")");

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.setAttribute("hidden", "");

        const error = document.createElement("div");
        error.classList.add('error-container');
        error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
        pageCont.before(error);
        return;
        };

        getHomeData1.send();

        getHomeData1.onload = function() {
        if (getHomeData1.status === 200) {
        const data = JSON.parse(getHomeData1.response);
        console.log(data);

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.setAttribute("hidden", "");

        /* if (!data) {
        const error = document.createElement("div");
        error.classList.add('error-container');
        error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
        pageCont.before(error);
        return;
        } */

        headerTitle.setAttribute("aria-label", "Popular");
        headerTitle.textContent = "Popular";

        const page = document.createElement("page");
        page.classList.add('home');

        const tabContainer = document.createElement("div");
        tabContainer.classList.add('tabs-content-container');

        const tabContent = document.createElement("div");
        tabContent.classList.add('tab-content');
        tabContent.setAttribute("tab-identifier", "Popular_Videos");
    
        const section = document.createElement("div");
        section.classList.add('section-list');

        const sectLazyList = document.createElement("div");
        sectLazyList.classList.add('lazy-list');
        section.appendChild(sectLazyList);

        const parent = document.querySelector(".page-container");
        parent.appendChild(page);
        page.appendChild(tabContainer);
        tabContainer.appendChild(tabContent);
        tabContent.appendChild(section);

        var oldTitle = document.querySelector("title");
    
        var title = document.createElement("title");
        title.textContent = 'Popular - 2015YouTube';

        oldTitle.parentNode.replaceChild(title, oldTitle);

        data.forEach(function(item) {
        /* const channelData = fetch('https://yt.lemnoslife.com/noKey/channels?part=snippet,status&id=' + item.authorId); */

        const itemSect = document.createElement("div");
        itemSect.classList.add('item-section');

        const LazyList = document.createElement("div");
        LazyList.classList.add('lazy-list', 'no-animation');

        const video = document.createElement('div');
        video.classList.add('video-with-context', 'item');

        const media = document.createElement('div');
        media.classList.add('media-item');

        const thumbnail = document.createElement('a');
        thumbnail.classList.add('media-item-thumbnail');
        /* thumbnail.href = "/2015YouTube (Mobile)/watch.html?v=" + item.videoId; */
        thumbnail.href = "javascript:void(0);";
        thumbnail.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const thumbg = document.createElement('div');
        thumbg.classList.add('thumbnail-bg');

        const image = document.createElement('img');
        image.classList.add('thumbnail-img', 'ytm15-img', 'lazy');
        image.src = item.videoThumbnails[2].url;
        image.loading = "lazy";
        image.onload = function(){image.classList.add('loaded');};

        const overlayBottom = document.createElement('div');
        overlayBottom.classList.add('thumbnail-overlay-bottom');

        const time = document.createElement('div');
        time.classList.add('thumbnail-overlay-time-status');
        /* time.textContent = item.lengthSeconds.toLocaleString() + ' secs'; */
        if (item.lengthSeconds > "3599") {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(11, 8)
        } else {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(14, 5)
        }

        if (item.lengthSeconds == 0) {
        time.textContent = "";
        const getVideoLength = new XMLHttpRequest();
        getVideoLength.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,snippet&id=' + item.videoId, true);
 
        getVideoLength.send();
 
        getVideoLength.onload = function(){
          if (getVideoLength.status === 200) {
          const response = JSON.parse(getVideoLength.response);
          if (response.items[0].contentDetails.duration > "3599") {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(11, 8)
          } else {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(14, 5)
          }
          } else {
          console.error("An error occurred with this operation (" + getVideoLength.status + ")");
          }
        };
        }

        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('media-headline');

        const subhead = document.createElement('div');
        subhead.classList.add('subhead');

        const author = document.createElement('span');
        author.textContent = '';
        author.classList.add('media-byline', 'small-text');

        const authorName = document.createElement('a');
        authorName.textContent = item.author;
        authorName.classList.add('name');
        authorName.href = "#/channel/" + item.authorId;

        author.appendChild(authorName);

        const published = document.createElement('span');
        published.textContent = item.publishedText;
        published.classList.add('media-stats', 'small-text');

        const views = document.createElement('span');
        views.textContent = item.viewCount.toLocaleString() + ' views';
        views.classList.add('media-stats', 'small-text');

        const details = document.createElement('div');
        details.classList.add('media-item-details');

        const channel = document.createElement('div');
        channel.classList.add('media-channel');

        const channelA = document.createElement('a');
        channelA.setAttribute("aria-label", "Visit channel");
        channelA.href = "#/channel/" + item.authorId;

        const extEndpoint = document.createElement('a');
        extEndpoint.classList.add('media-extra-endpoint');
        /* extEndpoint.href = "/2015YouTube (Mobile)/watch.html?v=" + item.videoId; */
        extEndpoint.href = "javascript:void(0);";
        extEndpoint.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const cImage = document.createElement('img');
        cImage.classList.add('profile-img', 'ytm15-img', 'lazy');
        cImage.loading = "lazy";
        cImage.onload = function(){cImage.classList.add('loaded');}; 

        /* channelData
         .then(response => {
         if (!response.ok) {
         throw new Error('Network response was not ok');
         }
         return response.json();
         })
         .then(data1 => {
          // console.log('JSON data:', data1);
          cImage.src = data1.items[0].snippet.thumbnails.default.url;
         })
         .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        }); */

        const channelData = new XMLHttpRequest();
        channelData.open('GET', 'https://yt.lemnoslife.com/noKey/channels?part=snippet,status&id=' + item.authorId, true);
 
        channelData.send();
 
        channelData.onload = function(){
          if (channelData.status === 200) {
          const data1 = JSON.parse(channelData.response);
          cImage.src = data1.items[0].snippet.thumbnails.default.url;
          } else {
          console.error("An error occurred with this operation (" + channelData.status + ")");
          }
        };

        const profileIcon = document.createElement('div');
        profileIcon.classList.add('media-icon', 'profile-icon');

        channel.appendChild(channelA);
        channel.appendChild(extEndpoint);
        channelA.appendChild(profileIcon);
        profileIcon.appendChild(cImage);

        const metadata = document.createElement('div');
        metadata.classList.add('media-item-info');

        const metaContent = document.createElement('a');
        metaContent.classList.add('media-item-metadata');
        /* metaContent.href = "/2015YouTube (Mobile)/watch.html?v=" + item.videoId; */
        metaContent.href = "javascript:void(0);";
        metaContent.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const mediaMenu = document.createElement('ytm15-menu-button');
        mediaMenu.classList.add('media-item-menu');

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("icon-button", "menu-button");
        menuBtn.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");
        const menuAlign = function(e) {
        menuCont.setAttribute("style", `left: calc(${e.pageX}px - 161px); top: calc(${e.pageY}px - 20px);`);
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        function menuRemoveExtras() {

        }

        menuBtnCancel.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        menuOverlay.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        };
        menuBtn.setAttribute("aria-label", "Action menu");
        menuBtn.setAttribute("aria-haspopup", "true");
        menuBtn.innerHTML = `<ytm15-icon class="menu-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></ytm15-icon>`;
        mediaMenu.appendChild(menuBtn);

        media.appendChild(thumbnail);
	thumbnail.appendChild(thumbg);
	thumbnail.appendChild(image);
	thumbnail.appendChild(overlayBottom);
	overlayBottom.appendChild(time);
        metaContent.appendChild(title);
        metaContent.appendChild(subhead);
        subhead.appendChild(author);
        subhead.appendChild(views);
        subhead.appendChild(published);
        media.appendChild(details);
        details.appendChild(channel);
        details.appendChild(metadata);
        metadata.appendChild(metaContent);
        metadata.appendChild(mediaMenu);
        video.appendChild(media);
        LazyList.appendChild(video);
        itemSect.appendChild(LazyList);
        sectLazyList.appendChild(itemSect);
        });
    } else {
    getHomeData1.onerror();
    }
    };
    }

        /* let hash = window.location.hash;
        console.log(hash); */
        
        console.log(window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0]);

        function tabSwitch() {
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== undefined) {
        tab.setAttribute('aria-selected', 'false');
        tab1.setAttribute('aria-selected', 'false');
        }
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
        tab.setAttribute('aria-selected', 'false');
        tab1.setAttribute('aria-selected', 'true');
        }
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined) {
        tab.setAttribute('aria-selected', 'true');
        tab1.setAttribute('aria-selected', 'false');
        }
        }

        tabSwitch();

        window.addEventListener('hashchange', function (event) {
        tabSwitch();
        });
    };

    eventListenFunc();
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
        return;
    };

    pageCont.innerHTML = "";

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    /* const data = await fetchData();

    console.log(data); */

    const getHomeData3 = new XMLHttpRequest();

    getHomeData3.open('GET', 'https://invidious.protokolla.fi/api/v1/popular', true);

    getHomeData3.onerror = function(event) {
        console.error("An error occurred with this operation (" + getHomeData3.status + ")");

        var spinner = document.querySelector(".spinner-container.full-height");
        spinner.setAttribute("hidden", "");

        const error = document.createElement("div");
        error.classList.add('error-container');
        error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
        pageCont.before(error);
        return;
    };

    getHomeData3.send();

    getHomeData3.onload = function() {
    if (getHomeData3.status === 200) {
    const data = JSON.parse(getHomeData3.response);
    console.log(data);

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    /* if (!data) {
        const error = document.createElement("div");
        error.classList.add('error-container');
        error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
        pageCont.before(error);
        return;
    } */

    headerTitle.setAttribute("aria-label", "Home");
    headerTitle.textContent = "Home";

    if (!document.querySelector(".tab-bar")) {
    headerBar.appendChild(tabBar);
    headerBar.classList.add('has-tab-bar');
    tabBar.removeAttribute("hidden");
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    };

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").removeAttribute("hidden");
    headerBar.classList.add('has-tab-bar');
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    };

    const page = document.createElement("page");
    page.classList.add('home');

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "What_to_watch");

    const tabContent2 = document.createElement("div");
    tabContent2.classList.add('tab-content');
    tabContent2.setAttribute("tab-identifier", "Trending_placeholder");

    tabContent2.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

    const section = document.createElement("div");
    section.classList.add('section-list');

    const sectLazyList = document.createElement("div");
    sectLazyList.classList.add('lazy-list');
    section.appendChild(sectLazyList);

    const shelf = document.createElement("div");
    shelf.classList.add('shelf');

    const parent = document.querySelector(".page-container");
    parent.appendChild(page);
    page.appendChild(tabContainer);
    tabContainer.appendChild(tabContent);
    tabContainer.appendChild(tabContent2);
    tabContent.appendChild(section);
    sectLazyList.appendChild(shelf);

    const shelfHeader = document.createElement("div");
    shelfHeader.classList.add('shelf-header');
    const shelfHeaderEP = document.createElement("a");
    shelfHeaderEP.classList.add('shelf-header-endpoint');
    shelfHeaderEP.href = "#/popular";
    const shelfTitleBar = document.createElement("div");
    shelfTitleBar.classList.add('shelf-title-bar');
    shelfTitleBar.innerHTML = "<h3>Popular</h3>";

    const verticalList = document.createElement("div");
    verticalList.classList.add('vertical-list');

    const ESButtonCont = document.createElement("div");
    ESButtonCont.classList.add('expand-shelf-button-container');

    const moreIcon = document.createElement("ytm15-icon");
    moreIcon.classList.add('show-more-icon');
    moreIcon.innerHTML = `<svg viewBox="0 0 24 24" fill=""><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>`;

    const lessIcon = document.createElement("ytm15-icon");
    lessIcon.classList.add('show-less-icon');
    lessIcon.innerHTML = `<svg viewBox="0 0 24 24" fill=""><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>`;

    const ISButton = document.createElement("button");
    ISButton.classList.add('collapse-shelf-button', 'icon-button');
    ISButton.setAttribute('aria-label', 'Show less');
    ISButton.setAttribute('hidden', '');
    ISButton.onclick = function(){verticalList.classList.remove('expanded'); ISButton.setAttribute('hidden', ''); ESButton.removeAttribute('hidden');};

    const ESButton = document.createElement("button");
    ESButton.classList.add('expand-shelf-button', 'icon-button');
    ESButton.setAttribute('aria-label', 'Show more');
    ESButton.onclick = function(){verticalList.classList.add('expanded'); ESButton.setAttribute('hidden', ''); ISButton.removeAttribute('hidden');};
    ESButtonCont.appendChild(ESButton);
    ESButtonCont.appendChild(ISButton);

    ESButton.appendChild(moreIcon);
    ISButton.appendChild(lessIcon);

    shelf.appendChild(shelfHeader);
    shelfHeader.appendChild(shelfHeaderEP);
    shelfHeaderEP.appendChild(shelfTitleBar);
    shelf.appendChild(verticalList);

    renderDataTrending();

    var oldTitle = document.querySelector("title");
    
    var title = document.createElement("title");
    title.textContent = 'Home - 2015YouTube';

    oldTitle.parentNode.replaceChild(title, oldTitle);

    data.forEach(function(item) {
        const video = document.createElement('div');
        video.classList.add('compact-video', 'shelf-item');

        const media = document.createElement('div');
        media.classList.add('compact-media-item');

        const thumbnail = document.createElement('a');
        thumbnail.classList.add('compact-media-item-thumbnail');
        /* thumbnail.href = "/2015YouTube (Mobile)/watch.html?v=" + item.videoId; */
        thumbnail.href = "javascript:void(0);";
        thumbnail.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const thumbg = document.createElement('div');
        thumbg.classList.add('thumbnail-bg');

        const image = document.createElement('img');
        image.classList.add('thumbnail-img', 'ytm15-img', 'lazy');
        image.src = item.videoThumbnails[2].url;
        image.loading = "lazy";
        image.onload = function(){image.classList.add('loaded');};

        const overlayBottom = document.createElement('div');
        overlayBottom.classList.add('thumbnail-overlay-bottom');

        const time = document.createElement('div');
        time.classList.add('thumbnail-overlay-time-status');
        /* time.textContent = item.lengthSeconds.toLocaleString() + ' secs'; */
        if (item.lengthSeconds > "3599") {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(11, 8)
        } else {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(14, 5)
        }

        if (item.lengthSeconds == 0) {
        time.textContent = "";
        const getVideoLength = new XMLHttpRequest();
        getVideoLength.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,snippet&id=' + item.videoId, true);
 
        getVideoLength.send();
 
        getVideoLength.onload = function(){
          if (getVideoLength.status === 200) {
          const response = JSON.parse(getVideoLength.response);
          if (response.items[0].contentDetails.duration > "3599") {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(11, 8)
          } else {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(14, 5)
          }
          } else {
          console.error("An error occurred with this operation (" + getVideoLength.status + ")");
          }
        };
        }

        const title = document.createElement('h4');
        title.textContent = item.title;
        title.classList.add('compact-media-headline');

        const subhead = document.createElement('div');
        subhead.classList.add('subhead');

        const author = document.createElement('div');
        author.textContent = '';
        author.classList.add('compact-media-byline', 'small-text');

        const authorName = document.createElement('a');
        authorName.textContent = item.author;
        authorName.classList.add('name');
        authorName.href = "#/channel/" + item.authorId;

        author.appendChild(authorName);

        const published = document.createElement('div');
        published.textContent = item.publishedText;
        published.classList.add('compact-media-stats', 'small-text');

        const views = document.createElement('div');
        views.textContent = item.viewCount.toLocaleString() + ' views';
        views.classList.add('compact-media-stats', 'small-text');

        const metadata = document.createElement('div');
        metadata.classList.add('compact-media-item-metadata');

        const metaContent = document.createElement('a');
        metaContent.classList.add('compact-media-item-metadata-content');
        /* metaContent.href = "/2015YouTube (Mobile)/watch.html?v=" + item.videoId; */
        metaContent.href = "javascript:void(0);";
        metaContent.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const mediaMenu = document.createElement('ytm15-menu-button');
        mediaMenu.classList.add('media-item-menu');

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("icon-button", "menu-button");
        menuBtn.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");
        const menuAlign = function(e) {
        menuCont.setAttribute("style", `left: calc(${e.pageX}px - 161px); top: calc(${e.pageY}px - 20px);`);
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        function menuRemoveExtras() {

        }

        menuBtnCancel.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        menuOverlay.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        };
        menuBtn.setAttribute("aria-label", "Action menu");
        menuBtn.setAttribute("aria-haspopup", "true");
        menuBtn.innerHTML = `<ytm15-icon class="menu-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></ytm15-icon>`;
        mediaMenu.appendChild(menuBtn);

        media.appendChild(thumbnail);
	thumbnail.appendChild(thumbg);
	thumbnail.appendChild(image);
	thumbnail.appendChild(overlayBottom);
	overlayBottom.appendChild(time);
        metaContent.appendChild(title);
        metaContent.appendChild(subhead);
        subhead.appendChild(author);
        subhead.appendChild(published);
        subhead.appendChild(views);
        media.appendChild(metadata);
        metadata.appendChild(metaContent);
        metadata.appendChild(mediaMenu);
        video.appendChild(media);
        verticalList.appendChild(video);
    });
    
    verticalList.appendChild(ESButtonCont);
} else {
getHomeData3.onerror();
}
};
}

/* async function renderDataTrending() */ 
function renderDataTrending() {
    const spinner = document.querySelector(".spinner-container.full-height");
    const contItem = document.createElement("div");
    contItem.classList.add("continuation-item");
    const spinnerClone = spinner.cloneNode(true);
    spinnerClone.classList.remove("full-height");
    spinnerClone.removeAttribute("hidden");
    contItem.appendChild(spinnerClone);

    const sectLazyList = document.querySelector(".lazy-list");
    console.log(sectLazyList);
    sectLazyList.appendChild(contItem);

    /* const data = await fetchDataTrending();

    console.log(data); */

    const getHomeData2 = new XMLHttpRequest();
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "trending") {
    getHomeData2.open('GET', 'https://invidious.protokolla.fi/api/v1/trending', true);
    } else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending") {
    getHomeData2.open('GET', 'https://invidious.protokolla.fi/api/v1/trending?type=" + trendType', true);
    }

    getHomeData2.onerror = function(event) {
    console.error("An error occurred with this operation (" + getHomeData2.status + ")");

        contItem.remove();
        return;
    };

    getHomeData2.send();

    getHomeData2.onload = function() {
    if (getHomeData2.status === 200) {
    const data = JSON.parse(getHomeData2.response);
    console.log(data);

    /* if (!data) {
        contItem.remove();
        return;
    } */

    contItem.remove();

    const shelf = document.createElement("div");
    shelf.classList.add('shelf');

    sectLazyList.appendChild(shelf);

    const shelfHeader = document.createElement("div");
    shelfHeader.classList.add('shelf-header');
    const shelfHeaderEP = document.createElement("a");
    shelfHeaderEP.classList.add('shelf-header-endpoint');
    shelfHeaderEP.href = "#/trending";
    const shelfTitleBar = document.createElement("div");
    shelfTitleBar.classList.add('shelf-title-bar');
    shelfTitleBar.innerHTML = "<h3>Trending</h3>";

    const verticalList = document.createElement("div");
    verticalList.classList.add('vertical-list');

    const ESButtonCont = document.createElement("div");
    ESButtonCont.classList.add('expand-shelf-button-container');

    const moreIcon = document.createElement("ytm15-icon");
    moreIcon.classList.add('show-more-icon');
    moreIcon.innerHTML = `<svg viewBox="0 0 24 24" fill=""><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg>`;

    const lessIcon = document.createElement("ytm15-icon");
    lessIcon.classList.add('show-less-icon');
    lessIcon.innerHTML = `<svg viewBox="0 0 24 24" fill=""><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg>`;

    const ISButton = document.createElement("button");
    ISButton.classList.add('collapse-shelf-button', 'icon-button');
    ISButton.setAttribute('aria-label', 'Show less');
    ISButton.setAttribute('hidden', '');
    ISButton.onclick = function(){verticalList.classList.remove('expanded'); ISButton.setAttribute('hidden', ''); ESButton.removeAttribute('hidden');};

    const ESButton = document.createElement("button");
    ESButton.classList.add('expand-shelf-button', 'icon-button');
    ESButton.setAttribute('aria-label', 'Show more');
    ESButton.onclick = function(){verticalList.classList.add('expanded'); ESButton.setAttribute('hidden', ''); ISButton.removeAttribute('hidden');};
    ESButtonCont.appendChild(ESButton);
    ESButtonCont.appendChild(ISButton);

    ESButton.appendChild(moreIcon);
    ISButton.appendChild(lessIcon);

    shelf.appendChild(shelfHeader);
    shelfHeader.appendChild(shelfHeaderEP);
    shelfHeaderEP.appendChild(shelfTitleBar);
    shelf.appendChild(verticalList);

    data.forEach(function(item) {
        const video = document.createElement('div');
        video.classList.add('compact-video', 'shelf-item');

        const media = document.createElement('div');
        media.classList.add('compact-media-item');

        const thumbnail = document.createElement('a');
        thumbnail.classList.add('compact-media-item-thumbnail');
        thumbnail.href = "javascript:void(0);";
        thumbnail.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const thumbg = document.createElement('div');
        thumbg.classList.add('thumbnail-bg');

        const image = document.createElement('img');
        image.classList.add('thumbnail-img', 'ytm15-img', 'lazy');
        image.src = item.videoThumbnails[2].url;
        image.loading = "lazy";
        image.onload = function(){image.classList.add('loaded');};

        const overlayBottom = document.createElement('div');
        overlayBottom.classList.add('thumbnail-overlay-bottom');

        const time = document.createElement('div');
        time.classList.add('thumbnail-overlay-time-status');
        /* time.textContent = item.lengthSeconds.toLocaleString() + ' secs'; */
        if (item.lengthSeconds > "3599") {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(11, 8)
        } else {
        time.textContent = new Date(1000 * item.lengthSeconds).toISOString().substr(14, 5)
        }

        if (item.lengthSeconds == 0) {
        time.textContent = "";
        const getVideoLength = new XMLHttpRequest();
        getVideoLength.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,snippet&id=' + item.videoId, true);
 
        getVideoLength.send();
 
        getVideoLength.onload = function(){
          if (getVideoLength.status === 200) {
          const response = JSON.parse(getVideoLength.response);
          if (response.items[0].contentDetails.duration > "3599") {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(11, 8)
          } else {
          time.textContent = new Date(1000 * response.items[0].contentDetails.duration).toISOString().substr(14, 5)
          }
          } else {
          console.error("An error occurred with this operation (" + getVideoLength.status + ")");
          }
        };
        }

        const title = document.createElement('h4');
        title.textContent = item.title;
        title.classList.add('compact-media-headline');

        const subhead = document.createElement('div');
        subhead.classList.add('subhead');

        const author = document.createElement('div');
        author.textContent = '';
        author.classList.add('compact-media-byline', 'small-text');

        const authorName = document.createElement('a');
        authorName.textContent = item.author;
        authorName.classList.add('name');
        authorName.href = "#/channel/" + item.authorId;

        author.appendChild(authorName);

        const published = document.createElement('div');
        published.textContent = item.publishedText;
        published.classList.add('compact-media-stats', 'small-text');

        const views = document.createElement('div');
        views.textContent = item.viewCount.toLocaleString() + ' views';
        views.classList.add('compact-media-stats', 'small-text');

        const metadata = document.createElement('div');
        metadata.classList.add('compact-media-item-metadata');

        const metaContent = document.createElement('a');
        metaContent.classList.add('compact-media-item-metadata-content');
        metaContent.href = "javascript:void(0);";
        metaContent.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + item.videoId;
        playerVideoId = item.videoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const mediaMenu = document.createElement('ytm15-menu-button');
        mediaMenu.classList.add('media-item-menu');

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("icon-button", "menu-button");
        menuBtn.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");
        const menuAlign = function(e) {
        menuCont.setAttribute("style", `left: calc(${e.pageX}px - 161px); top: calc(${e.pageY}px - 20px);`);
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        function menuRemoveExtras() {

        }

        menuBtnCancel.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        menuOverlay.onclick = function(){
        menuRemoveExtras();
        menuRemove();
        };
        };
        menuBtn.setAttribute("aria-label", "Action menu");
        menuBtn.setAttribute("aria-haspopup", "true");
        menuBtn.innerHTML = `<ytm15-icon class="menu-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></ytm15-icon>`;
        mediaMenu.appendChild(menuBtn);

        media.appendChild(thumbnail);
	thumbnail.appendChild(thumbg);
	thumbnail.appendChild(image);
	thumbnail.appendChild(overlayBottom);
	overlayBottom.appendChild(time);
        metaContent.appendChild(title);
        metaContent.appendChild(subhead);
        subhead.appendChild(author);
        subhead.appendChild(published);
        subhead.appendChild(views);
        media.appendChild(metadata);
        metadata.appendChild(metaContent);
        metadata.appendChild(mediaMenu);
        video.appendChild(media);
        verticalList.appendChild(video);
    });

    verticalList.appendChild(ESButtonCont);
    } else {
    getHomeData2.onerror();
    }
    }
}