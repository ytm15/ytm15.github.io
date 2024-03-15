function renderHeader() {
    const headerBar = document.createElement("ytm15-header-bar");
    const header = document.createElement("header");
    header.classList.add("ytm15-header");
    header.setAttribute('data-mode', dataMode);
    window.addEventListener('hashchange', async function (event) {
    if (window.location.hash.split("/").slice(1, 2)[0] == "results") {
        header.setAttribute('data-mode', 'search');
    } else {
        header.setAttribute('data-mode', dataMode);
    }
    });

    const backBtn = document.createElement("button");
    backBtn.classList.add("icon-button", "header-button", "back-button");
    backBtn.onclick = function(){history.back()};
    backBtn.setAttribute("aria-label", "Go back");
    /* if (window.location.pathname.split("/").slice(3, 4) == "results.html" || window.location.pathname.split("/").slice(3, 4) == "index.html" && urlpage == "popular") */
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular") {
        
    } else {
        backBtn.setAttribute("hidden", "");
    }
    window.addEventListener('hashchange', async function (event) {
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular") {
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
        header.setAttribute('data-mode', dataMode);
        searchOverlay.setAttribute('hidden', '');
        /* if (window.location.pathname.split("/").slice(3, 4) == "results.html" || window.location.pathname.split("/").slice(3, 4) == "index.html" && urlpage == "popular") */
        if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular") {
            
        } else {
            backBtn.setAttribute("hidden", "");
        }
        backBtn.onclick = function(){history.back()};
    };

    const searchbox = document.createElement("div");
    searchbox.classList.add("ytm15Searchbox", "search-mode");

    const form = document.createElement("form");
    form.classList.add("searchbox-form");
    form.action = "#/results";

    const inputWrap = document.createElement("div");
    inputWrap.classList.add("searchbox-input-wrapper");

    const input = document.createElement("input");
    input.classList.add("searchbox-input", "title");
    input.name = "query";
    input.placeholder = "Search YouTube";
    input.role = "combobox";
    input.type = "search";
    input.autocomplete = "off";
    input.autocorrect = "off";
    input.value = new URLSearchParams(window.location.search).get('query');
    input.onclick = function(){searching();};
    input.addEventListener("keypress", function(event) {
       if (event.key === "Enter") {
          input.blur();
          header.setAttribute('data-mode', dataMode);
          searchOverlay.setAttribute('hidden', '');
          if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results" || window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "popular") {
            
          } else {
              backBtn.setAttribute("hidden", "");
          }
          backBtn.onclick = function(){history.back()};
       }
    });

    const headerCont = document.createElement("div");
    headerCont.classList.add("header-content", "not-search-mode");

    const headerTitle = document.createElement("h1");
    headerTitle.classList.add("title", "header-title");
    headerTitle.setAttribute("aria-label", "2015YouTube");
    headerTitle.textContent = "2015YouTube";
    if (window.location.pathname.split("/").slice(3, 4) == "results.html") {
    headerTitle.setAttribute("hidden", "");
    }
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    headerTitle.setAttribute("hidden", "");
    }
    window.addEventListener('hashchange', async function (event) {
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    headerTitle.setAttribute("hidden", "");
    } else {
    headerTitle.removeAttribute("hidden", "");
    }
    });

    const headerButtons = document.createElement("div");
    headerButtons.classList.add("header-buttons");

    const searchBtn = document.createElement("button");
    searchBtn.classList.add("icon-button", "header-button");
    searchBtn.onclick = function(){searching();};
    searchBtn.setAttribute("aria-label", "Search YouTube");
    searchBtn.setAttribute("aria-haspopup", "false");
    searchBtn.innerHTML = `<ytm15-icon class="search-icon"><svg viewBox="0 0 24 24" fill=""><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></ytm15-icon>`;
    if (window.location.pathname.split("/").slice(3, 4) == "results.html") {
    searchBtn.setAttribute("hidden", "");
    }
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    searchBtn.setAttribute("hidden", "");
    }
    window.addEventListener('hashchange', async function (event) {
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "results") {
    searchBtn.setAttribute("hidden", "");
    } else {
    searchBtn.removeAttribute("hidden", "");
    }
    });

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("icon-button", "header-button", "menu-button");
    menuBtn.onclick = function(){};
    menuBtn.setAttribute("aria-label", "Menu");
    menuBtn.setAttribute("aria-haspopup", "true");
    menuBtn.innerHTML = `<ytm15-icon class="menu-icon"><svg viewBox="0 0 24 24" fill=""><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></svg></ytm15-icon>`;

    headerBar.appendChild(header);
    header.appendChild(backBtn);
    header.appendChild(searchbox);
    searchbox.appendChild(form);
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