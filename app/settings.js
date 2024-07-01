function renderSettingBoolean(parent, sbTitle, sbSubtitle, isPressed, isDisabled, LSItem) {
    const settingBoolean = document.createElement("div");
    settingBoolean.classList.add("setting-boolean", "has-ripple");
    const sbLabel = document.createElement("label");
    sbLabel.classList.add("setting-label");
    const settingTitleSubBlock = document.createElement("div");
    settingTitleSubBlock.classList.add("setting-title-subtitle-block");
    const settingTitle = document.createElement("h3");
    settingTitle.id = "setting-title-subtitle-block-title";
    settingTitle.innerHTML = sbTitle;
    const settingSubtitle = document.createElement("span");
    settingSubtitle.id = "setting-title-subtitle-block-subtitle";
    settingSubtitle.innerHTML = sbSubtitle;

    settingBoolean.appendChild(sbLabel);
    sbLabel.appendChild(settingTitleSubBlock);
    renderToggleBtn(sbLabel, isDisabled, isPressed, LSItem);
    settingTitleSubBlock.appendChild(settingTitle);
    settingTitleSubBlock.appendChild(settingSubtitle);

    parent.appendChild(settingBoolean);
}
function renderSettingOptionMenu(parent, somTitle, somSubtitle) {
    const settingOptionMenu = document.createElement("div");
    settingOptionMenu.classList.add("setting-single-option-menu", "has-ripple");
    const sbLabel = document.createElement("label");
    sbLabel.classList.add("setting-label");
    const settingTitleSubBlock = document.createElement("div");
    settingTitleSubBlock.classList.add("setting-title-subtitle-block");
    settingTitleSubBlock.role = "button";
    settingTitleSubBlock.tabindex = "0";
    const settingTitle = document.createElement("h3");
    settingTitle.id = "setting-title-subtitle-block-title";
    settingTitle.innerHTML = somTitle;
    const settingSubtitle = document.createElement("span");
    settingSubtitle.id = "setting-title-subtitle-block-subtitle";
    settingSubtitle.innerHTML = somSubtitle;

    settingOptionMenu.appendChild(sbLabel);
    sbLabel.appendChild(settingTitleSubBlock);
    settingTitleSubBlock.appendChild(settingTitle);
    settingTitleSubBlock.appendChild(settingSubtitle);

    parent.appendChild(settingOptionMenu);
}

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
    settingsOptCont.classList.add("settings-categories-container");

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
      settingsOpt.classList.add("settings-category", "has-ripple");
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
    const settingsOpts = settingsOptCont.querySelectorAll(".settings-category");
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
    settingsPageHeader.id = "settings";
    headerTitle.setAttribute("aria-label", Settings_text_string);
    headerTitle.textContent = Settings_text_string;
    title.textContent = Settings_text_string + ' - 2015YouTube';
    if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== undefined && window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] !== "") {
      ytm15settings.classList.add("page-visible");
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "general") {
      /* innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG2_text_string}</div>
`; */
      innerSettingsPageCont.innerHTML = "";
      var settingsPage = document.createElement("settings-page");
      settingsPageHeader.id = "expflags";
      settingsPage.classList.add(settingsPageHeader.id);
      innerSettingsPageCont.appendChild(settingsPage);
      settingsPageHeader.innerHTML = General_text_string;
      settingsPageHeader.id = "general";
      headerTitle.setAttribute("aria-label", General_text_string);
      headerTitle.textContent = General_text_string;
      title.textContent = General_text_string + ' - 2015YouTube';

      if (WEB_ENABLE_DARK_THEME_OPTION_expflag == "true") {
      settingBooleanDark = {
        "type": "boolean",
        "title": DarkTheme_text_string,
        "subtitle": DarkThemeDesc_text_string,
        "pressed": DARK_THEME_option == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "DARK_THEME"
      }
      } else {
      settingBooleanDark = ""
      };

      settingBlocks = [
      settingBooleanDark
      ];
      settingBlocks.forEach(function(item){
      if (item.type == "boolean") {
      renderSettingBoolean(settingsPage, item.title, item.subtitle, item.pressed, item.disabled, item.lsitem);
      };
      if (item.type == "option-menu") {
      optSubtitle = item.subtitle;
      if (item.subtitle == "") {
      item.options.forEach(function(itemOpt){
      if (itemOpt.selected){
      optSubtitle = itemOpt.title;
      };
      });
      };
      renderSettingOptionMenu(settingsPage, item.title, optSubtitle);
      };
      });
      }
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "expflags") {
      /* innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG2_text_string}</div>
`; */
      innerSettingsPageCont.innerHTML = "";
      var settingsPage = document.createElement("settings-page");
      settingsPageHeader.id = "expflags";
      settingsPage.classList.add(settingsPageHeader.id);
      innerSettingsPageCont.appendChild(settingsPage);
      settingsPageHeader.innerHTML = ExpFlags_text_string;
      headerTitle.setAttribute("aria-label", ExpFlags_text_string);
      headerTitle.textContent = ExpFlags_text_string;
      title.textContent = ExpFlags_text_string + ' - 2015YouTube';
      
      settingBlocks = [
      {
        "type": "boolean",
        "title": "DISABLE_YTM15_APP_BORDER",
        "subtitle": "",
        "pressed": DISABLE_YTM15_APP_BORDER_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "DISABLE_YTM15_APP_BORDER"
      },
      {
        "type": "option-menu",
        "title": "DEFAULT_POPUP_MENU_STYLE",
        "subtitle": "",
        "options": [
        {
          "title": "Holo",
          "selected": false,
          "selected-default": false
        },
        {
          "title": "Material",
          "selected": true,
          "selected-default": true
        },
        {
          "title": "Material_2",
          "selected": false,
          "selected-default": false
        },
        {
          "title": "YouTube",
          "selected": false,
          "selected-default": false
        }
        ]
      },
      {
        "type": "option-menu",
        "title": "DEFAULT_MEDIA_POPUP_MENU_STYLE",
        "subtitle": "",
        "options": [
        {
          "title": "Holo",
          "selected": true,
          "selected-default": true
        },
        {
          "title": "Material",
          "selected": false,
          "selected-default": false
        },
        {
          "title": "Material_2",
          "selected": false,
          "selected-default": false
        },
        {
          "title": "YouTube",
          "selected": false,
          "selected-default": false
        }
        ]
      },
      {
        "type": "boolean",
        "title": "WEB_ENABLE_DARK_THEME_OPTION",
        "subtitle": "",
        "pressed": WEB_ENABLE_DARK_THEME_OPTION_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WEB_ENABLE_DARK_THEME_OPTION"
      },
      {
        "type": "boolean",
        "title": "WEB_CHANNELS_HEADER_NO_LEFT_MARGIN",
        "subtitle": "",
        "pressed": WEB_CHANNELS_HEADER_NO_LEFT_MARGIN_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WEB_CHANNELS_HEADER_NO_LEFT_MARGIN"
      },
      {
        "type": "boolean",
        "title": "MENU_DISABLE_CANCEL_BUTTON",
        "subtitle": "",
        "pressed": MENU_DISABLE_CANCEL_BUTTON_expflag == "true",
        "pressed-default": true,
        "disabled": false,
        "lsitem": "MENU_DISABLE_CANCEL_BUTTON"
      },
      {
        "type": "boolean",
        "title": "CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS",
        "subtitle": "",
        "pressed": CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS"
      }
      ];
      settingBlocks.forEach(function(item){
      if (item.type == "boolean") {
      renderSettingBoolean(settingsPage, item.title, item.subtitle, item.pressed, item.disabled, item.lsitem);
      };
      if (item.type == "option-menu") {
      optSubtitle = item.subtitle;
      if (item.subtitle == "") {
      item.options.forEach(function(itemOpt){
      if (itemOpt.selected){
      optSubtitle = itemOpt.title;
      };
      });
      };
      renderSettingOptionMenu(settingsPage, item.title, optSubtitle);
      };
      });
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