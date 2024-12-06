function renderHeader() {
    const headerBar = document.createElement("ytm15-header-bar");
    const header = document.createElement("header");
    header.classList.add("ytm15-header");
    /* header.setAttribute('data-mode', dataMode); */
    header.dataset.mode = dataMode;
    headerBar.setAttribute('ischannel', headerIsChannel);
    headerBar.setAttribute("style", "");
    window.addEventListener('hashchange', function (event) {
    if (window.location.hash.split("/").slice(1, 2)[0] == "results") {
        /* header.setAttribute('data-mode', 'search'); */
        header.dataset.mode = 'search';
    } else {
        /* header.setAttribute('data-mode', dataMode); */
        header.dataset.mode = dataMode;
    }
    headerBar.setAttribute('ischannel', headerIsChannel);
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "channel") {
    headerBar.setAttribute("style", "");
    }
    });

    function hbStorageChange(){
    if (HEADER_SHORTER_SIZE_expflag == "true") {
    headerBar.classList.add("shorter");
    } else {
    headerBar.classList.remove("shorter");
    };
    if (HEADER_RED_STYLE_expflag == "true") {
    headerBar.classList.remove("non-red");
    } else {
    headerBar.classList.add("non-red");
    };
    if (HEADER_WHITE_BTN_COLORS_expflag == "true") {
    headerBar.classList.add("white-colors");
    } else {
    headerBar.classList.remove("white-colors");
    };
    };
    hbStorageChange();
    window.addEventListener("storage", function(){
    hbStorageChange();
    });

    const headerEP = document.createElement("div");
    headerEP.classList.add("header-endpoint", "ytm15-home-logo");
    headerEP.ariaLabel = _2015YT_text_string;
    headerEPSrc = "yt_wordmark_header_light.png"
    if (DARK_THEME_option == "true") {
    headerEPSrc = "yt_wordmark_header_dark.png"
    }
    headerEP.innerHTML = `<img class="ytm15-img-icon ytm15-img youtube-logo-icon ringo-logo" src="${headerEPSrc}">`;

    const backBtn = document.createElement("button");
    backBtn.classList.add("icon-button", "header-button", "back-button");
    backBtn.onclick = function(){history.back()};
    backBtn.setAttribute("aria-label", "Go back");
    /* if (window.location.pathname.split("/").slice(3, 4) == "results.html" || window.location.pathname.split("/").slice(3, 4) == "index.html" && urlpage == "popular") */
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist" || window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
        
    } else {
        backBtn.setAttribute("hidden", "");
    }
    window.addEventListener('hashchange', function (event) {
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist" || window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
        backBtn.removeAttribute("hidden", "");
    } else {
        backBtn.setAttribute("hidden", "");
    }
    });
    backBtn.innerHTML = `<ytm15-icon class="back-arrow"><svg viewBox="0 0 24 24" fill=""><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></svg></ytm15-icon>`;

    const searchOverlay = document.createElement("div");
    searchOverlay.classList.add("searching-overlay");
    searchOverlay.setAttribute('hidden', '');
    searchOverlay.onclick = function(){
        /* header.setAttribute('data-mode', dataMode); */
        header.dataset.mode = dataMode;
        metaColorChange();
        searchOverlay.setAttribute('hidden', '');
        /* if (window.location.pathname.split("/").slice(3, 4) == "results.html" || window.location.pathname.split("/").slice(3, 4) == "index.html" && urlpage == "popular") */
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
            
        } else {
            backBtn.setAttribute("hidden", "");
        }
        backBtn.onclick = function(){history.back()};
    };

    const searchbox = document.createElement("div");
    searchbox.classList.add("ytm15Searchbox", "search-mode");

    const input = document.createElement("input");
    input.classList.add("searchbox-input", "title");
    input.name = "query";
    input.placeholder = SearchYT_text_string;
    input.role = "combobox";
    input.type = "search";
    input.autocomplete = "on";
    input.setAttribute("autocorrect", "off");
    /* input.value = new URLSearchParams(window.location.search).get('query'); */
    updateSearchVal();
    function updateSearchVal() {
    /* searchValue = window.location.hash.split("?").slice(1, 2).toString().split("query").slice(1, 2).toString().split("=").slice(1, 2).toString().replaceAll("%20", " ").replaceAll("%3F", "?").replaceAll("%3D", "=").replaceAll("%23", "#").replaceAll("%60", "`").replaceAll("%25", "%").replaceAll("%26", "&").replaceAll("%2C", ","); */
    searchValueNotDecoded = window.location.hash.split("?").slice(1, 2).toString().split("&").slice(0, 1).toString().split("query").slice(1, 2).toString().split("=").slice(1, 2).toString();
    searchValue = decodeURIComponent(searchValueNotDecoded);
    };
    input.value = searchValue;
    if (searchValue == undefined) {
    input.value = "";
    }
    window.addEventListener('hashchange', function (event) {
    updateSearchVal();
    input.value = searchValue;
    if (searchValue == undefined) {
    input.value = "";
    }
    });
    /* input.onclick = function(){searching(searchDropdown, input);}; */
    /* input.addEventListener("keypress", function(event) {
       if (event.key === "Enter") {
          input.blur();
          // header.setAttribute('data-mode', dataMode);
          header.dataset.mode = dataMode;
          searchOverlay.setAttribute('hidden', '');
          if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
            
          } else {
              backBtn.setAttribute("hidden", "");
          }
          backBtn.onclick = function(){history.back()};
       }
    }); */

    const form = document.createElement("form");
    form.classList.add("searchbox-form");
    form.action = "#/results";
    form.onclick = function(){searching(searchDropdown, input);};
    form.onsubmit = function(){
          /* window.location.href = "#/results?query=" + input.value.replaceAll("%", "%25").replaceAll("?", "%3F").replaceAll("=", "%3D").replaceAll("#", "%23").replaceAll("&", "%26").replaceAll(",", "%2C"); */
          window.location.href = "#/results?query=" + encodeURIComponent(input.value);
          input.blur();
          /* header.setAttribute('data-mode', dataMode); */
          header.dataset.mode = dataMode;
          metaColorChange();
          searchOverlay.setAttribute('hidden', '');
          if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "about" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "channel" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "playlist" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "comments") {
            
          } else {
              backBtn.setAttribute("hidden", "");
          }
          backBtn.onclick = function(){history.back()};
          return false;
    };

    const inputWrap = document.createElement("div");
    inputWrap.classList.add("searchbox-input-wrapper");

    const searchDropdown = document.createElement("div");
    searchDropdown.classList.add("searchbox-dropdown");

    const headerCont = document.createElement("div");
    headerCont.classList.add("header-content", "not-search-mode");

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("title", "header-title");
    headerTitle.setAttribute("aria-label", _2015YT_text_string);
    headerTitle.textContent = _2015YT_text_string;
    if (window.location.pathname.split("/").slice(3, 4) == "results.html") {
    headerTitle.setAttribute("hidden", "");
    }
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    headerTitle.setAttribute("hidden", "");
    }

    if (WEB_ENABLE_PIVOT_BAR_expflag == "true" && HEADER_RED_STYLE_expflag == "false" && (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending")) {
    if (window.location.pathname.split("/").slice(2, 3) == "2015YouTube%20(Mobile)" && (window.location.pathname.split("/").slice(3, 4) == "index.html" || window.location.pathname.split("/").slice(3, 4) == "index" || window.location.pathname.split("/").slice(3, 4) == undefined || window.location.pathname.split("/").slice(3, 4) == "") || window.location.pathname.split("/").slice(2, 3) !== "2015YouTube%20(Mobile)" && (window.location.pathname.split("/").slice(2, 3) == "index.html" || window.location.pathname.split("/").slice(2, 3) == "index" || window.location.pathname.split("/").slice(2, 3) == undefined || window.location.pathname.split("/").slice(2, 3) == "")) {
    headerTitle.setAttribute("hidden", "");
    if (!header.querySelector(".header-endpoint")) {
    header.insertAdjacentElement("afterbegin", headerEP);
    }
    }
    } else {
    headerTitle.removeAttribute("hidden", "");
    headerEP.remove();
    }
    window.addEventListener('hashchange', function (event) {
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    headerTitle.setAttribute("hidden", "");
    } else {
    headerTitle.removeAttribute("hidden", "");
    }

    if (WEB_ENABLE_PIVOT_BAR_expflag == "true" && HEADER_RED_STYLE_expflag == "false" && (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == undefined || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "trending")) {
    if (window.location.pathname.split("/").slice(2, 3) == "2015YouTube%20(Mobile)" && (window.location.pathname.split("/").slice(3, 4) == "index.html" || window.location.pathname.split("/").slice(3, 4) == "index" || window.location.pathname.split("/").slice(3, 4) == undefined || window.location.pathname.split("/").slice(3, 4) == "") || window.location.pathname.split("/").slice(2, 3) !== "2015YouTube%20(Mobile)" && (window.location.pathname.split("/").slice(2, 3) == "index.html" || window.location.pathname.split("/").slice(2, 3) == "index" || window.location.pathname.split("/").slice(2, 3) == undefined || window.location.pathname.split("/").slice(2, 3) == "")) {
    headerTitle.setAttribute("hidden", "");
    if (!header.querySelector(".header-endpoint")) {
    header.insertAdjacentElement("afterbegin", headerEP);
    }
    }
    } else {
    headerTitle.removeAttribute("hidden", "");
    headerEP.remove();
    }
    });

    const headerButtons = document.createElement("div");
    headerButtons.classList.add("header-buttons");

    const searchBtn = document.createElement("button");
    searchBtn.classList.add("icon-button", "header-button", "search-button");
    searchBtn.onclick = function(){searching(searchDropdown, input);};
    searchBtn.setAttribute("aria-label", SearchYT_text_string);
    searchBtn.setAttribute("aria-haspopup", "false");
    searchBtn.innerHTML = `<ytm15-icon class="search-icon"><svg viewBox="0 0 24 24" fill=""><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></ytm15-icon>`;
    if (window.location.pathname.split("/").slice(3, 4) == "results.html") {
    searchBtn.setAttribute("hidden", "");
    }
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings") {
    searchBtn.setAttribute("hidden", "");
    }
    window.addEventListener('hashchange', function (event) {
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings") {
    searchBtn.setAttribute("hidden", "");
    } else {
    searchBtn.removeAttribute("hidden", "");
    }
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("icon-button", "header-button", "menu-button");
    menuBtn.onclick = function(){
    menuRenderer();
    menuCont.setAttribute("style", "top: 0; right: 0; position: fixed;");
    if (HEADER_SHORTER_SIZE_expflag == "true" && APP_DEMATERIALIZE_UI_expflag !== "true") {
    menuCont.setAttribute("style", "top: 0; right: 0; position: fixed; margin: 2px 7px;");
    }
	if (APP_DEMATERIALIZE_UI_expflag == "true") {
    menuCont.setAttribute("style", "top: 36px; right: 0; position: fixed; transform-origin: top;");
    }

    const menuItemSettings = document.createElement("div");
    menuItemSettings.classList.add("menu-item");
    menuItem.before(menuItemSettings);

    const menuItemBtnSettings = document.createElement("button");
    menuItemBtnSettings.classList.add("menu-item-button", "has-ripple");
    menuItemBtnSettings.textContent = Settings_text_string;
    menuItemBtnSettings.onclick = function(){
        window.location.href = "settings.html";
        menuRemoveExtras();
        menuRemove();
    };
    menuItemSettings.appendChild(menuItemBtnSettings);

    const menuItemAbt = document.createElement("div");
    menuItemAbt.classList.add("menu-item");
    menuItem.before(menuItemAbt);

    const menuItemBtnAbt = document.createElement("button");
    menuItemBtnAbt.classList.add("menu-item-button", "has-ripple");
    /* menuItemBtnAbt.textContent = "About YTm15"; */
    menuItemBtnAbt.textContent = AboutYTm15_text_string;
    menuItemBtnAbt.onclick = function(){
        window.location.href = "#/about";
        menuRemoveExtras();
        menuRemove();
    };
    menuItemAbt.appendChild(menuItemBtnAbt);

    const menuItemHome = document.createElement("div");
    menuItemHome.classList.add("menu-item");
    menuItem.before(menuItemHome);

    const menuItemBtnHome = document.createElement("button");
    menuItemBtnHome.classList.add("menu-item-button", "has-ripple");
    menuItemBtnHome.textContent = ReturnHomepage_text_string;
    menuItemBtnHome.onclick = function(){
        window.location.href = "#/";
        menuRemoveExtras();
        menuRemove();
    };
    menuItemHome.appendChild(menuItemBtnHome);

    const menuItemReload = document.createElement("div");
    menuItemReload.classList.add("menu-item");
    menuItem.before(menuItemReload);

    const menuItemBtnReload = document.createElement("button");
    menuItemBtnReload.classList.add("menu-item-button", "has-ripple");
    menuItemBtnReload.textContent = Reload_text_string;
    menuItemBtnReload.onclick = function(){
        window.location.reload();
        menuRemoveExtras();
        menuRemove();
    };
    menuItemReload.appendChild(menuItemBtnReload);

    function menuRemoveExtras() {
        setTimeout(function() {
        menuItemSettings.remove();
        menuItemAbt.remove();
        menuItemHome.remove();
        menuItemReload.remove();
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
    menuBtn.setAttribute("aria-label", "Menu");
    menuBtn.setAttribute("aria-haspopup", "true");
    menuBtn.innerHTML = `<ytm15-icon class="menu-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></ytm15-icon>`;

    if (APP_DEMATERIALIZE_UI_expflag == "true") {
    backBtn.innerHTML = `<img class="ytm15-img-icon ytm15-img back-icon" src="abc_ic_ab_back_holo_light.png"><img class="ytm15-img-icon ytm15-img youtube-logo-icon action-bar-logo" src="action_bar_logo_release.png">`;
    searchBtn.innerHTML = `<img class="ytm15-img-icon ytm15-img search-icon" src="ic_menu_search.png">`;
    menuBtn.innerHTML = `<img class="ytm15-img-icon ytm15-img menu-icon" src="abc_ic_menu_moreoverflow_normal_holo_light.png">`;
    };

    if (window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings") {
    menuBtn.setAttribute("hidden", "");
    }
    window.addEventListener('hashchange', function (event) {
    if (window.location.pathname.split("/").slice(3, 4) == "settings.html" || window.location.pathname.split("/").slice(3, 4) == "settings" || window.location.pathname.split("/").slice(2, 3) == "settings.html" || window.location.pathname.split("/").slice(2, 3) == "settings") {
    menuBtn.setAttribute("hidden", "");
    } else {
    menuBtn.removeAttribute("hidden", "");
    }
    });

    headerBar.appendChild(header);
    header.appendChild(backBtn);
    header.appendChild(searchbox);
    searchbox.appendChild(form);
    searchbox.appendChild(searchDropdown);
    form.appendChild(inputWrap);
    inputWrap.appendChild(input);
    header.appendChild(headerCont);
    headerCont.appendChild(headerTitle);
    headerCont.appendChild(headerButtons);
    headerButtons.appendChild(searchBtn);
    headerButtons.appendChild(menuBtn);

    const app = document.querySelector("ytm15app");
    app.insertAdjacentElement("afterbegin", headerBar);
    app.insertAdjacentElement("afterbegin", searchOverlay);
}