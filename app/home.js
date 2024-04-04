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
        getHomeData.open('GET', 'https://invidious.protokolla.fi/api/v1/trending?type=' + trendType, true);
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

        pageCont.innerHTML = "";

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
            renderMediaItem(sectLazyList, item.videoId, item.videoThumbnails[2].url, item.lengthSeconds, item.title, item.author, item.authorId, item.publishedText, item.viewCount);
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
        document.querySelector(".tab-bar").innerHTML = "";
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

        pageCont.innerHTML = "";

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
            renderMediaItem(sectLazyList, item.videoId, item.videoThumbnails[2].url, item.lengthSeconds, item.title, item.author, item.authorId, item.publishedText, item.viewCount);
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

    pageCont.innerHTML = "";

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
        renderCompactMediaItem(verticalList, item.videoId, item.videoThumbnails[2].url, item.lengthSeconds, item.title, item.author, item.authorId, item.publishedText, item.viewCount);
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
    getHomeData2.open('GET', 'https://invidious.protokolla.fi/api/v1/trending?type=' + trendType, true);
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
        renderCompactMediaItem(verticalList, item.videoId, item.videoThumbnails[2].url, item.lengthSeconds, item.title, item.author, item.authorId, item.publishedText, item.viewCount);
    });

    verticalList.appendChild(ESButtonCont);
    } else {
    getHomeData2.onerror();
    }
    }
}