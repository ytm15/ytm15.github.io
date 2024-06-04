function settingsPage() {
    pageCont.innerHTML = "";

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };

    headerTitle.setAttribute("aria-label", Settings_text_string);
    headerTitle.textContent = Settings_text_string;

    const page = document.createElement("page");
    page.classList.add('ytm15Settings');

    const ytm15settings = document.createElement("ytm15-settings");

    const settingsOptCont = document.createElement("div");
    settingsOptCont.classList.add("settings-options-container");

    const optArray = [
    {
      "type": "option",
      "title": General_text_string,
      "link": "#/general",
      "id": "general"
    },
    {
      "type": "option",
      "title": ExpFlags_text_string,
      "link": "#/expflags",
      "id": "expflags"
    },
    {
      "type": "option",
      "title": AboutYTm15_text_string,
      "link": "index.html#/about",
      "id": "about"
    }
    ];

    optArray.forEach(function(item){
      const settingsOpt = document.createElement("a");
      settingsOpt.innerHTML = item.title;
      settingsOpt.classList.add("settings-option", "has-ripple");
      settingsOpt.href = item.link;
      settingsOpt.setAttribute("aria-label", item.title);
      settingsOpt.setAttribute("aria-haspopup", false);
      settingsOpt.setAttribute("aria-pressed", false);
      settingsOpt.id = item.id;
      settingsOptCont.appendChild(settingsOpt);
    });

    const settingsPagesCont = document.createElement("div");
    settingsPagesCont.classList.add("settings-pages-container");

    const settingsPageHeader = document.createElement("h4");
    settingsPageHeader.classList.add("settings-page-header");
    settingsPageHeader.id = "settings";
    settingsPageHeader.innerHTML = Settings_text_string;
    settingsPageHeader.ariaLabel = settingsPageHeader.innerHTML;

    const innerSettingsPageCont = document.createElement("div");
    innerSettingsPageCont.classList.add("inner-settings-page-container");
    innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG_text_string}</div>
`;

    ytm15settings.appendChild(settingsOptCont);
    ytm15settings.appendChild(settingsPagesCont);
    settingsPagesCont.appendChild(settingsPageHeader);
    settingsPagesCont.appendChild(innerSettingsPageCont);

    pageCont.appendChild(page);
    page.appendChild(ytm15settings);

    title.textContent = Settings_text_string + ' - 2015YouTube';

    function settingsEventListenFunc(){
    const settingsOpts = settingsOptCont.querySelectorAll(".settings-option");
    Array.from(settingsOpts).forEach(function(item){
      item.setAttribute("aria-pressed", false);
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == item.id) {
      item.setAttribute("aria-pressed", true);
      }
    });
    innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG_text_string}</div>
`;
    settingsPageHeader.innerHTML = Settings_text_string;
    headerTitle.setAttribute("aria-label", Settings_text_string);
    headerTitle.textContent = Settings_text_string;
    title.textContent = Settings_text_string + ' - 2015YouTube';
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== undefined && window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "") {
      ytm15settings.classList.add("page-visible");
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "general") {
      innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG2_text_string}</div>
`;
      settingsPageHeader.innerHTML = General_text_string;
      headerTitle.setAttribute("aria-label", General_text_string);
      headerTitle.textContent = General_text_string;
      title.textContent = General_text_string + ' - 2015YouTube';
      }
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "expflags") {
      innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG2_text_string}</div>
`;
      settingsPageHeader.innerHTML = ExpFlags_text_string;
      headerTitle.setAttribute("aria-label", ExpFlags_text_string);
      headerTitle.textContent = ExpFlags_text_string;
      title.textContent = ExpFlags_text_string + ' - 2015YouTube';
      }
    } else {
      ytm15settings.classList.remove("page-visible");
    };
    };

    settingsEventListenFunc();

    window.addEventListener("hashchange", function(event){
    settingsEventListenFunc();
    });
}