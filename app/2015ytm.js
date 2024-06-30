/* if (window.location.pathname.split("/").slice(3, 4) == "results.html") */
function dataModeChange() {
if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
dataMode = 'search';
} else if (window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings") { 
dataMode = 'settings';
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

documentHTML = document.querySelector("html");

function localStorageChange(){
DISABLE_YTM15_APP_BORDER_expflag = localStorage.getItem("DISABLE_YTM15_APP_BORDER");
WEB_ENABLE_DARK_THEME_OPTION_expflag = localStorage.getItem("WEB_ENABLE_DARK_THEME_OPTION");
DARK_THEME_option = localStorage.getItem("DARK_THEME");
WEB_CHANNELS_HEADER_NO_LEFT_MARGIN_expflag = localStorage.getItem("WEB_CHANNELS_HEADER_NO_LEFT_MARGIN");
MENU_DISABLE_CANCEL_BUTTON_expflag = localStorage.getItem("MENU_DISABLE_CANCEL_BUTTON");
if (MENU_DISABLE_CANCEL_BUTTON_expflag == undefined) {
localStorage.setItem("MENU_DISABLE_CANCEL_BUTTON", "true");
MENU_DISABLE_CANCEL_BUTTON_expflag = localStorage.getItem("MENU_DISABLE_CANCEL_BUTTON");
}

if (DISABLE_YTM15_APP_BORDER_expflag == "true") {
    documentHTML.classList.add("no-app-border");
} else {
    documentHTML.classList.remove("no-app-border");
};

if (DARK_THEME_option == "true") {
    documentHTML.classList.add("dark");
} else {
    documentHTML.classList.remove("dark");
};

if (WEB_ENABLE_DARK_THEME_OPTION_expflag == "true") {
    if (DARK_THEME_option == "true") {
    documentHTML.classList.add("dark");
    }
} else {
    documentHTML.classList.remove("dark");
};

if (WEB_CHANNELS_HEADER_NO_LEFT_MARGIN_expflag == "true") {
    
} else {
    
};
};

localStorageChange();

window.addEventListener("storage", function(){
localStorageChange();
});

APIbaseURL = "https://inv.tux.pizza/";

playerVideoId = "e";
playerEmbedURL = "https://invidious.fi/embed/";
playerEmbedURLEnd = "?autoplay=1&quality=dash&player_style=youtube&local=true";
playerEmbedURLYT = "https://www.youtube.com/embed/";
playerEmbedURLYTEnd = "?autoplay=1&enablejsapi=1&rel=0&origin=" + location.origin + "&widget_referrer=" + location.origin;

Subscribe_text_string = "Subscribe"
Home_text_string = "Home"
Popular_text_string = "Popular"
Trending_text_string = "Trending"
_2015YT_text_string = "2015YouTube"
SearchYT_text_string = "Search YouTube"
/* Channel_Home_WIP_text_string = "Channel pages' home pages are currently being worked on. Please check back later" */
Channel_Home_WIP_text_string = "Channel pages' home pages haven't been built yet. Please check back later";
No_Search_Results_text_string = "No results found. Try searching for something else or removing filters";
Dead_End_text_string = "Looks like you've reached the end";
Share_text_string = "Share";
DescMusic_text_string = "Music in this video";
LearnMore_text_string = "Learn more";
Song_text_string = "Song";
Artist_text_string = "Artist";
Album_text_string = "Album";
SongLicensed_text_string = "Licensed to YouTube by";
Suggestions_text_string = "Suggestions";
Settings_text_string = "Settings";
General_text_string = "General";
SettingsMSG_text_string = "There is no page open at the current moment";
ExpFlags_text_string = "YTm15 Experimental Flags";
SettingsMSG2_text_string = "To be added in the near future";
AboutYTm15_text_string = "About YTm15";
DarkTheme_text_string = "Dark theme";
DarkThemeDesc_text_string = "Enable dark theme throughout the app";
About_text_string = "About";
ReturnHomepage_text_string = "Return home";
Reload_text_string = "Refresh";
SortBy_text_string = "Sort by";
Mostpopular_text_string = "Most popular";
Oldest_text_string = "Date added (oldest)";
Newest_text_string = "Date added (newest)";

function renderSubscribeBtn(parent) {
    const mtrlBtnCont = document.createElement("div");
    mtrlBtnCont.classList.add("material-button-container", "compact", "subscribe-button");
    mtrlBtnCont.dataset.style = "BRAND";
    mtrlBtnCont.dataset.iconOnly = "false";
    mtrlBtnCont.setAttribute("is-busy", "false");
    mtrlBtnCont.ariaBusy = "false";
    mtrlBtnCont.setAttribute("disabled", "false");
    mtrlBtnCont.innerHTML = `<button class="material-button" aria-label="${Subscribe_text_string}">
<img class="ytm15-img-icon ytm15-img button-icon subscribe-icon" src="subscribe_mark.png"></img><div class="button-text">${Subscribe_text_string}</div>
</button>`
    parent.appendChild(mtrlBtnCont);
}

function renderToggleBtn(parent, isDisabled, isPressed, LSItem){
    const toggleBtnCont = document.createElement("ytm15-toggle-button-container");
    const toggleBtn = document.createElement("button");
    toggleBtn.classList.add("toggle-button");
    toggleBtn.setAttribute("aria-pressed", "false");
    toggleBtn.onclick = function(){
    if (localStorage.getItem(LSItem) == "true") {
    localStorage.setItem(LSItem, "false");
    toggleBtn.setAttribute("aria-pressed", "false");
    } else {
    localStorage.setItem(LSItem, "true");
    toggleBtn.setAttribute("aria-pressed", "true");
    }
    localStorageChange();
    };
    if (isDisabled) {
    toggleBtn.setAttribute("disabled", true);
    toggleBtn.onclick = undefined;
    }
    if (isPressed) {
    toggleBtn.setAttribute("aria-pressed", "true");
    }
    const toggleBtnTrack = document.createElement("div");
    toggleBtnTrack.classList.add("toggle-button-track");
    const toggleBtnCircle = document.createElement("div");
    toggleBtnCircle.classList.add("toggle-button-circle", "has-ripple");

    parent.appendChild(toggleBtnCont);
    toggleBtnCont.appendChild(toggleBtn);
    toggleBtn.appendChild(toggleBtnTrack);
    toggleBtn.appendChild(toggleBtnCircle);
}

function renderDropdownSelect(ddText, parent, ddItems, ddisChannelSort) {
    const dropdownSelect = document.createElement("div");
    dropdownSelect.classList.add("dropdown-select", "has-ripple");
    if (ddisChannelSort) {
    dropdownSelect.innerHTML = `<ytm15-icon class="sort-icon" style="
    width: 26px;
    height: 26px;
    margin: -2px 0;
"><svg viewBox="0 0 24 24" fill=""><path d="M3,13H15V11H3M3,6V8H21V6M3,18H9V16H3V18Z"></path></svg></ytm15-icon>`;
    }
    const dropdownSelectText = document.createElement("div");
    var ddItemsResult = ddItems.filter(function(obj){
      if (obj.selected == true){
        ddText = obj.title;
      };
    });
    dropdownSelectText.innerHTML = ddText;
    if (ddisChannelSort) {
    dropdownSelectText.innerHTML = SortBy_text_string;
    }
    dropdownSelectText.classList.add("dropdown-text");

        dropdownSelect.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");

        const rect = dropdownSelect.getBoundingClientRect();
        const menuRect = menuCont.getBoundingClientRect();
        const menuAlign = function() {
        menuCont.classList.add("menu-style-dropdown");
        menuCont.setAttribute("style", `left: ${rect.left - menuCont.offsetWidth + window.scrollX + 11}px; top: ${rect.top + window.scrollY - 10}px; margin: 8px 12px;`);
        if (rect.left - menuCont.offsetWidth + window.scrollX + 11 < 0) {
        menuCont.setAttribute("style", `left: 0px; top: ${rect.top + window.scrollY - 10}px; margin: 8px 12px;`);
        }
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        ddItems.forEach(function(item){
        menuItem1 = document.createElement("div");
        menuItem1.classList.add("menu-item");
        menuItem.before(menuItem1);

        const menuItemBtn1 = document.createElement("button");
        menuItemBtn1.classList.add("menu-item-button", "has-ripple");
        menuItemBtn1.textContent = item.title;
        menuItemBtn1.onclick = item.onclick;
        menuItemBtn1.setAttribute("aria-selected", item.selected);
        menuItem1.appendChild(menuItemBtn1);
        });

        menuRemoveExtras = function() {
            setTimeout(function() {
            Array.from(menuCont.querySelectorAll(".menu-item")).forEach(function(item){
            if (!item.children[0].classList.contains("cancel-button")) {
            item.remove();
            };
            });
            menuCont.classList.remove("menu-style-dropdown");
            }, 300);
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

    dropdownSelect.appendChild(dropdownSelectText);
    dropdownSelect.innerHTML += `<ytm15-icon class="dropdown-arrow-icon"><svg viewBox="0 0 24 24" fill=""><path d="M7,10L12,15L17,10H7Z"></path></svg></ytm15-icon>`;
    parent.appendChild(dropdownSelect);
}

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

    const searchParamSort = urlParams.get("sort");
    const searchParamDate = urlParams.get("date");
    const searchParamDuration = urlParams.get("duration");
    const searchParamType = urlParams.get("type");
    const searchParamFeatures = urlParams.get("features");

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
        if (mediaType == "hashtag") {
        compMediaTypeName = 'compact-hashtag';
        }
        if (parentName == "playlist-video-list") {
        compMediaTypeName = 'playlist-video';
        }
        video.classList.add(compMediaTypeName);
        if (parentName == "shelf" || parentName == "channel-shelf") {
        video.classList.add('shelf-item');
        }
        if (parentName == "related-media-lazy-list") {
        video.classList.add('item');
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
        } else if (mediaType == "hashtag") {
        thumbnail.href = "#" + itemVideoId;
        }
        if (mediaType == "video" || mediaType == "shortVideo") {
        thumbnail.onclick = function(){
        if (!app.querySelector("#watchpageFrame_Container")) {
        app.insertAdjacentElement("afterbegin", watchContainer);
        }
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        /* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
        playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
        renderWatchPage(ytm15Watch);
        }
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
        /* overlaySide.innerHTML += `<ytm15-icon class="playlist"><svg viewBox="0 0 24 24" fill=""><path d="M3.67 8.67h14V11h-14V8.67zm0-4.67h14v2.33h-14V4zm0 9.33H13v2.34H3.67v-2.34zm11.66 0v7l5.84-3.5-5.84-3.5z"></path></svg></ytm15-icon>`; */
        overlaySide.innerHTML += `<img class="ytm15-img-icon ytm15-img playlist-icon" src="ic_playlist.png"></img>`;

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

        const vidCountStats = document.createElement('div');
        vidCountStats.textContent = itemLength.toLocaleString() + " videos";
        vidCountStats.classList.add('compact-media-stats', 'small-text');

        const hashChannelCount = document.createElement('div');
        hashChannelCount.textContent = itemAuthor.toLocaleString() + " channels";
        hashChannelCount.classList.add('compact-media-stats', 'small-text');

        if (mediaType == "channel") {
        vidCountByline.innerHTML = `<span style="font-style: italic;opacity: .8;">Retrieving video count...</span>`;
        const channelData = new XMLHttpRequest();
        channelData.open('GET', 'https://yt.lemnoslife.com/channels?part=snippet,status,about&id=' + itemAuthorId, true);
 
        channelData.send();
 
        channelData.onload = function(){
          if (channelData.status === 200) {
          const data1 = JSON.parse(channelData.response);
          vidCountByline.textContent = data1.items[0].about.stats.videoCount.toLocaleString() + " videos";
          } else {
          console.error("An error occurred with this operation (" + channelData.status + ")");
          }
        };
        }

        const published = document.createElement('div');
        published.textContent = itemPublishedText;
        published.classList.add('compact-media-stats', 'small-text');

        const views = document.createElement('div');
        if (mediaType == "channel") {

        } else if (mediaType == "playlist") {

        } else if (mediaType == "hashtag") { 
        
        } else {
        if (itemViewCount !== null) {
        views.textContent = itemViewCount.toLocaleString() + ' views';
        } else {
        views.textContent = 'No views';
        }
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
        } else if (mediaType == "hashtag") {
        metaContent.href = "#" + itemVideoId;
        }
        if (mediaType == "video" || mediaType == "shortVideo") {
        metaContent.onclick = function(){
        if (!app.querySelector("#watchpageFrame_Container")) {
        app.insertAdjacentElement("afterbegin", watchContainer);
        }
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        /* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
        playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
        renderWatchPage(ytm15Watch);
        }
        };

        const mediaMenu = document.createElement('ytm15-menu-button');
        mediaMenu.classList.add('media-item-menu');

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("icon-button", "menu-button");
        menuBtn.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");
        /* const menuAlign = function(e) {
        menuCont.setAttribute("style", `left: calc(${e.pageX}px - 161px); top: calc(${e.pageY}px - 20px);`);
        } */

        const rect = menuBtn.getBoundingClientRect();
        const menuRect = menuCont.getBoundingClientRect();
        const menuAlign = function() {
        menuCont.classList.add("menu-style-holo");
        menuCont.setAttribute("style", `left: ${rect.left - menuCont.offsetWidth + window.scrollX + 11}px; top: ${rect.top + window.scrollY - 10}px; margin: 7px;`);
        if (rect.left - menuCont.offsetWidth + window.scrollX + 11 < 0) {
        menuCont.setAttribute("style", `left: 0px; top: ${rect.top + window.scrollY - 10}px; margin: 7px;`);
        }
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        const menuItemShare = document.createElement("div");
        menuItemShare.classList.add("menu-item");
        menuItem.before(menuItemShare);

        const menuItemBtnShare = document.createElement("button");
        menuItemBtnShare.classList.add("menu-item-button", "has-ripple");
        menuItemBtnShare.textContent = "Sharing will be implemented soon";
        menuItemBtnShare.setAttribute("style", "opacity: .7;")
        menuItemBtnShare.onclick = function(){
            
        };
        menuItemShare.appendChild(menuItemBtnShare);

        function menuRemoveExtras() {
            setTimeout(function() {
            menuItemShare.remove();
            menuCont.classList.remove("menu-style-holo");
            }, 300);
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
        } else if (mediaType == "hashtag") {

        } else {
	thumbnail.appendChild(overlayBottom);
	overlayBottom.appendChild(time);
        }
        metaContent.appendChild(title);
        metaContent.appendChild(subhead);
        if (mediaType == "hashtag") {
        subhead.appendChild(vidCountStats);
        subhead.appendChild(hashChannelCount);
        } else {
        if (parentName !== "channel-lazy-list" && parentName !== "channel-shelf" || mediaType == "playlist") {
        subhead.appendChild(author);
        }
        }
        if (mediaType == "channel") {
        subhead.appendChild(vidCountByline);
        } else if (mediaType == "playlist") {
        subhead.appendChild(vidCountByline);
        } else if (mediaType == "hashtag") {

        } else {
        if (parentName !== "related-media-lazy-list" && parentName !== "playlist-video-list") {
        subhead.appendChild(published);
        }
        if (parentName !== "playlist-video-list") {
        subhead.appendChild(views);
        }
        }
        media.appendChild(metadata);
        metadata.appendChild(metaContent);
        if (mediaType == "hashtag") {
        
        } else {
        metadata.appendChild(mediaMenu);
        }
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
        if (!app.querySelector("#watchpageFrame_Container")) {
        app.insertAdjacentElement("afterbegin", watchContainer);
        }
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        /* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
        playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
        renderWatchPage(ytm15Watch);
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
          /* console.log(response); */
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
        if (itemViewCount !== null) {
        views.textContent = itemViewCount.toLocaleString() + ' views';
        } else {
        views.textContent = 'No views';
        }
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
        if (!app.querySelector("#watchpageFrame_Container")) {
        app.insertAdjacentElement("afterbegin", watchContainer);
        }
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        /* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
        playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
        renderWatchPage(ytm15Watch);
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
        if (!app.querySelector("#watchpageFrame_Container")) {
        app.insertAdjacentElement("afterbegin", watchContainer);
        }
        if (watchContainer.classList.contains("miniplayer")) {
        watchContainer.classList.remove("miniplayer");
        app.classList.remove("has-miniplayer");
        watchFrame.scrolling = "yes";
        }
        watchFrame.src = "watch.html?v=" + itemVideoId;
        playerVideoId = itemVideoId;
        /* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
        playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
        renderWatchPage(ytm15Watch);
        };

        const mediaMenu = document.createElement('ytm15-menu-button');
        mediaMenu.classList.add('media-item-menu');

        const menuBtn = document.createElement("button");
        menuBtn.classList.add("icon-button", "menu-button");
        menuBtn.onclick = function(){
        menuRenderer();
        menuCont.setAttribute("style", "top: 0; right: 0;");
        /* const menuAlign = function(e) {
        menuCont.setAttribute("style", `left: calc(${e.pageX}px - 161px); top: calc(${e.pageY}px - 20px);`);
        } */

        const rect = menuBtn.getBoundingClientRect();
        const menuRect = menuCont.getBoundingClientRect();
        const menuAlign = function() {
        menuCont.classList.add("menu-style-holo");
        menuCont.setAttribute("style", `left: ${rect.left - menuCont.offsetWidth + window.scrollX + 11}px; top: ${rect.top + window.scrollY - 10}px; margin: 7px;`);
        if (rect.left - menuCont.offsetWidth + window.scrollX + 11 < 0) {
        menuCont.setAttribute("style", `left: 0px; top: ${rect.top + window.scrollY - 10}px; margin: 7px;`);
        }
        }

        document.onclick = menuAlign;
        setTimeout(function(){
        document.onclick = undefined;
        }, 100);

        const menuItemShare = document.createElement("div");
        menuItemShare.classList.add("menu-item");
        menuItem.before(menuItemShare);

        const menuItemBtnShare = document.createElement("button");
        menuItemBtnShare.classList.add("menu-item-button", "has-ripple");
        menuItemBtnShare.textContent = "Sharing will be implemented soon";
        menuItemBtnShare.setAttribute("style", "opacity: .7;")
        menuItemBtnShare.onclick = function(){
            
        };
        menuItemShare.appendChild(menuItemBtnShare);

        function menuRemoveExtras() {
            setTimeout(function() {
            menuItemShare.remove();
            menuCont.classList.remove("menu-style-holo");
            }, 300);
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
        if (parentName !== "channel-lazy-list") {
        subhead.appendChild(author);
        }
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

const iframePlayerCont = document.createElement("div");
iframePlayerCont.classList.add("iframe-player-container");

const playerSpinner = document.createElement("div");
playerSpinner.classList.add("spinner-container");
playerSpinner.innerHTML = `
<svg class="spinner" width="60px" height="60px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="spuare" cx="33" cy="33" r="30"></circle>
</svg>
`;
iframePlayerCont.appendChild(playerSpinner);

const playerFrame = document.createElement("iframe");
/* playerFrame.classList.add("watchpage-iframe", "player-iframe", "inv-player-for-ytm15"); */
playerFrame.classList.add("watchpage-iframe", "player-iframe", "yt-player-for-ytm15");
playerFrame.id = "ytplayer";
/* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
playerFrame.scrolling = "yes";
playerFrame.frameBorder = "0";
playerFrame.width = "100%";
playerFrame.height = "100%";
playerFrame.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
playerFrame.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
playerFrame.setAttribute("allowfullscreen", "");

const ytm15Watch = document.createElement("ytm15-watch");

const watchActionsOverlay = document.createElement("div");
watchActionsOverlay.classList.add("behind-watchpage-frame-actions");

const watchActions = document.createElement("div");
watchActions.classList.add("watchpage-frame-actions");

watchActionsVisible = false;

watchActionsOverlay.onclick = function(){
if (!watchActionsVisible) {
watchActionsVisible = true;
watchActionsOverlay.classList.add("bwfa-not-visible");

waTimO = setTimeout(function(){
watchActionsVisible = false;
watchActionsOverlay.classList.remove("bwfa-not-visible");
}, 4000);
} else if (watchActionsVisible) {
watchActionsVisible = false;
watchActionsOverlay.classList.remove("bwfa-not-visible");
clearTimeout(waTimO);
}
}

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
if (videoPlayer.toString()) {
videoPlayer.classList.add("player-mini-mode");
};
if (document.webkitFullscreenElement) {
document.webkitExitFullscreen();
}
document.body.classList.remove("has-watchpage");
};
exitWatch.setAttribute("aria-label", "Exit watchpage");
exitWatch.setAttribute("aria-haspopup", "false");
exitWatch.innerHTML = `<ytm15-icon class="exit-watch-icon"><svg viewBox="0 0 24 24" fill=""><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg></ytm15-icon>`;

const exitIFramePlayer = document.createElement("button");
exitIFramePlayer.classList.add("icon-button", "watch-action-button", "exit-iframe-button");
exitIFramePlayer.onclick = function(){
    closeIFramePlayer();
};
exitIFramePlayer.setAttribute("aria-label", "Exit iFrame Player");
exitIFramePlayer.setAttribute("aria-haspopup", "false");
exitIFramePlayer.innerHTML = `<ytm15-icon class="exit-iframe-icon"><svg viewBox="0 0 24 24" fill=""><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></ytm15-icon>`;

const exitWatch2 = exitWatch.cloneNode(true);
exitWatch2.onclick = function(){
exitWatch.onclick();
};
/* if (videoPlayer.toString()) {
controlsTop.insertAdjacentElement("afterbegin", exitWatch2);
}; */
if (videoPlayer.toString() && playerExitWatchBtn.toString()) {
playerExitWatchBtn.onclick = function(){
exitWatch.onclick();
};
};

const mpContent = document.createElement("div");
mpContent.classList.add("miniplayer-content", "items-not-visible");

mpContentItemsVisible = false;

/* mpContent.onclick = function(){
if (!mpContentItemsVisible) {
mpContentItemsVisible = true;
mpContent.classList.remove("items-not-visible");

mpTimO = setTimeout(function(){
mpContentItemsVisible = false;
mpContent.classList.add("items-not-visible");
}, 3500);
} else if (mpContentItemsVisible) {
mpContentItemsVisible = false;
mpContent.classList.add("items-not-visible");
clearTimeout(mpTimO);
}
} */

const mpActions = document.createElement("div");
mpActions.classList.add("miniplayer-actions");

const openWatch = document.createElement("button");
openWatch.classList.add("icon-button", "watch-action-button");
openWatch.onclick = function(){
watchContainer.classList.remove("miniplayer");
app.classList.remove("has-miniplayer");
watchFrame.scrolling = "yes";
if (videoPlayer.toString()) {
videoPlayer.classList.remove("player-mini-mode");
};
document.body.classList.add("has-watchpage");
};
openWatch.setAttribute("aria-label", "Open watchpage");
openWatch.setAttribute("aria-haspopup", "false");
openWatch.innerHTML = `<ytm15-icon class="open-watch-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></svg></ytm15-icon>`;

mpContent.onclick = function(e){
if (e.target == mpContent) {
openWatch.onclick();
}
};

const closeVideo = document.createElement("button");
closeVideo.classList.add("icon-button", "watch-action-button");
closeVideo.onclick = function(isRightSide){
watchContainer.classList.add("closing");
if (isRightSide) {
watchContainer.classList.add("close-right");
}
document.body.classList.remove("has-watchpage");
setTimeout(function() {
  watchContainer.remove();
  app.classList.remove("has-miniplayer");
  watchContainer.classList.remove("closing");
  if (isRightSide) {
  watchContainer.classList.remove("close-right");
  }
  watchFrame.scrolling = "yes";
}, 300);
};
closeVideo.setAttribute("aria-label", "Close video");
closeVideo.setAttribute("aria-haspopup", "false");
closeVideo.innerHTML = `<ytm15-icon class="x-icon"><svg viewBox="0 0 24 24" fill=""><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg></ytm15-icon>`;

var playerContListener = SwipeListener(playerCont);
playerCont.addEventListener('swipe', function (e) {
  /* console.log('swipe', e.detail); */
  var d = e.detail.directions;

  if (!document.webkitFullscreenElement) {
  if (!videoPlayer.classList.contains("player-options-shown") || videoPlayer.classList.contains("player-iframe-visible")) {
  if (d.top) {
    if (d.right) {
    /* console.log('Swiped top-right.'); */
    if (watchContainer.classList.contains("miniplayer")) {
    openWatch.onclick();
    }
    } else if (d.left) {
    /* console.log('Swiped top-left.'); */
    if (watchContainer.classList.contains("miniplayer")) {
    openWatch.onclick();
    }
    } else {
    /* console.log('Swiped top.'); */
    if (watchContainer.classList.contains("miniplayer")) {
    openWatch.onclick();
    }
    }
    } else if (d.bottom) {
    if (d.right) {
    /* console.log('Swiped bottom-right.'); */
    if (!watchContainer.classList.contains("miniplayer")) {
    exitWatch.onclick();
    }
    } else if (d.left) {
    /* console.log('Swiped bottom-left.'); */
    if (!watchContainer.classList.contains("miniplayer")) {
    exitWatch.onclick();
    }
    } else {
    /* console.log('Swiped bottom.'); */
    if (!watchContainer.classList.contains("miniplayer")) {
    exitWatch.onclick();
    }
    }
    } else {
    if (d.right) {
    /* console.log('Swiped right.'); */
    if (watchContainer.classList.contains("miniplayer")) {
    closeVideo.onclick(true);
    }
    } else if (d.left) {
    /* console.log('Swiped left.'); */
    if (watchContainer.classList.contains("miniplayer")) {
    closeVideo.onclick();
    }
    }
  }
  }
  }
});

playerCont.addEventListener('swiping', function (e) {
  /* console.log('swiping', e.detail); */
});

playerCont.addEventListener('swiperelease', function (e) {
  /* console.log('swiperelease', e.detail); */
});

playerCont.addEventListener('swipecancel', function (e) {
  /* console.log('swipecancel', e.detail); */
});

watchContainer.appendChild(watchOverlay);
watchContainer.appendChild(watchItems);
watchItems.appendChild(playerCont);
playerCont.appendChild(playerCont2);
/* playerCont2.appendChild(iframePlayerCont); */
iframePlayerCont.appendChild(playerFrame);
watchItems.appendChild(ytm15Watch);
iframePlayerCont.appendChild(watchActionsOverlay);
iframePlayerCont.appendChild(watchActions);
watchActions.appendChild(exitWatch);
watchActions.appendChild(exitIFramePlayer);
/* watchItems.appendChild(watchFrame); */
playerCont.appendChild(mpContent);
mpContent.appendChild(mpActions);
mpActions.appendChild(openWatch);
mpActions.appendChild(closeVideo);

function openIFrameFallbackPlayer(parent){
    parent.appendChild(iframePlayerCont);
    videoPlayer.classList.add("player-iframe-visible");
    video.pause();
};

playerOptIFrame.addEventListener("click", function(){openIFrameFallbackPlayer(playerOptCont)});

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
    if (MENU_DISABLE_CANCEL_BUTTON_expflag == "true") {
      menuBtnCancel.setAttribute("hidden", "");
    } else {
      menuBtnCancel.removeAttribute("hidden");
    };
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
    /* header.setAttribute('data-mode', 'searching'); */
    header.dataset.mode = 'searching';

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
        /* header.setAttribute('data-mode', dataMode); */
        header.dataset.mode = dataMode;
        searchOverlay.setAttribute('hidden', '');
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist") {
            
        } else {
            backBtn.setAttribute("hidden", "");
        }
        backBtn.onclick = function(){history.back()};
    };
}

function hashDetector() {
if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "channel") {
    wasPrevChannelPage = false;
}
    document.querySelector(".searching-overlay").setAttribute("hidden", "");
    if (document.querySelector(".error-container")) {
    document.querySelector(".error-container").remove();
    }
if (!wasPrevChannelPage) {
    pageCont.innerHTML = "";
    title.textContent = "2015YouTube";
    headerTitle.setAttribute("aria-label", _2015YT_text_string);
    headerTitle.textContent = _2015YT_text_string;
}
if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "") {
    renderData();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about") {
    aboutYTm15();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel") {
    channelPage();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    searchPage();
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist") {
    playlistPage();
} else {
    if (document.querySelector(".spinner-container.full-height")) {
    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");
    }
    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };
}
}
function settingsHashDetector() {
settingsPage();
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
if (window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings") {
settingsHashDetector();
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