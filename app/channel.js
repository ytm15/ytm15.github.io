function channelPage() {
    headerTitle.setAttribute("aria-label", "");
    headerTitle.textContent = "";

    pageCont.innerHTML = "";

    const tabBar = document.createElement("div");
    tabBar.classList.add("tab-bar");
    tabBar.setAttribute('role', 'tablist');
    tabBar.setAttribute('isChannel', 'true');

    const tabBarTabs = document.createElement("div");
    tabBarTabs.classList.add("tab-bar-tabs");
    tabBarTabs.setAttribute('role', 'tablist');

    tabBar.appendChild(tabBarTabs);

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").innerHTML = "";
    document.querySelector(".tab-bar").appendChild(tabBarTabs);
    document.querySelector(".tab-bar").setAttribute("isChannel", "true");
    }

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    const getChannelData = new XMLHttpRequest();
    getChannelData.open('GET', APIbaseURL + 'api/v1/channels/' + window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(2, 3)[0], true);
 
    getChannelData.onerror = function(event) {
    console.error("An error occurred with this operation (" + getChannelData.status + ")");

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

    getChannelData.send();

    getChannelData.onload = function() {
    if (getChannelData.status === 200) {
    const response = JSON.parse(getChannelData.response);
    console.log(response);

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    if (response.authorBanners.toString() == "") {
    headerBar.setAttribute("style", "");
    };

    if (response.authorBanners.toString() !== "") {
    headerBar.setAttribute("style", "background: url(" + response.authorBanners[0].url + `);
    background-position: center;
    background-size: 10000000px;
    transition: none;`);
    };

    response.tabs.forEach(function(item) {
    const tBTabCont = document.createElement("div");
    tBTabCont.classList.add("tabbar-tab-container", item + "-tab");
    tBTabCont.setAttribute('role', 'tab');

    const tab = document.createElement("a");
    tab.classList.add("tab");
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-label', item);
    if (item == "streams") {
    tab.setAttribute('aria-label', 'live');
    }
    tab.setAttribute('aria-selected', 'false');
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == item) {
    tab.setAttribute('aria-selected', 'true');
    }
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == undefined && item == "home" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == "" && item == "home" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == "featured" && item == "home") {
    tab.setAttribute('aria-selected', 'true');
    }
    tab.href = "#/channel/" + window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(2, 3)[0] + "/" + item;
    if (item == "home") {
    tab.href = "#/channel/" + window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(2, 3)[0] + "/featured";
    }
    tab.innerHTML = item;
    if (item == "streams") {
    tab.innerHTML = "live";
    }

    tabBarTabs.appendChild(tBTabCont);
    tBTabCont.appendChild(tab);
    });

    const tBTabCont = document.createElement("div");
    tBTabCont.classList.add("tabbar-tab-container", "about-tab");
    tBTabCont.setAttribute('role', 'tab');

    const tab = document.createElement("a");
    tab.classList.add("tab");
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-label', 'about');
    tab.setAttribute('aria-selected', 'false');
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == "about") {
    tab.setAttribute('aria-selected', 'true');
    }
    tab.href = "#/channel/" + window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(2, 3)[0] + "/about";
    tab.innerHTML = "about";

    tabBarTabs.appendChild(tBTabCont);
    tBTabCont.appendChild(tab);

    headerTitle.setAttribute("aria-label", response.author);
    headerTitle.textContent = response.author;

    const page = document.createElement("page");
    page.classList.add('channelPage');

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    response.tabs.forEach(function(item) {
    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "Channel_page");
    tabContent.setAttribute("tab-title", item);
    tabContent.setAttribute("hidden", "");
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == item) {
    tabContent.removeAttribute("hidden");
    }
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == undefined && item == "home" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == "" && item == "home" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == "featured" && item == "home") {
    tabContent.removeAttribute("hidden");
    }
    if (item == "streams") {
    tabContent.setAttribute("tab-title", "live");
    }
    tabContainer.appendChild(tabContent);
    });

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "Channel_page");
    tabContent.setAttribute("tab-title", "about");
    tabContent.setAttribute("hidden", "");
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(3, 4)[0] == "about") {
    tabContent.removeAttribute("hidden");
    }
    tabContainer.appendChild(tabContent);

    pageCont.innerHTML = "";

    const parent = document.querySelector(".page-container");
    parent.appendChild(page);
    page.appendChild(tabContainer);

    var title = document.querySelector("title");
    title.textContent = response.author + ' - 2015YouTube';

    if (!document.querySelector(".tab-bar")) {
        headerBar.appendChild(tabBar);
        headerBar.classList.add('has-tab-bar');
        tabBar.removeAttribute("hidden");
        document.querySelector(".tab-bar").setAttribute("isChannel", "true");
    };

    if (document.querySelector(".tab-bar")) {
        document.querySelector(".tab-bar").removeAttribute("hidden");
        document.querySelector(".tab-bar").setAttribute("isChannel", "true");
        headerBar.classList.add('has-tab-bar');
    };
    } else {
    getChannelData.onerror();
    }
    };
}