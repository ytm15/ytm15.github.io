function searchPage() {
    headerTitle.setAttribute("aria-label", "");
    headerTitle.textContent = "";

    pageCont.innerHTML = "";

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    updateSearchVal();
    function updateSearchVal() {
    searchValueNotDecoded = window.location.hash.split("?").slice(1, 2).toString().split("&").slice(0, 1).toString().split("query").slice(1, 2).toString().split("=").slice(1, 2).toString();
    searchValue = decodeURIComponent(searchValueNotDecoded);
    };

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };

    const getSearchData = new XMLHttpRequest();
    getSearchData.open('GET', 'https://invidious.protokolla.fi/api/v1/search?q=' + searchValue + `&page=&sort_by=&date=&duration=&type=&features=`, true);
 
    getSearchData.onerror = function(event) {
    console.error("An error occurred with this operation (" + getSearchData.status + ")");

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
    pageCont.before(error);
    return;
    };

    getSearchData.send();

    getSearchData.onload = function() {
    if (getSearchData.status === 200) {
    const response = JSON.parse(getSearchData.response);
    console.log(response);

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    headerTitle.setAttribute("aria-label", "");
    headerTitle.textContent = "";

    const page = document.createElement("page");
    page.classList.add('searchPage');

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "Results_page");
    tabContainer.appendChild(tabContent);

    const section = document.createElement("div");
    section.classList.add('section-list');
    tabContent.appendChild(section);

    const sectLazyList = document.createElement("div");
    sectLazyList.classList.add('lazy-list');
    section.appendChild(sectLazyList);

    const itemSection = document.createElement("div");
    itemSection.classList.add('item-section');
    sectLazyList.appendChild(itemSection);

    const lazyList = document.createElement("div");
    lazyList.classList.add('lazy-list', 'no-animation');
    itemSection.appendChild(lazyList);

    pageCont.innerHTML = "";

    const parent = document.querySelector(".page-container");
    parent.appendChild(page);
    page.appendChild(tabContainer);

    var title = document.querySelector("title");
    title.textContent = searchValue + ' - 2015YouTube';

    response.forEach(function(item) {
        if (item.type == "channel") {
        compMediaItemThumb = "https:" + item.authorThumbnails[2].url;
        compMediaItemLength = "";
        compMediaItemTitle = item.author;
        compMediaItemAuthor = item.subCount.toLocaleString() + " subscribers";
        compMediaItemvidId = "";
        } else if (item.type == "playlist") {
        compMediaItemThumb = item.playlistThumbnail;
        compMediaItemLength = item.videoCount;
        compMediaItemTitle = item.title;
        compMediaItemAuthor = item.author;
        compMediaItemvidId = item.playlistId;
        } else {
        compMediaItemThumb = item.videoThumbnails[3].url;
        compMediaItemLength = item.lengthSeconds;
        compMediaItemTitle = item.title;
        compMediaItemAuthor = item.author;
        compMediaItemvidId = item.videoId;
        }
        renderCompactMediaItem(lazyList, "lazy-list", compMediaItemvidId, compMediaItemThumb, compMediaItemLength, compMediaItemTitle, compMediaItemAuthor, item.authorId, item.publishedText, item.viewCount, item.type);
    });

    if (response.length == "0") {
    const ytm15Msg = document.createElement("div");
    ytm15Msg.classList.add("ytm15-message");
    ytm15Msg.innerHTML = `<div class="ytm15-message-content"><div class="msg-text">No results found. Try searching for something else or removing filters</div></div>`;
    lazyList.appendChild(ytm15Msg);
    }
    } else {
    getSearchData.onerror();
    }
    };
}