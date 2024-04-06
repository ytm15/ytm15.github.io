/* if (window.location.pathname.split("/").slice(3, 4) == "results.html") */
function dataModeChange() {
if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
dataMode = 'search';
} else {
dataMode = 'normal';
};
if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel") {
headerIsChannel = 'true';
} else {
headerIsChannel = 'false';
};
}

dataModeChange();

playerVideoId = "e";
playerEmbedURL = "https://inv.tux.pizza/embed/";

window.addEventListener('hashchange', function (event) {
dataModeChange();
});

    const queryString = window.location.search;
    console.log(queryString);

    const urlParams = new URLSearchParams(queryString);

    const urlpage = urlParams.get("page");
    console.log(urlpage);

    const trendType = urlParams.get("trtype");

    const videoIdParam = urlParams.get("v");

renderHeader();

function renderCompactMediaItem(parent, parentName, itemVideoId, itemThumbnail, itemLength, itemTitle, itemAuthor, itemAuthorId, itemPublishedText, itemViewCount, mediaType) {
        const video = document.createElement('div');
        compMediaTypeName = 'compact-video';
        if (mediaType == "channel") {
        compMediaTypeName = 'compact-channel';
        }
        if (mediaType == "playlist") {
        compMediaTypeName = 'compact-playlist';
        }
        video.classList.add(compMediaTypeName);
        if (parentName == "shelf") {
        video.classList.add('shelf-item');
        }

        const media = document.createElement('div');
        media.classList.add('compact-media-item');

        const thumbnail = document.createElement('a');
        thumbnail.classList.add('compact-media-item-thumbnail');
        thumbnail.href = "javascript:void(0);";
        if (mediaType == "channel") {
        thumbnail.href = "#/channel/" + itemAuthorId;
        } else if (mediaType == "playlist") {
        thumbnail.href = "#/playlist?list=" + itemVideoId;
        }
        if (mediaType == "video") {
        thumbnail.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const thumbg = document.createElement('div');
        thumbg.classList.add('thumbnail-bg');

        const image = document.createElement('img');
        image.classList.add('thumbnail-img', 'ytm15-img', 'lazy');
        image.src = itemThumbnail;
        image.loading = "lazy";
        image.onload = function(){image.classList.add('loaded');};

        const overlayBottom = document.createElement('div');
        overlayBottom.classList.add('thumbnail-overlay-bottom');

        const time = document.createElement('div');
        time.classList.add('thumbnail-overlay-time-status');
        if (mediaType == "channel") {

        } else if (mediaType == "playlist") {

        } else {
        /* time.textContent = item.lengthSeconds.toLocaleString() + ' secs'; */
        if (itemLength > "3599") {
        time.textContent = new Date(1000 * itemLength).toISOString().substr(11, 8)
        } else {
        time.textContent = new Date(1000 * itemLength).toISOString().substr(14, 5)
        }
        if (itemLength == 0) {
        time.textContent = "";
        const getVideoLength = new XMLHttpRequest();
        getVideoLength.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,snippet&id=' + itemVideoId, true);
 
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
        }

        const overlaySide = document.createElement('div');
        overlaySide.classList.add('thumbnail-overlay-side');

        const overlaySideText = document.createElement('div');
        overlaySideText.classList.add('thumbnail-overlay-side-text');
        overlaySideText.textContent = itemLength.toLocaleString();
        overlaySide.appendChild(overlaySideText);
        overlaySide.innerHTML += `<ytm15-icon class="playlist"><svg viewBox="0 0 24 24" fill=""><path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path></svg></ytm15-icon>`;

        const title = document.createElement('h4');
        title.textContent = itemTitle;
        title.classList.add('compact-media-headline');

        const subhead = document.createElement('div');
        subhead.classList.add('subhead');

        const author = document.createElement('div');
        author.textContent = '';
        author.classList.add('compact-media-byline', 'small-text');

        const authorName = document.createElement('a');
        authorName.textContent = itemAuthor;
        authorName.classList.add('name');
        authorName.href = "#/channel/" + itemAuthorId;

        author.appendChild(authorName);
        if (mediaType == "playlist") {
        author.innerHTML += " • Playlist";
        }
        if (mediaType == "channel") {
        author.textContent = itemAuthor;
        }

        const vidCountByline = document.createElement('div');
        vidCountByline.textContent = itemLength.toLocaleString() + " videos";
        vidCountByline.classList.add('compact-media-byline', 'small-text');

        const published = document.createElement('div');
        published.textContent = itemPublishedText;
        published.classList.add('compact-media-stats', 'small-text');

        const views = document.createElement('div');
        if (mediaType == "channel") {

        } else if (mediaType == "playlist") {

        } else {
        views.textContent = itemViewCount.toLocaleString() + ' views';
        }
        views.classList.add('compact-media-stats', 'small-text');

        const metadata = document.createElement('div');
        metadata.classList.add('compact-media-item-metadata');

        const metaContent = document.createElement('a');
        metaContent.classList.add('compact-media-item-metadata-content');
        metaContent.href = "javascript:void(0);";
        if (mediaType == "channel") {
        metaContent.href = "#/channel/" + itemAuthorId;
        } else if (mediaType == "playlist") {
        metaContent.href = "#/playlist?list=" + itemVideoId;
        }
        if (mediaType == "video") {
        metaContent.onclick = function(){
        app.insertAdjacentElement("afterbegin", watchContainer);
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
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
        if (mediaType == "channel") {

        } else if (mediaType == "playlist") {
        thumbnail.appendChild(overlaySide);
        } else {
	thumbnail.appendChild(overlayBottom);
	overlayBottom.appendChild(time);
        }
        metaContent.appendChild(title);
        metaContent.appendChild(subhead);
        subhead.appendChild(author);
        if (mediaType == "channel") {

        } else if (mediaType == "playlist") {
        subhead.appendChild(vidCountByline);
        } else {
        subhead.appendChild(published);
        subhead.appendChild(views);
        }
        media.appendChild(metadata);
        metadata.appendChild(metaContent);
        metadata.appendChild(mediaMenu);
        video.appendChild(media);
        parent.appendChild(video);
}

function renderMediaItem(parent, parentName, itemVideoId, itemThumbnail, itemLength, itemTitle, itemAuthor, itemAuthorId, itemPublishedText, itemViewCount) {
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
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
        };

        const thumbg = document.createElement('div');
        thumbg.classList.add('thumbnail-bg');

        const image = document.createElement('img');
        image.classList.add('thumbnail-img', 'ytm15-img', 'lazy');
        image.src = itemThumbnail;
        image.loading = "lazy";
        image.onload = function(){image.classList.add('loaded');};

        const overlayBottom = document.createElement('div');
        overlayBottom.classList.add('thumbnail-overlay-bottom');

        const time = document.createElement('div');
        time.classList.add('thumbnail-overlay-time-status');
        /* time.textContent = item.lengthSeconds.toLocaleString() + ' secs'; */
        if (itemLength > "3599") {
        time.textContent = new Date(1000 * itemLength).toISOString().substr(11, 8)
        } else {
        time.textContent = new Date(1000 * itemLength).toISOString().substr(14, 5)
        }

        /* if (item.lengthSeconds == 0) {
        time.textContent = 'YT Short';
        } */

        if (itemLength == 0) {
        time.textContent = "";
        const getVideoLength = new XMLHttpRequest();
        getVideoLength.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,snippet&id=' + itemVideoId, true);
 
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
        title.textContent = itemTitle;
        title.classList.add('media-headline');

        const subhead = document.createElement('div');
        subhead.classList.add('subhead');

        const author = document.createElement('span');
        author.textContent = '';
        author.classList.add('media-byline', 'small-text');

        const authorName = document.createElement('a');
        authorName.textContent = itemAuthor;
        authorName.classList.add('name');
        authorName.href = "#/channel/" + itemAuthorId;

        author.appendChild(authorName);

        const published = document.createElement('span');
        published.textContent = itemPublishedText;
        published.classList.add('media-stats', 'small-text');

        const views = document.createElement('span');
        views.textContent = itemViewCount.toLocaleString() + ' views';
        views.classList.add('media-stats', 'small-text');

        const details = document.createElement('div');
        details.classList.add('media-item-details');

        const channel = document.createElement('div');
        channel.classList.add('media-channel');

        const channelA = document.createElement('a');
        channelA.setAttribute("aria-label", "Visit channel");
        channelA.href = "#/channel/" + itemAuthorId;

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
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
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
        channelData.open('GET', 'https://yt.lemnoslife.com/noKey/channels?part=snippet,status&id=' + itemAuthorId, true);
 
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
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
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
        if (parentName == "sect-lazy-list") {
        LazyList.appendChild(video);
        itemSect.appendChild(LazyList);
        parent.appendChild(itemSect);
        } else {
        parent.appendChild(video);
        }
}

/* let hash = window.location.hash;
console.log(hash); */

console.log(window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0]);

const app = document.querySelector("ytm15app");

const headerTitle = document.querySelector(".header-title");

const headerBar = document.querySelector("ytm15-header-bar");

const pageCont = document.querySelector('.page-container');

var title = document.querySelector("title");

const watchContainer = document.createElement("div");
watchContainer.id = "watchpageFrame_Container";

const watchOverlay = document.createElement("div");
watchOverlay.classList.add("watchpage-frame-overlay");

const watchItems = document.createElement("div");
watchItems.classList.add("watchpage-frame-items");

const playerCont = document.createElement("div");
playerCont.classList.add("player-container");
playerCont.id = "playerContainerId";

const playerCont2 = document.createElement("div");
playerCont2.classList.add("player-inside-player");

const playerSpinner = document.createElement("div");
playerSpinner.classList.add("spinner-container");
playerSpinner.innerHTML = `
<svg class="spinner" width="60px" height="60px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="spuare" cx="33" cy="33" r="30"></circle>
</svg>
`;
playerCont2.appendChild(playerSpinner);

const playerFrame = document.createElement("iframe");
playerFrame.classList.add("watchpage-iframe", "player-iframe", "inv-player-for-ytm15");
playerFrame.src = playerEmbedURL + playerVideoId + "?autoplay=1";
playerFrame.scrolling = "yes";
playerFrame.frameBorder = "0";
playerFrame.width = "100%";
playerFrame.height = "100%";
playerFrame.setAttribute("allowfullscreen", "");

const ytm15Watch = document.createElement("ytm15-watch");

const watchActions = document.createElement("div");
watchActions.classList.add("watchpage-frame-actions");

const watchFrame = document.createElement("iframe");
watchFrame.classList.add("watchpage-iframe");
watchFrame.src = "";
watchFrame.scrolling = "yes";
watchFrame.frameBorder = "0";
watchFrame.width = "100%";
watchFrame.height = "100%";
watchFrame.setAttribute("allowfullscreen", "");

const exitWatch = document.createElement("button");
exitWatch.classList.add("icon-button", "watch-action-button");
exitWatch.onclick = function(){
watchContainer.classList.add("miniplayer");
app.classList.add("has-miniplayer");
watchFrame.scrolling = "no";
};
exitWatch.setAttribute("aria-label", "Exit watchpage");
exitWatch.setAttribute("aria-haspopup", "false");
exitWatch.innerHTML = `<ytm15-icon class="exit-watch-icon"><svg viewBox="0 0 24 24" fill=""><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></ytm15-icon>`;

const mpContent = document.createElement("div");
mpContent.classList.add("miniplayer-content");

const mpActions = document.createElement("div");
mpActions.classList.add("miniplayer-actions");

const openWatch = document.createElement("button");
openWatch.classList.add("icon-button", "watch-action-button");
openWatch.onclick = function(){
watchContainer.classList.remove("miniplayer");
app.classList.remove("has-miniplayer");
watchFrame.scrolling = "yes";
};
openWatch.setAttribute("aria-label", "Open watchpage");
openWatch.setAttribute("aria-haspopup", "false");
openWatch.innerHTML = `<ytm15-icon class="open-watch-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg></ytm15-icon>`;

const closeVideo = document.createElement("button");
closeVideo.classList.add("icon-button", "watch-action-button");
closeVideo.onclick = function(){
watchContainer.classList.add("closing");
setTimeout(function() {
  watchContainer.remove();
  app.classList.remove("has-miniplayer");
  watchContainer.classList.remove("closing");
  watchFrame.scrolling = "yes";
}, 300);
};
closeVideo.setAttribute("aria-label", "Close video");
closeVideo.setAttribute("aria-haspopup", "false");
closeVideo.innerHTML = `<ytm15-icon class="x-icon"><svg viewBox="0 0 24 24" fill=""><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></ytm15-icon>`;

watchContainer.appendChild(watchOverlay);
watchContainer.appendChild(watchItems);
watchItems.appendChild(playerCont);
playerCont.appendChild(playerCont2);
playerCont2.appendChild(playerFrame);
watchItems.appendChild(ytm15Watch);
playerCont2.appendChild(watchActions);
watchActions.appendChild(exitWatch);
/* watchItems.appendChild(watchFrame); */
playerCont.appendChild(mpContent);
mpContent.appendChild(mpActions);
mpActions.appendChild(openWatch);
mpActions.appendChild(closeVideo);

const menuContain = document.createElement("div");
menuContain.id = "menu";
menuContain.classList.add("menu-container");

const menuCont = document.createElement("div");
menuCont.role = "dialog";
menuCont.ariaModal = "true";
menuCont.classList.add("menu-content");
menuContain.appendChild(menuCont);

const menuOverlay = document.createElement("div");
menuOverlay.classList.add("ytm15-overlay");
menuOverlay.onclick = function(){
    menuRemove();
}
menuContain.appendChild(menuOverlay);

const menuItem = document.createElement("div");
menuItem.classList.add("menu-item");
menuCont.appendChild(menuItem);

const menuBtnCancel = document.createElement("button");
menuBtnCancel.classList.add("menu-item-button", "cancel-button", "has-ripple");
menuBtnCancel.textContent = "Cancel";
menuBtnCancel.onclick = function(){
    menuRemove();
};
menuItem.appendChild(menuBtnCancel);

function menuRenderer() {
    document.body.appendChild(menuContain);
    document.body.classList.add("modal-open");
}

function menuRemove() {
    menuCont.classList.add("closing");
setTimeout(function() {
    document.body.removeChild(menuContain);
    document.body.classList.remove("modal-open");
    menuCont.classList.remove("closing");
    menuCont.style = "";
}, 300);
}

function searching(parent, sbInput) {
    const headerBar = document.querySelector("ytm15-header-bar");
    const header = document.querySelector("header");
    header.setAttribute('data-mode', 'searching');

    const input = document.querySelector(".searchbox-input");
    input.focus();

    const searchOverlay = document.querySelector(".searching-overlay");
    searchOverlay.removeAttribute('hidden');

    if (!document.querySelector(".sbdd-list-cont")) {
    searchSuggestList(parent, sbInput);
    }

    const backBtn = document.querySelector("button.back-button");
    backBtn.removeAttribute("hidden");
    backBtn.onclick = function(){
        header.setAttribute('data-mode', dataMode);
        searchOverlay.setAttribute('hidden', '');
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel") {
            
        } else {
            backBtn.setAttribute("hidden", "");
        }
        backBtn.onclick = function(){history.back()};
    };
}

function hashDetector() {
    document.querySelector(".searching-overlay").setAttribute("hidden", "");
    if (document.querySelector(".error-container")) {
    document.querySelector(".error-container").remove();
    }
if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "") {
    renderData();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about") {
    aboutYTm15();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel") {
    channelPage();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    searchPage();
} else {
    if (document.querySelector(".spinner-container.full-height")) {
    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");
    }
    pageCont.innerHTML = "";
    title.textContent = ' - 2015YouTube';
    headerTitle.setAttribute("aria-label", "");
    headerTitle.textContent = "";
    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };
}
}

if (window.location.pathname.split("/").slice(2, 3) == "2015YouTube%20(Mobile)") {
if (window.location.pathname.split("/").slice(3, 4) == "index.html" || window.location.pathname.split("/").slice(3, 4) == undefined || window.location.pathname.split("/").slice(3, 4) == "") { 
hashDetector();
}
}
if (window.location.pathname.split("/").slice(2, 3) !== "2015YouTube%20(Mobile)") {
if (window.location.pathname.split("/").slice(2, 3) == "index.html" || window.location.pathname.split("/").slice(2, 3) == undefined || window.location.pathname.split("/").slice(2, 3) == "") { 
hashDetector();
}
}

window.addEventListener('hashchange', function (event) {
    if (window.location.pathname.split("/").slice(2, 3) == "2015YouTube%20(Mobile)") {
    if (window.location.pathname.split("/").slice(3, 4) == "index.html" || window.location.pathname.split("/").slice(3, 4) == undefined || window.location.pathname.split("/").slice(3, 4) == "") { 
    hashDetector();
    }
    }
    if (window.location.pathname.split("/").slice(2, 3) !== "2015YouTube%20(Mobile)") {
    if (window.location.pathname.split("/").slice(2, 3) == "index.html" || window.location.pathname.split("/").slice(2, 3) == undefined || window.location.pathname.split("/").slice(2, 3) == "") { 
    hashDetector();
    }
    }
});