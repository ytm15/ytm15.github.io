function playlistPage(){
    headerTitle.setAttribute("aria-label", "");
    headerTitle.textContent = "";

    pageCont.innerHTML = "";

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };

    const getPlaylistData = new XMLHttpRequest();
    getPlaylistData.open('GET', APIbaseURL + 'api/v1/playlists/' + window.location.hash.split("?").slice(1, 2).toString().split("&").slice(0, 1).toString().split("list").slice(1, 2).toString().split("=").slice(1, 2).toString(), true);
 
    getPlaylistData.onerror = function(event) {
    console.error("An error occurred with this operation (" + getPlaylistData.status + ")");

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    const error = document.createElement("div");
    error.classList.add('error-container');
    error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry" onClick="location.reload();"><div class="button-text">Retry</div></button></div>`;
    const pageCont = document.querySelector('.page-container');
    pageCont.innerHTML = "";
    pageCont.before(error);
    error.querySelector("button").onclick = function(){
    playlistPage();
    error.remove();
    };
    return;
    };

    getPlaylistData.send();

    getPlaylistData.onload = function() {
    if (getPlaylistData.status === 200) {
    const data = JSON.parse(getPlaylistData.response);

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    headerTitle.setAttribute("aria-label", data.title);
    headerTitle.textContent = data.title;

    const page = document.createElement("page");
    page.classList.add('playlistPage');

    const playlistHeader = document.createElement("ytm15-playlist-header");
    playlistHeader.innerHTML = `<div class="playlist-header-container"><div class="playlist-header-content"></div></div>`;
    const playlistHeaderContn = playlistHeader.querySelector(".playlist-header-content");
    playlistHeader.dataset.isBeta = true;

    const playlistMetadata = document.createElement("div");
    playlistMetadata.classList.add("playlist-header-metatdata-wrapper");
    playlistHeaderContn.appendChild(playlistMetadata);

    const playlistTitleWrap = document.createElement("div");
    playlistTitleWrap.classList.add("playlist-title-wrapper", "has-ripple");
    playlistTitleWrap.innerHTML = `<div class="playlist-title-and-owner">
<div class="playlist-title"><span role="text">${data.title}</span></div>
<div class="playlist-owner-text"><a tabindex="0" href="#${data.authorUrl}" rel="nofollow" target force-new-state="true">${data.author}</a></div>
</div>`;
    playlistMetadata.appendChild(playlistTitleWrap);

    const playlistActionBtns = document.createElement("div");
    playlistActionBtns.classList.add("playlist-action-buttons");
    playlistMetadata.appendChild(playlistActionBtns);

    const flexSpacer = document.createElement("div");
    flexSpacer.classList.add("flex-spacer");
    playlistActionBtns.appendChild(flexSpacer);

    const playArrowBtn = document.createElement("button");
    playArrowBtn.classList.add("icon-button", "playlist-button", "icon-play-arrow");
    playArrowBtn.setAttribute("aria-label", "Play all");
    playArrowBtn.setAttribute("aria-haspopup", "true");
    playArrowBtn.innerHTML = `<ytm15-icon class="play-arrow-icon"><svg viewBox="0 0 24 24" fill=""><path d="m7 4 12 8-12 8V4z"></path></svg></ytm15-icon>`;
    playlistActionBtns.appendChild(playArrowBtn);

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "Playlist_page");

    var sectionList = document.createElement("div");
    sectionList.classList.add("section-list");
    
    var sectLazyList = document.createElement("div");
    sectLazyList.classList.add("lazy-list");
    sectionList.appendChild(sectLazyList);

    const itemSect = document.createElement("div");
    itemSect.classList.add("item-section");
    sectLazyList.appendChild(itemSect);

    const lazyList = document.createElement("div");
    lazyList.classList.add("lazy-list", "no-animation");
    itemSect.appendChild(lazyList);

    const playlistVideoList = document.createElement("div");
    playlistVideoList.classList.add("playlist-video-list");
    lazyList.appendChild(playlistVideoList);

    const playlistVideoListHdr = document.createElement("div");
    playlistVideoListHdr.classList.add("playlist-video-list-header");
    playlistVideoListHdr.innerHTML = `<span role="text">${data.videoCount.toLocaleString()} videos</span>`;
    playlistVideoList.appendChild(playlistVideoListHdr);

    data.videos.forEach(function(item) {
        compMediaItemThumb = item.videoThumbnails[3].url;
        compMediaItemLength = item.lengthSeconds;
        compMediaItemTitle = item.title;
        compMediaItemAuthor = item.author;
        compMediaItemvidId = item.videoId;
        renderCompactMediaItem(playlistVideoList, "playlist-video-list", compMediaItemvidId, compMediaItemThumb, compMediaItemLength, compMediaItemTitle, compMediaItemAuthor, item.authorId, "", "", "video");
    });

    playArrowBtn.onclick = function(){
      playlistVideoList.querySelectorAll(".compact-media-item-thumbnail")[0].click();
    };

    pageCont.innerHTML = "";

    pageCont.appendChild(page);
    page.appendChild(playlistHeader);
    page.appendChild(tabContainer);
    tabContainer.appendChild(tabContent);
    tabContent.appendChild(sectionList);

    var title = document.querySelector("title");
    title.textContent = data.title + ' - 2015YouTube';
    } else {
    getPlaylistData.onerror();
    }
    };
};