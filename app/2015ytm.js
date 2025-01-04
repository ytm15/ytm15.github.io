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

/* var rippleV2Interval = setInterval(function(){
   var rippleElms = document.querySelectorAll(".has-ripple");
   var rippleElms1 = document.querySelectorAll(".compact-media-item");
   var rippleElms2 = document.querySelectorAll(".shelf-header");
   var rippleElms3 = document.querySelectorAll("button.icon-button");
   var rippleElms4 = document.querySelectorAll(".tab");
   var rippleElms5 = document.querySelectorAll(".media-item");
   var rippleElms6 = document.querySelectorAll(".material-button");
   function renderRippleV2(parent){
    const mtrlRipple = document.createElement("div");
    mtrlRipple.classList.add("material-ripple-v2");
    mtrlRipple.innerHTML = `
<div class="ripple-v2-circle"></div>
`;
    parent.addEventListener("mousedown", function(){
    mtrlRipple.classList.add("active");
    }, true);
    parent.addEventListener("touchstart", function(){
    mtrlRipple.classList.add("active");
    }, true);
    parent.addEventListener("mouseup", function(){
    mtrlRipple.classList.remove("active");
    mtrlRipple.classList.add("closing");
    setTimeout(function(){
     mtrlRipple.classList.remove("closing");
    }, 400);
    }, true);
    parent.addEventListener("touchend", function(){
    mtrlRipple.classList.remove("active");
    mtrlRipple.classList.add("closing");
    setTimeout(function(){
     mtrlRipple.classList.remove("closing");
    }, 400);
    }, true);
    if (!parent.querySelector(".material-ripple-v2")) {
    parent.appendChild(mtrlRipple);
    };
   };
   Array.from(rippleElms).forEach(function(item){
    renderRippleV2(item);
   });
   Array.from(rippleElms1).forEach(function(item){
    renderRippleV2(item);
   });
   Array.from(rippleElms2).forEach(function(item){
    renderRippleV2(item);
   });
   Array.from(rippleElms3).forEach(function(item){
    renderRippleV2(item);
   });
   Array.from(rippleElms4).forEach(function(item){
    item.classList.add("has-ripple");
   });
   Array.from(rippleElms5).forEach(function(item){
    renderRippleV2(item);
   });
   Array.from(rippleElms6).forEach(function(item){
    renderRippleV2(item);
   });
}, 10); */

documentHTML = document.querySelector("html");

metaColorElm = document.querySelector('meta[name="theme-color"]');
metaColor1 = "#BA1B12";
metaColor2 = "#CCCCCC";
metaColor3 = "#131313";
metaColor4 = "#B9B9B9";
metaColor5 = "#464646";
defaultMetaColor = metaColor1;

function localStorageChange(){
DISABLE_YTM15_APP_BORDER_expflag = localStorage.getItem("DISABLE_YTM15_APP_BORDER");
DEFAULT_POPUP_MENU_STYLE_expflag = localStorage.getItem("DEFAULT_POPUP_MENU_STYLE");
if (DEFAULT_POPUP_MENU_STYLE_expflag == undefined) {
localStorage.setItem("DEFAULT_POPUP_MENU_STYLE", "Material");
DEFAULT_POPUP_MENU_STYLE_expflag = localStorage.getItem("DEFAULT_POPUP_MENU_STYLE");
}
DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag = localStorage.getItem("DEFAULT_MEDIA_POPUP_MENU_STYLE");
if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == undefined) {
localStorage.setItem("DEFAULT_MEDIA_POPUP_MENU_STYLE", "Holo");
DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag = localStorage.getItem("DEFAULT_MEDIA_POPUP_MENU_STYLE");
}
WEB_ENABLE_DARK_THEME_OPTION_expflag = localStorage.getItem("WEB_ENABLE_DARK_THEME_OPTION");
DARK_THEME_option = localStorage.getItem("DARK_THEME");
WEB_CHANNELS_HEADER_NO_LEFT_MARGIN_expflag = localStorage.getItem("WEB_CHANNELS_HEADER_NO_LEFT_MARGIN");
MENU_DISABLE_CANCEL_BUTTON_expflag = localStorage.getItem("MENU_DISABLE_CANCEL_BUTTON");
if (MENU_DISABLE_CANCEL_BUTTON_expflag == undefined) {
localStorage.setItem("MENU_DISABLE_CANCEL_BUTTON", "true");
MENU_DISABLE_CANCEL_BUTTON_expflag = localStorage.getItem("MENU_DISABLE_CANCEL_BUTTON");
}
CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS_expflag = localStorage.getItem("CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS");
WEB_ENABLE_PIVOT_BAR_expflag = localStorage.getItem("WEB_ENABLE_PIVOT_BAR");
COMPACT_ITEM_LARGER_THUMBNAILS_expflag = localStorage.getItem("COMPACT_ITEM_LARGER_THUMBNAILS");
PIVOT_DISABLE_SHADOW_expflag = localStorage.getItem("PIVOT_DISABLE_SHADOW");
TIMESTATUS_NEW_STYLE_expflag = localStorage.getItem("TIMESTATUS_NEW_STYLE");
LIGHTER_BORDER_COLORS_expflag = localStorage.getItem("LIGHTER_BORDER_COLORS");
HEADER_SHORTER_SIZE_expflag = localStorage.getItem("HEADER_SHORTER_SIZE");
HEADER_WHITE_BTN_COLORS_expflag = localStorage.getItem("HEADER_WHITE_BTN_COLORS");
HEADER_RED_STYLE_expflag = localStorage.getItem("HEADER_RED_STYLE");
if (HEADER_RED_STYLE_expflag == undefined) {
localStorage.setItem("HEADER_RED_STYLE", "true");
HEADER_RED_STYLE_expflag = localStorage.getItem("HEADER_RED_STYLE");
}
PIVOT_SHORTER_SIZE_expflag = localStorage.getItem("PIVOT_SHORTER_SIZE");
DARK_THEME_HASH_COLOR_expflag = localStorage.getItem("DARK_THEME_HASH_COLOR");
if (DARK_THEME_HASH_COLOR_expflag == undefined) {
localStorage.setItem("DARK_THEME_HASH_COLOR", "#30");
DARK_THEME_HASH_COLOR_expflag = localStorage.getItem("DARK_THEME_HASH_COLOR");
}
SUBSCRIBE_BTN_UPPERCASE_expflag = localStorage.getItem("SUBSCRIBE_BTN_UPPERCASE");
WATCH_USE_MTRL_ICONS_expflag = localStorage.getItem("WATCH_USE_MTRL_ICONS");
BTN_FONT_WEIGHT_500_expflag = localStorage.getItem("BTN_FONT_WEIGHT_500");
WATCH_AUTONAV_BAR_STYLE_expflag = localStorage.getItem("WATCH_AUTONAV_BAR_STYLE");
if (WATCH_AUTONAV_BAR_STYLE_expflag == undefined) {
localStorage.setItem("WATCH_AUTONAV_BAR_STYLE", "2015");
WATCH_AUTONAV_BAR_STYLE_expflag = localStorage.getItem("WATCH_AUTONAV_BAR_STYLE");
}
WATCH_AUTONAV_TITLE_USE_UPNEXT_expflag = localStorage.getItem("WATCH_AUTONAV_TITLE_USE_UPNEXT");
APP_DEMATERIALIZE_UI_expflag = localStorage.getItem("APP_DEMATERIALIZE_UI");
DISABLE_TAB_ICONS_expflag = localStorage.getItem("DISABLE_TAB_ICONS");
WATCH_ENABLE_NEW_UI_expflag = localStorage.getItem("WATCH_ENABLE_NEW_UI");
WATCH_TILTE_FONT_WEIGHT_500_expflag = localStorage.getItem("WATCH_TILTE_FONT_WEIGHT_500");
USE_NEW_SUBSCRIBE_ICON_expflag = localStorage.getItem("USE_NEW_SUBSCRIBE_ICON");

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

if (LIGHTER_BORDER_COLORS_expflag == "true") {
    documentHTML.classList.add("lighter-borders");
} else {
    documentHTML.classList.remove("lighter-borders");
};

if (HEADER_RED_STYLE_expflag == "false") {
    metaColorElm.content = metaColor2;
    defaultMetaColor = metaColor2;
    if (DARK_THEME_option == "true" && WEB_ENABLE_DARK_THEME_OPTION_expflag == "true") {
    metaColorElm.content = metaColor3;
    defaultMetaColor = metaColor3;
    }
    if (APP_DEMATERIALIZE_UI_expflag == "true") {
    metaColorElm.content = "#000000";
    defaultMetaColor = "#000000";
    }
    defaultMetaColor = metaColorElm.content;
} else {
    metaColorElm.content = metaColor1;
    defaultMetaColor = metaColor1;
    if (APP_DEMATERIALIZE_UI_expflag == "true") {
    metaColorElm.content = "#000000";
    defaultMetaColor = "#000000";
    }
};

if (DARK_THEME_HASH_COLOR_expflag == "#30") {
    documentHTML.classList.remove("dark-28");
    documentHTML.classList.remove("dark-21");
} else if (DARK_THEME_HASH_COLOR_expflag == "#28") {
    documentHTML.classList.add("dark-28");
    documentHTML.classList.remove("dark-21");
} else if (DARK_THEME_HASH_COLOR_expflag == "#21") {
    documentHTML.classList.remove("dark-28");
    documentHTML.classList.add("dark-21");
};

if (BTN_FONT_WEIGHT_500_expflag == "true") {
    documentHTML.classList.add("btn-font-500");
} else {
    documentHTML.classList.remove("btn-font-500");
}

if (APP_DEMATERIALIZE_UI_expflag == "true") {
    documentHTML.classList.add("style-2013");
} else {
    documentHTML.classList.remove("style-2013");
}
};

localStorageChange();

window.addEventListener("storage", function(){
localStorageChange();
});

function metaColorChange(){
if (headerBar.querySelector("header").dataset.mode == 'search') {
metaColorElm.content = metaColor4;
if (DARK_THEME_option == "true" && WEB_ENABLE_DARK_THEME_OPTION_expflag == "true") {
metaColorElm.content = metaColor3;
}
} else if (headerBar.querySelector("header").dataset.mode == 'normal') {
metaColorElm.content = defaultMetaColor;
} else if (headerBar.querySelector("header").dataset.mode == 'searching') {
metaColorElm.content = metaColor4;
if (DARK_THEME_option == "true" && WEB_ENABLE_DARK_THEME_OPTION_expflag == "true") {
metaColorElm.content = metaColor3;
}
} else if (headerBar.querySelector("header").dataset.mode == 'settings') {
metaColorElm.content = metaColor4;
if (DARK_THEME_option == "true" && WEB_ENABLE_DARK_THEME_OPTION_expflag == "true") {
metaColorElm.content = metaColor3;
}
}
if (headerIsChannel == 'true' && headerBar.querySelector("header").dataset.mode == 'normal') {
metaColorElm.content = metaColor5;
}
if (APP_DEMATERIALIZE_UI_expflag == "true") {
metaColorElm.content = "#000000";
}
}

APIbaseURL = "https://invidious.nerdvpn.de/";
APIbaseURLWatch = "https://inv.nadeko.net/";

playerVideoId = "e";
playerEmbedURL = "https://invidious.fi/embed/";
playerEmbedURLEnd = "?autoplay=1&quality=dash&player_style=youtube&local=true";
playerEmbedURLYT = "https://www.youtube.com/embed/";
playerEmbedURLYTEnd = "?autoplay=1&enablejsapi=1&rel=0&origin=" + location.origin + "&widget_referrer=" + location.origin;

playerPrevVideoId = [""];
playerNextVideoId = "";

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
NoVideos_text_string = "This channel has no videos."
OldestCreated_text_string = "Date created (oldest)";
NewestCreated_text_string = "Date created (newest)";
LastAdded_text_string = "Last video added"
NoPlaylists_text_string = "This channel has no playlists.";
NoContent_text_string = "This channel doesn't have any content";
Uploads_text_string = "Uploads";
Shorts_text_string = "Short uploads";
PopularUploads_text_string = "Popular uploads";
NoChannels_text_string = "This channel doesn't feature any other channels.";
Comments_text_string = "Comments";
CommentsError_text_string = "Comments are either disabled or unavailable."
PinnedBy_text_string = "Pinned by ";
Cancel_text_string = "Cancel";
Ok_text_string = "Ok";
UpNext_text_string = "Up next";
Replies_text_string = "Replies";
Subs_text_string = "Subscriptions";
Notifs_text_string = "Notifications";
Library_text_string = "Library";
AddComment_text_string = "Add a public comment...";
AddReply_text_string = "Add a public reply..."
Account_text_string = "Account";

function renderSubscribeBtn(parent) {
    const mtrlBtnCont = document.createElement("div");
    mtrlBtnCont.classList.add("material-button-container", "compact", "subscribe-button");
    if (SUBSCRIBE_BTN_UPPERCASE_expflag == "true") {
    mtrlBtnCont.classList.add("subscribe-uppercase");
    }
    mtrlBtnCont.dataset.style = "BRAND";
    mtrlBtnCont.dataset.iconOnly = "false";
    mtrlBtnCont.setAttribute("is-busy", "false");
    mtrlBtnCont.ariaBusy = "false";
    mtrlBtnCont.setAttribute("disabled", "false");
    mtrlBtnCont.innerHTML = `<button class="material-button" aria-label="${Subscribe_text_string}">
<img class="ytm15-img-icon ytm15-img button-icon subscribe-icon" src="subscribe_mark.png"></img><div class="button-text">${Subscribe_text_string}</div>
</button>`
    if (APP_DEMATERIALIZE_UI_expflag == "true") {
    mtrlBtnCont.innerHTML = `<button class="material-button" aria-label="${Subscribe_text_string}">
<img class="ytm15-img-icon ytm15-img button-icon subscribe-icon" src="ic_subscribe.png"></img><div class="button-text">${Subscribe_text_string}</div>
</button>`
    }
    if (USE_NEW_SUBSCRIBE_ICON_expflag == "true") {
    mtrlBtnCont.querySelector("img").src = "subscribe_mark_2018.png";
    mtrlBtnCont.querySelector("img").classList.add("style-2018");
    }
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
    dropdownSelect.innerHTML = `<div class="dropdown-select-point"></div>`;
    if (ddisChannelSort) {
    dropdownSelect.innerHTML = `<div class="dropdown-select-point"></div><ytm15-icon class="sort-icon" style="
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

        /* const rect = dropdownSelect.getBoundingClientRect(); */
        const rect = dropdownArrowIcon.getBoundingClientRect();
        const menuRect = menuCont.getBoundingClientRect();
        const menuAlign = function() {
        menuCont.classList.add("menu-style-dropdown");
        menuCont.setAttribute("style", `left: ${rect.left - menuCont.offsetWidth + window.scrollX + 11}px; top: ${rect.top + window.scrollY - 10}px; margin: 8px 12px;`);
        if (rect.left - menuCont.offsetWidth + window.scrollX + 11 < 0) {
        menuCont.setAttribute("style", `left: 0px; top: ${rect.top + window.scrollY - 10}px; margin: 8px 12px;`);
        }
        if (APP_DEMATERIALIZE_UI_expflag == "true") {
        const rect = dropdownPoint.getBoundingClientRect();
        menuCont.setAttribute("style", `left: ${rect.left + window.scrollX - 12}px; top: ${rect.top + window.scrollY + 25}px; margin: 0px 4px;`);
        if (rect.left + window.scrollX - 12 < 0) {
        menuCont.setAttribute("style", `left: 0px; top: ${rect.top + window.scrollY + 25}px; margin: 0px 4px;`);
        }
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
    var dropdownArrowIcon = dropdownSelect.querySelector(".dropdown-arrow-icon");
    var dropdownPoint = dropdownSelect.querySelector(".dropdown-select-point");
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

function renderCommentSection(parent, mediaType, cmSource, isCMPage, comntId, comntContinuation){
    var cmBaseAPIURL = 'https://invidious.nerdvpn.de/api/v1/comments/';

    const commentSection = document.createElement("div");
    commentSection.classList.add("comment-section");
    commentSection.dataset.isBeta = true;
    if (APP_DEMATERIALIZE_UI_expflag == "true") {
      commentSection.classList.add('card');
    }
    if (mediaType == "video" && !isCMPage) {
     commentSection.classList.add("watch-next-results-content");
     commentSection.dataset.contentType = "result";
    };
    parent.appendChild(commentSection);

    const commentsHeader = document.createElement("div");
    commentsHeader.classList.add("comment-section-header");
    commentCount = `<span style="opacity: .6; font-style: italic;">Retrieving count...</span>`;
    commentsHeader.innerHTML = `<div class="comments-header-top"><h2 class="comments-header-text"><span class="cmh-text-title">${Comments_text_string}</span><span class="cmh-text-comment-count">${commentCount}</span></h2></div>`;

    function renderCommentSB(CSBstring, parent){
    const commentSimplebox = document.createElement("div");
    commentSimplebox.classList.add("comment-simplebox");
    commentSimplebox.innerHTML = `
<div class="profile-icon comment-simplebox-icon">
<img class="profile-img ytm15-img lazy" loading="lazy" src="https://yt3.ggpht.com/a/default-user=s100-c-k-c0x00ffffff-no-rj"></img>
</div>
<div class="comment-simplebox-input">
<div class="comment-simplebox-placeholder">
<button class="comment-simplebox-reply">${CSBstring}</button>
</div>
</div>
`;
    commentSimplebox.querySelector(".profile-img").onload = function(){this.classList.add('loaded');};
    parent.appendChild(commentSimplebox);
    };
    renderCommentSB(AddComment_text_string, commentsHeader);
    if (comntId == "" || comntId == undefined) {
    commentSection.appendChild(commentsHeader);
    }

    var commentSeparator = document.createElement("div");
    commentSeparator.classList.add("comment-separator");
    commentsHeader.appendChild(commentSeparator);

    const lazyList = document.createElement("div");
    lazyList.classList.add("lazy-list");
    commentSection.appendChild(lazyList);

    function retrieveComments(continuation, inReplyThread){
    if (continuation == "") {
    lazyList.innerHTML = ``;
    }

    const spinner = document.querySelector(".spinner-container.full-height");
    const contItem = document.createElement("div");
    contItem.classList.add("continuation-item");
    const spinnerClone = spinner.cloneNode(true);
    spinnerClone.classList.remove("full-height");
    spinnerClone.removeAttribute("hidden");
    contItem.appendChild(spinnerClone);
    lazyList.appendChild(contItem);

    const getCommentsData = new XMLHttpRequest();
    getCommentsData.open('GET', cmBaseAPIURL + cmSource + "?continuation=" + continuation, true);
    getCommentsData.setRequestHeader('Authorization','Basic eXRtMTU6SlFKNTNLckxBRVk2RTVxaGdjbTM4UGtTenczYlpYbWs=');

    getCommentsData.onerror = function(event) {
    console.error("An error occurred with this operation (" + getCommentsData.status + ")");
    contItem.remove();
    commentSection.innerHTML = `<div class="ytm15-message"><div class="ytm15-message-content"><div class="msg-text">${CommentsError_text_string}</div></div></div>`;
    return;
    };

    getCommentsData.send();

    getCommentsData.onload = function() {
    if (getCommentsData.status === 200) {
    const data = JSON.parse(getCommentsData.response);
    contItem.remove();

    if (continuation == "") {
    if (data.commentCount) {
    commentCount = data.commentCount.toLocaleString();
    } else {
    commentCount = "";
    }
    }

    commentsHeader.querySelector(".cmh-text-comment-count").innerHTML = commentCount;

    data.comments.forEach(function(item){
    const commentThread = document.createElement("ytm15-comment-thread");
    const comment = document.createElement("ytm15-comment");
    comment.classList.add("has-ripple");
    const commentPFPCont = document.createElement("a");
    commentPFPCont.classList.add("comment-pfp-container");
    commentPFPCont.href = "#" + item.authorUrl;
    if (mediaType == "video") {
     commentPFPCont.onclick = function(){exitWatch.onclick()};
    };
    commentPFPCont.innerHTML = `
<div class="profile-icon comment-icon">
<img class="profile-img ytm15-img lazy" loading="lazy" src="${item.authorThumbnails[0].url}"></img>
</div>
`;
    commentPFPCont.querySelector(".profile-img").onload = function(){this.classList.add('loaded');};
    const commentCont = document.createElement("div");
    commentCont.classList.add("comment-content");
    if (item.replies) {
    cmReplyCount = item.replies.replyCount.toLocaleString();
    } else {
    cmReplyCount = 0;
    }
    commentCont.ariaLabel = `${item.content}. ${item.publishedText}. ${item.likeCount.toLocaleString()} likes. ${cmReplyCount} replies`;
    if (item.authorIsChannelOwner == true) {
     cmIsOwner = "true";
     commentCont.dataset.isOwner = "true";
    } else {
     cmIsOwner = "false";
    }
    commentAuthor = `<span style="opacity: .6; font-style: italic;">Retrieving author name...</span>`;
    pinnedCMBadge = ``;
    if (item.isPinned) {
    pinnedCMBadge = `<div class="pinned-comment-badge"><ytm15-icon class="comment-pin-icon"><svg viewBox="0 0 24 24" fill=""><path d="M16,12V4H17V2H7V4H8V12L6,14V16H11.2V22H12.8V16H18V14L16,12Z"></path></svg></ytm15-icon><span>${PinnedBy_text_string}Uploader</span></div>`;
    }
    commentCont.innerHTML = `
${pinnedCMBadge}
<p class="comment-text user-text">${item.contentHtml}</p>
<div class="comment-header">
<span class="comment-title" is-owner="${cmIsOwner}"><a href="#${item.authorUrl}" onclick="exitWatch.onclick()">${commentAuthor}</a></span>
<span class="comment-published-time">${item.publishedText}</span>
</div>
<div class="comment-details">
<div class="comment-icons" id="cm-icon-like">
<button class="icon-button comment-icon-button" aria-label="Like this comment"><ytm15-icon class="like-icon comment-action-icon"><svg viewBox="0 0 24 24" fill=""><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></svg></ytm15-icon></button>
<span class="comment-count">${item.likeCount.toLocaleString()}</span>
</div>
<div class="comment-icons" id="cm-icon-dislike">
<button class="icon-button comment-icon-button" aria-label="Dislike this comment"><ytm15-icon class="dislike-icon comment-action-icon"><svg viewBox="0 0 24 24" fill=""><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></svg></ytm15-icon></button>
<span class="comment-count"></span>
</div>
<div class="comment-icons" id="cm-icon-reply">
<button class="icon-button comment-icon-button" aria-label="Reply to this comment"><ytm15-icon class="reply-icon comment-action-icon"><svg viewBox="0 0 24 24" fill=""><path d="M18,8H6V6H18V8M18,11H6V9H18V11M18,14H6V12H18V14M22,4A2,2 0 0,0 20,2H4A2,2 0 0,0 2,4V16A2,2 0 0,0 4,18H18L22,22V4Z"></path></svg></ytm15-icon>
</button>
<span class="comment-count">${cmReplyCount}</span>
</div>
</div>
`;
    commentCont.querySelector("#cm-icon-reply").querySelector("button").onclick = function(){
      commentMediaSource = "?v=" + cmSource;
      window.location.href = "#/comments/" + commentMediaSource + "&id=" + item.commentId + "&continuation=" + continuation;
    }

    Array.from(commentCont.querySelector(".comment-text").querySelectorAll('[data-onclick="jump_to_time"]')).forEach(function(ts){
    ts.onclick = function(e){
    playerJumpTime(e, ts.dataset.jumpTime);
    };
    });

    if (APP_DEMATERIALIZE_UI_expflag == "true") {
      commentCont.insertAdjacentElement("afterbegin", commentCont.querySelector(".comment-header"));
      const commentFooter = document.createElement("div");
      commentFooter.classList.add("comment-footer");
      commentFooter.appendChild(commentCont.querySelector(".comment-published-time"));
      commentCont.querySelector(".comment-text").insertAdjacentElement("afterend", commentFooter);
      commentCont.querySelector(".comment-details").innerHTML = `<div class="comment-icons" id="cm-icon-like">
<button class="icon-button comment-icon-button" aria-label="Like this comment"><img class="ytm15-img-icon ytm15-img like-icon comment-action-icon" src="ic_comment_like.png"></button>
<span class="comment-count">${item.likeCount.toLocaleString()}</span>
</div>
<div class="comment-icons" id="cm-icon-dislike">
<button class="icon-button comment-icon-button" aria-label="Dislike this comment"><img class="ytm15-img-icon ytm15-img dis-icon comment-action-icon" src="ic_comment_dislike.png"></button>
<span class="comment-count"></span>
</div>
<div class="comment-icons" id="cm-icon-reply">
<button class="icon-button comment-icon-button" aria-label="Reply to this comment"><img class="ytm15-img-icon ytm15-img reply-icon comment-action-icon" src="ic_comment_reply.png">
</button>
<span class="comment-count">${cmReplyCount}</span>
</div>`;
      commentCont.querySelector("#cm-icon-reply").querySelector("button").onclick = function(){
      commentMediaSource = "?v=" + cmSource;
      window.location.href = "#/comments/" + commentMediaSource + "&id=" + item.commentId + "&continuation=" + continuation;
      }
      if (commentCont.querySelector(".pinned-comment-badge")) {
      commentCont.insertAdjacentElement("afterbegin", commentCont.querySelector(".pinned-comment-badge"));
      }
    }

    const getCommentsTitle = new XMLHttpRequest();
    getCommentsTitle.open('GET', APIbaseURL + 'api/v1/channels/' + item.authorId, true);
    getCommentsTitle.setRequestHeader('Authorization','Basic eXRtMTU6SlFKNTNLckxBRVk2RTVxaGdjbTM4UGtTenczYlpYbWs=');

    getCommentsTitle.onerror = function(event) {
    console.error("An error occurred with this operation (" + getCommentsTitle.status + ")");
    return;
    };

    getCommentsTitle.send();

    getCommentsTitle.onload = function() {
    if (getCommentsTitle.status === 200) {
    const data1 = JSON.parse(getCommentsTitle.response);
    commentAuthor = data1.author;
    commentCont.querySelector(".comment-title>a").innerHTML = commentAuthor;
    commentCont.ariaLabel = `${item.content}. ${commentAuthor}. ${item.publishedText}. ${item.likeCount.toLocaleString()} likes. ${cmReplyCount} replies`;
    } else {
    getCommentsTitle.onerror();
    commentAuthor = `<span style="font-style: italic;">Retrieval failed!</span>`;
    commentCont.querySelector(".comment-title>a").innerHTML = commentAuthor;
    }
    };

    comment.appendChild(commentPFPCont);
    comment.appendChild(commentCont);
    
    commentThread.appendChild(comment);
    if (inReplyThread) {
    commentReplies.appendChild(comment);
    }

    const cmRepliesBtnCont = document.createElement("div");
    cmRepliesBtnCont.classList.add("comment-replies-button");
    cmRepliesBtnCont.innerHTML = `<div class="material-button-container reply-button" data-style="CALLACTION_TEXT" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button" aria-label="View replies"><div class="button-text">View replies</div></button></div>`;
    if (item.replies && (comntId == "" || comntId == undefined)) {
    commentThread.appendChild(cmRepliesBtnCont);
    cmRepliesBtnCont.querySelector(".button-text").innerHTML = `View ${item.replies.replyCount.toLocaleString()} replies`;
    cmRepliesBtnCont.querySelector("button").ariaLabel = cmRepliesBtnCont.querySelector(".button-text").textContent;
    cmRepliesBtnCont.querySelector("button").onclick = function(){
      commentMediaSource = "?v=" + cmSource;
      window.location.href = "#/comments/" + commentMediaSource + "&id=" + item.commentId + "&continuation=" + continuation;
    }
    }

    var commentSeparator = document.createElement("div");
    commentSeparator.classList.add("comment-separator");
    if (comntId == "" || comntId == undefined) {
    commentThread.appendChild(commentSeparator);
    };
    if (comntId == item.commentId) {
    lazyList.appendChild(commentThread);
    commentThread.dataset.viewingReplies = true;
    renderCommentSB(AddReply_text_string, commentThread);
    commentThread.appendChild(commentSeparator);
    commentReplies = document.createElement("ytm15-comment-replies");
    commentThread.appendChild(commentReplies);
    retrieveComments(item.replies.continuation, true);
    } else if (comntId == "" || comntId == undefined) {
    lazyList.appendChild(commentThread);
    };
    });

    if (data.continuation && (inReplyThread || comntId == "" || comntId == undefined)) {
    const nextContinCont = document.createElement("div");
    nextContinCont.classList.add("next-continuation-cont");
    nextContinCont.innerHTML = `<div class="next-continuation">
<div class="material-button-container next-contin-button" data-style="" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button" data-continuation="" aria-label="More"><div class="button-text">More</div></button></div>
</div>`;
    nextContinCont.querySelector("button").dataset.continuation = data.continuation;
    nextContinCont.querySelector("button").onclick = function(){
    nextContinCont.remove();
    retrieveComments(nextContinCont.querySelector("button").dataset.continuation, inReplyThread);
    };
    commentSection.appendChild(nextContinCont);
    }

    } else {
    getCommentsData.onerror();
    }
    };
    };
    if (comntId !== "" && comntId !== undefined) {
    retrieveComments(comntContinuation);
    } else {
    retrieveComments("");
    };
};

const pivotBar = document.createElement("ytm15-pivot-bar");
pivotBar.setAttribute("role", "tablist");

function renderPivotBar(){
    if (app.querySelector("ytm15-header-bar")) {
    headerBar.insertAdjacentElement("afterend", pivotBar);
    }
    document.body.setAttribute("has-pivot-bar", true);
    function refreshPB(){
    if (PIVOT_DISABLE_SHADOW_expflag == "true") {
      pivotBar.classList.add("no-shadow");
    } else {
      pivotBar.classList.remove("no-shadow");
    }
    if (PIVOT_SHORTER_SIZE_expflag == "true") {
      documentHTML.classList.add("shorter-pivot");
    } else {
      documentHTML.classList.remove("shorter-pivot");
    }
    pivotBarItems = [
    {
      "name": Home_text_string,
      "pivotName": "w2w",
      "iconPath": "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
      "link": ""
    },
    {
      "name": Trending_text_string,
      "pivotName": "trending",
      "iconPath": "M14.72,17.64c-0.32,0.28-0.83,0.56-1.23,0.69c-1.14,0.38-2.27-0.07-3.05-0.71c-0.11-0.09-0.07-0.26,0.06-0.31  c1.19-0.38,1.89-1.3,2.09-2.22c0.2-0.88-0.16-1.64-0.31-2.51c-0.12-0.72-0.11-1.34,0.12-2c0.04-0.11,0.2-0.13,0.25-0.02  c0.71,1.59,2.72,2.29,3.07,4.04c0.03,0.16,0.05,0.32,0.05,0.48C15.8,16.02,15.4,17.03,14.72,17.64 M17.55,9.62  c-0.75-0.7-1.63-1.2-2.36-1.93c-1.49-1.51-2-3.64-1.34-5.66c0.11-0.33-0.2-0.63-0.51-0.49c-0.71,0.31-1.39,0.76-1.98,1.24  C8.38,5.2,7.27,9.26,8.65,12.92c0.03,0.13,0.08,0.26,0.08,0.39c0,0.26-0.16,0.5-0.39,0.6c-0.26,0.12-0.54,0.04-0.74-0.15  c-0.06-0.06-0.12-0.12-0.17-0.19c-0.96-1.26-1.32-2.95-1.05-4.52c0.07-0.4-0.43-0.62-0.67-0.31c-1.21,1.57-1.81,3.67-1.69,5.65  c0.04,0.59,0.13,1.18,0.29,1.75c0.2,0.71,0.49,1.4,0.88,2.03c1.21,2.01,3.34,3.46,5.63,3.75c2.43,0.31,5.06-0.14,6.94-1.87  c2.09-1.93,2.85-5,1.73-7.68c-0.04-0.11-0.09-0.21-0.14-0.32c-0.25-0.52-0.55-1.01-0.91-1.45C18.17,10.24,17.87,9.92,17.55,9.62z",
      "link": "trending"
    },
    {
      "name": Subs_text_string,
      "pivotName": "subscriptions",
      "iconPath": "M20,8H4V6H20V8M18,2H6V4H18V2M22,12V20A2,2 0 0,1 20,22H4A2,2 0 0,1 2,20V12A2,2 0 0,1 4,10H20A2,2 0 0,1 22,12M16,16L10,12.73V19.26L16,16Z",
      "link": "subscriptions"
    },
    {
      "name": Notifs_text_string,
      "pivotName": "notifications",
      "iconPath": "M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21",
      "link": "notifications"
    },
    {
      "name": Library_text_string,
      "pivotName": "library",
      "iconPath": "M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z",
      "link": "library"
    }
    ];
    pivotBar.innerHTML = "";
    pivotBarItems.forEach(function(item){
      const pivotBarItem = document.createElement("div");
      pivotBarItem.classList.add("pivot-bar-item");
      pivotBarItem.id = item.name;
      pivotTabSelected = false;
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == item.link || (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined) && item.pivotName == "w2w") {
      pivotTabSelected = true;
      }
      pivotBarItem.innerHTML = `<div role="tab" aria-selected="${pivotTabSelected}" class="pivot-bar-item-tab has-ripple pivot-${item.pivotName}">
<div class="pivot-tab-items">
<ytm15-icon class="pivot-bar-tab-icon ${item.pivotName}-icon"><svg viewBox="0 0 24 24" fill=""><path d="${item.iconPath}"></path></svg></ytm15-icon>
<div class="pivot-bar-item-title">${item.name}</div>
</div>
</div>`;
      pivotBarItem.querySelector(".pivot-bar-item-tab").onclick = function(){
        window.location.hash = "#/" + item.link;
      }
      pivotBar.appendChild(pivotBarItem);
    });
    }
    refreshPB();
    window.addEventListener('hashchange', function (event) {
      refreshPB();
    });
}

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
        playerPrevVideoId = [""];
        playerVideoId = itemVideoId;
        /* playerFrame.src = playerEmbedURL + playerVideoId + playerEmbedURLEnd; */
        playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
        renderWatchPage(ytm15Watch);
        }
        };
        if (COMPACT_ITEM_LARGER_THUMBNAILS_expflag == "true") {
        thumbnail.classList.add("large");
        video.dataset.largeThumbnail = true;
        }

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
        if (TIMESTATUS_NEW_STYLE_expflag == "true") {
        time.classList.add('new-style');
        }
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
        playerPrevVideoId = [""];
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
        menuCont.classList.remove("menu-style-holo", "menu-style-mtrl-2", "menu-style-youtube");
		menuCont.classList.add("is-watch");
        if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Holo") {
        menuCont.classList.add("menu-style-holo");
        } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material") {

        } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material_2") {
        menuCont.classList.add("menu-style-mtrl-2");
        } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "YouTube") {
        menuCont.classList.add("menu-style-youtube");
        }
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
        if (APP_DEMATERIALIZE_UI_expflag == "true") {
        menuBtn.innerHTML = `<img class="ytm15-img-icon ytm15-img menu-icon inactive" src="contextual_menu_anchor_normal.png"><img class="ytm15-img-icon ytm15-img menu-icon active" src="contextual_menu_anchor_pressed.png">`;
        };
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

        videoParent = video.parentElement;
        if (videoParent.parentElement.classList.contains("item-section")) {
        if (APP_DEMATERIALIZE_UI_expflag == "true") {
        videoParent.parentElement.classList.add('card');
        }
        }
}

function renderMediaItem(parent, parentName, itemVideoId, itemThumbnail, itemLength, itemTitle, itemAuthor, itemAuthorId, itemPublishedText, itemViewCount) {
        /* const channelData = fetch('https://yt.lemnoslife.com/noKey/channels?part=snippet,status&id=' + item.authorId); */

        const itemSect = document.createElement("div");
        itemSect.classList.add('item-section');
        if (APP_DEMATERIALIZE_UI_expflag == "true") {
        itemSect.classList.add('card');
        }

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
        playerPrevVideoId = [""];
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
        time.dataset.thumbnailSize = "large";
        if (TIMESTATUS_NEW_STYLE_expflag == "true") {
        time.classList.add('new-style');
        }
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
        playerPrevVideoId = [""];
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
        playerPrevVideoId = [""];
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
        menuCont.classList.remove("menu-style-holo", "menu-style-mtrl-2", "menu-style-youtube");
		menuCont.classList.add("is-watch");
        if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Holo") {
        menuCont.classList.add("menu-style-holo");
        } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material") {

        } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material_2") {
        menuCont.classList.add("menu-style-mtrl-2");
        } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "YouTube") {
        menuCont.classList.add("menu-style-youtube");
        }
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
        if (APP_DEMATERIALIZE_UI_expflag == "true") {
        menuBtn.innerHTML = `<img class="ytm15-img-icon ytm15-img menu-icon inactive" src="contextual_menu_anchor_normal.png"><img class="ytm15-img-icon ytm15-img menu-icon active" src="contextual_menu_anchor_pressed.png">`;
        };
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

        if (APP_DEMATERIALIZE_UI_expflag == "true") {
        media.insertAdjacentElement("afterbegin", channel);
        channel.appendChild(author);
        channel.appendChild(extEndpoint);
        views.classList.remove("media-stats");
        views.classList.add("media-byline");
        }
}

/* let hash = window.location.hash;
console.log(hash); */

console.log(window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0]);

const app = document.querySelector("ytm15app");

const headerTitle = document.querySelector(".header-title");

const headerBar = document.querySelector("ytm15-header-bar");

const pageCont = document.querySelector('.page-container');

metaColorChange();

if (WEB_ENABLE_PIVOT_BAR_expflag == "true" && window.location.pathname.split("/").slice(3, 4)[0] !== "settings.html" && window.location.pathname.split("/").slice(3, 4)[0] !== "settings" && window.location.pathname.split("/").slice(2, 3)[0] !== "settings.html" && window.location.pathname.split("/").slice(2, 3)[0] !== "settings") {
  renderPivotBar();
}

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

mpTPAnimName = "miniplayer-to-player"
pTMPAnimName = "player-to-miniplayer"
if (WEB_ENABLE_PIVOT_BAR_expflag == "true") {
  mpTPAnimName = "miniplayer-to-player-pivot"
  pTMPAnimName = "player-to-miniplayer-pivot"
  if (PIVOT_SHORTER_SIZE_expflag == "true") {
  mpTPAnimName = "miniplayer-to-player-pivot-2"
  pTMPAnimName = "player-to-miniplayer-pivot-2"
  }
}

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
setTimeout(function(){
  /* if (watchContainer.style.animation !== "0.08s ease 0s 1 normal none paused" + mpTPAnimName) { */
  if (watchContainer.style.animationName !== mpTPAnimName) {
  watchContainer.setAttribute("style", ``);
  playerCont.setAttribute("style", ``);
  watchOverlay.setAttribute("style", ``);
  pivotBar.setAttribute("style", ``);
  if (APP_DEMATERIALIZE_UI_expflag == "true") {
  ytm15Watch.setAttribute("style", ``);
  }
  }
}, 01);
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
setTimeout(function(){
  /* if (watchContainer.style.animation !== "0.08s ease 0s 1 normal none paused" + pTMPAnimName) { */
  if (watchContainer.style.animationName !== pTMPAnimName) {
  watchContainer.setAttribute("style", ``);
  playerCont.setAttribute("style", ``);
  watchOverlay.setAttribute("style", ``);
  pivotBar.setAttribute("style", ``);
  if (APP_DEMATERIALIZE_UI_expflag == "true") {
  ytm15Watch.setAttribute("style", ``);
  }
  }
}, 01);
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
  watchContainer.setAttribute("style", ``);
  playerCont.setAttribute("style", ``);
  watchOverlay.setAttribute("style", ``);
  pivotBar.setAttribute("style", ``);
  if (APP_DEMATERIALIZE_UI_expflag == "true") {
  ytm15Watch.setAttribute("style", ``);
  }
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
  if (!progressTrack.classList.contains("scrubbing") && !videoPlayer.classList.contains("player-options-shown") || videoPlayer.classList.contains("player-iframe-visible")) {
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
miniplayerAnimation = (e.detail.y[1] - Math.round(e.detail.y[0] / 10)) * 100 / 1000000;
if ((e.detail.y[1] - Math.round(e.detail.y[0] / 10)) * 100 / 1000000 > 0.07) {
miniplayerAnimation = 0.07;
}
if ((e.detail.y[1] - Math.round(e.detail.y[0] / 10)) * 100 / 1000000 < 0.00) {
miniplayerAnimation = 0.00;
}
  if (!progressTrack.classList.contains("scrubbing") && !videoPlayer.classList.contains("player-options-shown") || videoPlayer.classList.contains("player-iframe-visible")) {
watchContainer.setAttribute("style", `animation: ${pTMPAnimName} .08s; animation-play-state: paused; animation-direction: normal; animation-delay: -${miniplayerAnimation}s;`);
playerCont.setAttribute("style", `animation: player-cont-to-miniplayer .08s; animation-play-state: paused; animation-direction: normal; animation-delay: -${miniplayerAnimation}s;`);
watchOverlay.setAttribute("style", `animation: watch-overlay-out .08s; animation-play-state: paused; animation-direction: normal; animation-delay: -${miniplayerAnimation}s;`);
pivotBar.setAttribute("style", `animation: pivot-bar-show .08s; animation-play-state: paused; animation-direction: normal; animation-delay: -${miniplayerAnimation}s;`);
if (APP_DEMATERIALIZE_UI_expflag == "true") {
ytm15Watch.setAttribute("style", `animation: player-watch-2013-close .08s; animation-play-state: paused; animation-direction: normal; animation-delay: -${miniplayerAnimation}s;`);
}
if (watchContainer.classList.contains("miniplayer")) {
miniplayerAnimation = (e.detail.y[1] + Math.round(e.detail.y[0] / 10)) * 100 / 1000000;
watchContainer.setAttribute("style", `animation: ${mpTPAnimName} .08s; animation-play-state: paused; animation-direction: reverse; animation-delay: -${miniplayerAnimation}s;`);
playerCont.setAttribute("style", `animation: miniplayer-to-player-cont .08s; animation-play-state: paused; animation-direction: reverse; animation-delay: -${miniplayerAnimation}s;`);
watchOverlay.setAttribute("style", `animation: watch-overlay-in .08s; animation-play-state: paused; animation-direction: reverse; animation-delay: -${miniplayerAnimation}s;`);
pivotBar.setAttribute("style", `animation: pivot-bar-hide .08s; animation-play-state: paused; animation-direction: reverse; animation-delay: -${miniplayerAnimation}s;`);
if (APP_DEMATERIALIZE_UI_expflag == "true") {
ytm15Watch.setAttribute("style", `animation: player-watch-2013-open .08s; animation-play-state: paused; animation-direction: reverse; animation-delay: -${miniplayerAnimation}s;`);
}
}
  };
});

playerCont.addEventListener('swiperelease', function (e) {
  /* console.log('swiperelease', e.detail); */
  setTimeout(function(){
  watchContainer.setAttribute("style", `animation: ${pTMPAnimName} .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  playerCont.setAttribute("style", `animation: player-cont-to-miniplayer .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  watchOverlay.setAttribute("style", `animation: watch-overlay-out .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  pivotBar.setAttribute("style", `animation: pivot-bar-show .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  if (APP_DEMATERIALIZE_UI_expflag == "true") {
  ytm15Watch.setAttribute("style", `animation: player-watch-2013-close .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  }
  if (watchContainer.classList.contains("miniplayer")) {
  watchContainer.setAttribute("style", `animation: ${mpTPAnimName} .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  playerCont.setAttribute("style", `animation: miniplayer-to-player-cont .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  watchOverlay.setAttribute("style", `animation: watch-overlay-in .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  pivotBar.setAttribute("style", `animation: pivot-bar-hide .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  if (APP_DEMATERIALIZE_UI_expflag == "true") {
  ytm15Watch.setAttribute("style", `animation: player-watch-2013-open .08s; animation-play-state: paused; animation-direction: normal; animation-delay: 0s;`);
  }
  }
  }, 0);
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

metaColorBeforeWP = metaColorElm.content;

window.addEventListener("popstate", function(){
if (document.querySelector("#watchpageFrame_Container")) {
  exitWatch.onclick();
};
if (!document.body.classList.contains("has-watchpage")) {
setTimeout(function(){
  metaColorBeforeWP = metaColorElm.content;
}, 10);
};
});

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
    menuCont.classList.remove("menu-style-holo", "menu-style-mtrl-2", "menu-style-youtube", "is-watch");
    if (DEFAULT_POPUP_MENU_STYLE_expflag == "Holo") {
    menuCont.classList.add("menu-style-holo");
    } else if (DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material") {

    } else if (DEFAULT_POPUP_MENU_STYLE_expflag == "Material_2") {
    menuCont.classList.add("menu-style-mtrl-2");
    } else if (DEFAULT_POPUP_MENU_STYLE_expflag == "YouTube") {
    menuCont.classList.add("menu-style-youtube");
    }
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

const dialogCont = document.createElement("div");
dialogCont.classList.add("dialog-container");

const ytm15Dialog = document.createElement("dialog");
ytm15Dialog.setAttribute("role", "dialog");
ytm15Dialog.ariaModal = true;
ytm15Dialog.ariaLive = "polite";
ytm15Dialog.classList.add("ytm15-dialog");
ytm15Dialog.setAttribute("tabindex", "-1");

const dialogHeader = document.createElement("div");
dialogHeader.classList.add("dialog-header");
dialogHeader.id = "dialogHeaderId";
dialogHeader.innerHTML = `<h2 class="modal-title"></h2>`;
dialogHeader.querySelector("h2").innerHTML = "Title";
const dialogBody = document.createElement("div");
dialogBody.classList.add("dialog-body", "user-text");
dialogBody.id = "dialogBodyId";
dialogBody.innerHTML = `<p class="secondary-text"></p>`;
dialogBody.querySelector("p").innerHTML = "body";

ytm15Dialog.setAttribute("aria-labelledby", dialogHeader.id);
ytm15Dialog.setAttribute("aria-describedby", dialogBody.id);

const dialogButtons = document.createElement("div");
dialogButtons.classList.add("dialog-buttons");

const dialogBtnCancel = document.createElement("div");
dialogBtnCancel.innerHTML = `<div class="material-button-container compact cancel-button" data-style="CALLACTION_TEXT" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button" aria-label="${Cancel_text_string}"><div class="button-text">${Cancel_text_string}</div></button></div>`;
dialogButtons.appendChild(dialogBtnCancel);
dialogBtnCancel.querySelector(".material-button-container").onclick = function(){
  dialogRemove();
}
const dialogBtnCancel1 = dialogBtnCancel.querySelector(".material-button-container");
dialogBtnCancel.insertAdjacentElement("beforebegin", dialogBtnCancel1);
dialogBtnCancel.remove();

ytm15Dialog.appendChild(dialogHeader);
ytm15Dialog.appendChild(dialogBody);
ytm15Dialog.appendChild(dialogButtons);

const dialogOverlay = document.createElement("div");
dialogOverlay.classList.add("ytm15-overlay");
dialogOverlay.onclick = function(){
  dialogRemove();
}
dialogCont.appendChild(ytm15Dialog);
dialogCont.appendChild(dialogOverlay);

function dialogRenderer(dlHeader, dlBody, dlType, optList, optLSItem, isSettings) {
    dialogHeader.querySelector("h2").innerHTML = dlHeader;
    dialogBody.querySelector("p").innerHTML = dlBody;
    if (dlType == "options") {
    const ytm15Options = document.createElement("div");
    ytm15Options.classList.add("ytm15-options");
    dialogBody.innerHTML = "";
    dialogBody.appendChild(ytm15Options);
    optList.forEach(function(item){
    const optionSelectableItem = document.createElement("div");
    optionSelectableItem.classList.add("option-selectable-item");
    const materialRadio = document.createElement("div");
    materialRadio.classList.add("material-radio");
    const radioInput = document.createElement("label");
    radioInput.classList.add("radio-input", "has-ripple");
    const optInput = document.createElement("input");
    optInput.name = "options";
    optInput.id = item.title;
    optInput.type = "radio";
    if (item.selected == true) {
    optInput.setAttribute("checked", "");
    }
    radioInput.appendChild(optInput);
    const optLabel = document.createElement("label");
    optLabel.classList.add("radio-label");
    optLabel.setAttribute("for", optInput.id);
    optLabel.textContent = item.title;

    ytm15Options.appendChild(optionSelectableItem);
    optionSelectableItem.appendChild(materialRadio);
    materialRadio.appendChild(radioInput);
    materialRadio.appendChild(optLabel);
    });

    const dialogBtnOkOpt = document.createElement("div");
    dialogBtnOkOpt.innerHTML = `<div class="material-button-container compact cancel-button" data-style="CALLACTION_TEXT" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button" aria-label="${Cancel_text_string}"><div class="button-text">${Ok_text_string}</div></button></div>`;
    dialogButtons.appendChild(dialogBtnOkOpt);
    dialogBtnOkOpt.querySelector(".material-button-container").onclick = function(){
    localStorage.setItem(optLSItem, ytm15Options.querySelector("input:checked").id);
    localStorageChange();
    if (isSettings) {
    updateSettingsPage();
    }
    dialogRemove();
    }
    const dialogBtnOkOpt1 = dialogBtnOkOpt.querySelector(".material-button-container");
    dialogBtnOkOpt.insertAdjacentElement("beforebegin", dialogBtnOkOpt1);
    dialogBtnOkOpt.remove();
    }
    document.body.appendChild(dialogCont);
    document.body.classList.add("modal-open");
}

function dialogRemove() {
    dialogCont.classList.add("closing");
setTimeout(function() {
    document.body.removeChild(dialogCont);
    document.body.classList.remove("modal-open");
    dialogCont.classList.remove("closing");
    dialogCont.style = "";
    dialogHeader.innerHTML = `<h2 class="modal-title"></h2>`;
    dialogHeader.querySelector("h2").innerHTML = "Title";
    dialogBody.innerHTML = `<p class="secondary-text"></p>`;
    dialogBody.querySelector("p").innerHTML = "body";
    dialogButtons.innerHTML = "";
    dialogButtons.appendChild(dialogBtnCancel);
    dialogBtnCancel.insertAdjacentElement("beforebegin", dialogBtnCancel1);
    dialogBtnCancel.remove();
}, 300);
}

// credit to Sean McPherson for the original code: https://codepen.io/SeanMcP/pen/RmWJvV
function callback(mutationsList, observer) {
    /* console.log('Mutations:', mutationsList) */
    /* console.log('Observer:', observer) */
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            if (mutation.target.classList.contains("has-watchpage")) {
            metaColorBeforeWP = metaColorElm.content;
            metaColorElm.content = "#000000";
            } else {
            /* metaColorElm.content = metaColorBeforeWP; */
            metaColorChange();
            }
        }
    })
}

const classMutationObserver = new MutationObserver(callback);

classMutationObserver.observe(document.body, { attributes: true });
// end of code

function playerJumpTime(e, jumpTime){
  e.preventDefault();
  if (!app.querySelector("#watchpageFrame_Container")) {
  app.insertAdjacentElement("afterbegin", watchContainer);
  if (watchContainer.classList.contains("miniplayer")) {
  watchContainer.classList.remove("miniplayer");
  app.classList.remove("has-miniplayer");
  }
  playerPrevVideoId = [""];
  playerVideoId = e.target.href.split("=")[1].split("&")[0];
  playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
  renderWatchPage(ytm15Watch);
  }
  if (app.querySelector("#watchpageFrame_Container")) {
  openWatch.onclick();
  if (playerVideoId !== e.target.href.split("=")[1].split("&")[0]) {
  playerPrevVideoId = [""];
  playerVideoId = e.target.href.split("=")[1].split("&")[0];
  playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd;
  renderWatchPage(ytm15Watch);
  };
  };
  if (video) {
  video.currentTime = jumpTime;
  };
  if (document.querySelector(".player-iframe")) {
  playerFrame.src = playerEmbedURLYT + playerVideoId + playerEmbedURLYTEnd + "&t=" + jumpTime + "s";
  };
  return false;
};

function searching(parent, sbInput) {
    const headerBar = document.querySelector("ytm15-header-bar");
    const header = document.querySelector("header");
    /* header.setAttribute('data-mode', 'searching'); */
    header.dataset.mode = 'searching';

    metaColorChange();

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
        metaColorChange();
        searchOverlay.setAttribute('hidden', '');
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
            
        } else {
            backBtn.setAttribute("hidden", "");
        }
        backBtn.onclick = function(){history.back()};
    };
}

function hashDetector() {
    metaColorChange();
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
} else if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
    commentsPage();
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