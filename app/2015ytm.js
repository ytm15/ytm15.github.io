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
playerEmbedURL = "https://invidious.protokolla.fi/embed/";

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

/* let hash = window.location.hash;
console.log(hash); */

console.log(window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0]);

const app = document.querySelector("ytm15app");

const headerTitle = document.querySelector(".header-title");

const headerBar = document.querySelector("ytm15-header-bar");

const pageCont = document.querySelector('.page-container');

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

function searching() {
    const headerBar = document.querySelector("ytm15-header-bar");
    const header = document.querySelector("header");
    header.setAttribute('data-mode', 'searching');

    const input = document.querySelector(".searchbox-input");
    input.focus();

    const searchOverlay = document.querySelector(".searching-overlay");
    searchOverlay.removeAttribute('hidden');

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
} else {
    if (document.querySelector(".spinner-container.full-height")) {
    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");
    }
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