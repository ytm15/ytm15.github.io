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
function renderSettingOptionMenu(parent, somTitle, somSubtitle, somArray, somLSItem) {
    const settingOptionMenu = document.createElement("div");
    settingOptionMenu.classList.add("setting-single-option-menu", "has-ripple");
    const sbLabel = document.createElement("label");
    sbLabel.classList.add("setting-label");
    const settingTitleSubBlock = document.createElement("div");
    settingTitleSubBlock.classList.add("setting-title-subtitle-block");
    settingTitleSubBlock.role = "button";
    settingTitleSubBlock.tabindex = "0";
    settingTitleSubBlock.onclick = function(){
      dialogRenderer(somTitle, "", "options", somArray, somLSItem, true);
    }
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
// NEW: Render a setting allowing text input (Credit to Legoskid for implementation)
function renderSettingText(parent, stTitle, stSubtitle, stValue, stPlaceholder, stDisabled, stLSItem) {
  const settingText = document.createElement("div");
  settingText.classList.add("setting-text" /*, "has-ripple" */);
  const sbLabel = document.createElement("label");
  sbLabel.classList.add("setting-label");
  const settingTitleSubBlock = document.createElement("div");
  settingTitleSubBlock.classList.add("setting-title-subtitle-block");
  const settingTitle = document.createElement("h3");
  settingTitle.id = "setting-title-subtitle-block-title";
  settingTitle.innerHTML = stTitle;
  const settingSubtitle = document.createElement("span");
  settingSubtitle.id = "setting-title-subtitle-block-subtitle";
  settingSubtitle.innerHTML = stSubtitle;

  // Text input element
  const textInput = document.createElement("input");
  textInput.type = "text";
  textInput.classList.add("setting-text-input");
  textInput.value = stValue || "";
  if (stPlaceholder) textInput.placeholder = stPlaceholder;
  if (stDisabled) textInput.disabled = true;

  // Local Storage logic for text input
  textInput.addEventListener("input", function() {
    if (stLSItem) {
      localStorage.setItem(stLSItem, textInput.value);
    }
  });

  // Load stored value if exists
  if (stLSItem) {
    const stored = localStorage.getItem(stLSItem);
    if (stored !== null) textInput.value = stored;
  }

  settingText.appendChild(sbLabel);
  sbLabel.appendChild(settingTitleSubBlock);
  settingTitleSubBlock.appendChild(settingTitle);
  settingTitleSubBlock.appendChild(settingSubtitle);
  sbLabel.appendChild(textInput);

  parent.appendChild(settingText);
}

function parseImportedText(str) {return str.replace(/^"|"$/g, '');}; // because i can't put quotes in the onclick which is already kinda a mess

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
    },
    {
      "type": "option",
      "title": Feedback_text_string,
      "link": "#/feedback",
      "id": "feedback"
    },
    {
      "type": "option",
      "title": InstallYtm15_text_string,
      "link": "#/install",
      "id": "install"
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

    const settingsSaveAndLoad = document.createElement("div");
    settingsSaveAndLoad.style.display = "flex";
    settingsSaveAndLoad.innerHTML = `<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Save" onclick="navigator.clipboard.writeText(JSON.stringify(localStorage)).then(()=>{showNotification('Copied! You can share this online or keep it as a backup.')}).catch(err=>{showNotification(err);});"><div class="button-text">Save</div></button></div><div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Load" onclick="(async()=>{try{const clipboardText=await navigator.clipboard.readText();const data=JSON.parse(clipboardText);Object.keys(data).forEach(k=>{localStorage.setItem(k,parseImportedText(JSON.stringify(data[k])))});console.log('Data imported successfully');showNotification('Imported.');}catch(err){showNotification('To import expflags, copy a saved list into your clipboard. This will overwrite your current expflags, obviously. '+err)}})();"><div class="button-text">Load</div></button></div>`;

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
      if (item.type == "text") {
        renderSettingText(settingsPage, item.title, item.subtitle, item.value, item.placeholder, item.disabled, item.lsitem);
      }
      });
      }
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "feedback") {
      /* innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG2_text_string}</div>
`; */
      innerSettingsPageCont.innerHTML = "";
      var settingsPage = document.createElement("settings-page");
      settingsPageHeader.id = "expflags";
      settingsPage.classList.add(settingsPageHeader.id);
      settingsPage.style.userSelect = "unset";
      settingsPage.style.msUserSelect = "unset";
      settingsPage.style.mozUserSelect = "unset";
      settingsPage.style.khtmlUserSelect = "unset";
      settingsPage.style.webkitUserSelect = "unset";
      settingsPage.style.webkitTouchCallout = "unset";
      settingsPage.style.letterSpacing = "1px";
      innerSettingsPageCont.appendChild(settingsPage);
      settingsPageHeader.innerHTML = Feedback_text_string;
      settingsPageHeader.id = "feedback";
      headerTitle.setAttribute("aria-label", Feedback_text_string);
      headerTitle.textContent = Feedback_text_string;
      title.textContent = Feedback_text_string + ' - 2015YouTube';

      settingsPage.innerHTML="<p>Open an issue on the YTm15 GitHub:<br>https://github.com/ytm15/ytm15.github.io/issues</p><p>Check for pull requests open (If any of the features you want may be being added):<br>https://github.com/ytm15/ytm15.github.io/pulls</p><p>You can also post on r/oldyoutubelayout (the dev is active there)</p>";
      }
      if (window.location.hash.split("/").join(',').split("?").join(',').split(',').slice(1, 2)[0] == "install") {
      /* innerSettingsPageCont.innerHTML = `
<div class="ytm15-settings-msg">${SettingsMSG2_text_string}</div>
`; */
      innerSettingsPageCont.innerHTML = "";
      var settingsPage = document.createElement("settings-page");
      settingsPageHeader.id = "expflags";
      settingsPage.classList.add(settingsPageHeader.id);
      settingsPage.style.userSelect = "unset";
      settingsPage.style.msUserSelect = "unset";
      settingsPage.style.mozUserSelect = "unset";
      settingsPage.style.khtmlUserSelect = "unset";
      settingsPage.style.webkitUserSelect = "unset";
      settingsPage.style.webkitTouchCallout = "unset";
      settingsPage.style.letterSpacing = "1px";
      innerSettingsPageCont.appendChild(settingsPage);
      settingsPageHeader.innerHTML = InstallYtm15_text_string;
      settingsPageHeader.id = "install";
      headerTitle.setAttribute("aria-label", InstallYtm15_text_string);
      headerTitle.textContent = InstallYtm15_text_string;
      title.textContent = InstallYtm15_text_string + ' - 2015YouTube';

      settingsPage.innerHTML=`<table style="border-top: 1px solid;border-bottom: 1px solid;margin-bottom:1rem;"><tr style="font-size:18px;"><td><img src="icon.png" width=60 style="padding-right: 5px;"></td><td>2015YouTube<br><span style="font-size:16px;">ytm15.github.io</span></td><td class="has-ripple" style="text-align:right;width: 100%;padding-right:3rem"><span style="border:1.2px solid rgba(0, 0, 0, 0.15);padding:3px;font-weight:bold;text-transform:uppercase;background:#f3f3f3;">Get as a Webapp</td></tr></table>Modern devices:<ol style="font-size: 15px;"><li>Open Safari (iOS)/Chrome (Android)</li><li>Go to <b>https://ytm15.github.io/app</b></li><li>Press "share"/the three dots</li><li>Press "Add to Home Screen"</li></ol>YTm15 is not supported on ≤iOS 9, or maybe some old versions of Android, if you are using the native WebView/Browser, but this shouldn't be an issue as you can install a newer browser APK. Hopefully, that will change too. Alternatively, there are websites online that can let you turn a website into an APK, but note what I said if it uses WebView.`;
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
      settingsPage.appendChild(settingsSaveAndLoad);

      
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
          "selected": DEFAULT_POPUP_MENU_STYLE_expflag == "Holo",
          "selected-default": false
        },
        {
          "title": "Material",
          "selected": DEFAULT_POPUP_MENU_STYLE_expflag == "Material",
          "selected-default": true
        },
        {
          "title": "Material_2",
          "selected": DEFAULT_POPUP_MENU_STYLE_expflag == "Material_2",
          "selected-default": false
        },
        {
          "title": "YouTube",
          "selected": DEFAULT_POPUP_MENU_STYLE_expflag == "YouTube",
          "selected-default": false
        }
        ],
        "lsitem": "DEFAULT_POPUP_MENU_STYLE"
      },
      {
        "type": "option-menu",
        "title": "DEFAULT_MEDIA_POPUP_MENU_STYLE",
        "subtitle": "",
        "options": [
        {
          "title": "Holo",
          "selected": DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Holo",
          "selected-default": true
        },
        {
          "title": "Material",
          "selected": DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material",
          "selected-default": false
        },
        {
          "title": "Material_2",
          "selected": DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "Material_2",
          "selected-default": false
        },
        {
          "title": "YouTube",
          "selected": DEFAULT_MEDIA_POPUP_MENU_STYLE_expflag == "YouTube",
          "selected-default": false
        }
        ],
        "lsitem": "DEFAULT_MEDIA_POPUP_MENU_STYLE"
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
      },
      {
        "type": "boolean",
        "title": "WEB_ENABLE_PIVOT_BAR",
        "subtitle": "",
        "pressed": WEB_ENABLE_PIVOT_BAR_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WEB_ENABLE_PIVOT_BAR"
      },
      {
        "type": "boolean",
        "title": "COMPACT_ITEM_LARGER_THUMBNAILS",
        "subtitle": "",
        "pressed": COMPACT_ITEM_LARGER_THUMBNAILS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "COMPACT_ITEM_LARGER_THUMBNAILS"
      },
      {
        "type": "boolean",
        "title": "PIVOT_DISABLE_SHADOW",
        "subtitle": "",
        "pressed": PIVOT_DISABLE_SHADOW_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "PIVOT_DISABLE_SHADOW"
      },
      {
        "type": "boolean",
        "title": "TIMESTATUS_NEW_STYLE",
        "subtitle": "",
        "pressed": TIMESTATUS_NEW_STYLE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "TIMESTATUS_NEW_STYLE"
      },
      {
        "type": "boolean",
        "title": "LIGHTER_BORDER_COLORS",
        "subtitle": "",
        "pressed": LIGHTER_BORDER_COLORS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "LIGHTER_BORDER_COLORS"
      },
      {
        "type": "boolean",
        "title": "HEADER_SHORTER_SIZE",
        "subtitle": "",
        "pressed": HEADER_SHORTER_SIZE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "HEADER_SHORTER_SIZE"
      },
      {
        "type": "boolean",
        "title": "HEADER_WHITE_BTN_COLORS",
        "subtitle": "",
        "pressed": HEADER_WHITE_BTN_COLORS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "HEADER_WHITE_BTN_COLORS"
      },
      {
        "type": "boolean",
        "title": "HEADER_RED_STYLE",
        "subtitle": "",
        "pressed": HEADER_RED_STYLE_expflag == "true",
        "pressed-default": true,
        "disabled": false,
        "lsitem": "HEADER_RED_STYLE"
      },
      {
        "type": "boolean",
        "title": "PIVOT_SHORTER_SIZE",
        "subtitle": "",
        "pressed": PIVOT_SHORTER_SIZE_expflag == "true",
        "pressed-default": true,
        "disabled": false,
        "lsitem": "PIVOT_SHORTER_SIZE"
      },
      {
        "type": "option-menu",
        "title": "DARK_THEME_HASH_COLOR",
        "subtitle": "",
        "options": [
        {
          "title": "#30",
          "selected": DARK_THEME_HASH_COLOR_expflag == "#30",
          "selected-default": true
        },
        {
          "title": "#28",
          "selected": DARK_THEME_HASH_COLOR_expflag == "#28",
          "selected-default": false
        },
        {
          "title": "#25",
          "selected": DARK_THEME_HASH_COLOR_expflag == "#25",
          "selected-default": false
        },
        {
          "title": "#21",
          "selected": DARK_THEME_HASH_COLOR_expflag == "#21",
          "selected-default": false
        }
        ],
        "lsitem": "DARK_THEME_HASH_COLOR"
      },
      {
        "type": "boolean",
        "title": "SUBSCRIBE_BTN_UPPERCASE",
        "subtitle": "",
        "pressed": SUBSCRIBE_BTN_UPPERCASE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "SUBSCRIBE_BTN_UPPERCASE"
      },
      {
        "type": "boolean",
        "title": "WATCH_USE_MTRL_ICONS",
        "subtitle": "",
        "pressed": WATCH_USE_MTRL_ICONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_USE_MTRL_ICONS"
      },
      {
        "type": "boolean",
        "title": "BTN_FONT_WEIGHT_500",
        "subtitle": "",
        "pressed": BTN_FONT_WEIGHT_500_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "BTN_FONT_WEIGHT_500"
      },
      {
        "type": "option-menu",
        "title": "WATCH_AUTONAV_BAR_STYLE",
        "subtitle": "",
        "options": [
        {
          "title": "2015",
          "selected": WATCH_AUTONAV_BAR_STYLE_expflag == "2015",
          "selected-default": true
        },
        {
          "title": "2016",
          "selected": WATCH_AUTONAV_BAR_STYLE_expflag == "2016",
          "selected-default": false
        }
        ],
        "lsitem": "WATCH_AUTONAV_BAR_STYLE"
      },
      {
        "type": "boolean",
        "title": "WATCH_AUTONAV_TITLE_USE_UPNEXT",
        "subtitle": "",
        "pressed": WATCH_AUTONAV_TITLE_USE_UPNEXT_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_AUTONAV_TITLE_USE_UPNEXT"
      },
      {
        "type": "boolean",
        "title": "APP_DEMATERIALIZE_UI",
        "subtitle": "",
        "pressed": APP_DEMATERIALIZE_UI_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_DEMATERIALIZE_UI"
      },
      {
        "type": "boolean",
        "title": "DISABLE_TAB_ICONS",
        "subtitle": "",
        "pressed": DISABLE_TAB_ICONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "DISABLE_TAB_ICONS"
      },
      {
        "type": "boolean",
        "title": "WATCH_ENABLE_NEW_UI",
        "subtitle": "",
        "pressed": WATCH_ENABLE_NEW_UI_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_ENABLE_NEW_UI"
      },
      {
        "type": "boolean",
        "title": "WATCH_TILTE_FONT_WEIGHT_500",
        "subtitle": "",
        "pressed": WATCH_TILTE_FONT_WEIGHT_500_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_TILTE_FONT_WEIGHT_500"
      },
      {
        "type": "boolean",
        "title": "USE_NEW_SUBSCRIBE_ICON",
        "subtitle": "",
        "pressed": USE_NEW_SUBSCRIBE_ICON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "USE_NEW_SUBSCRIBE_ICON"
      },
      {
        "type": "boolean",
        "title": "LIFT_PIVOT_BAR_FOR_PHONE",
        "subtitle": "",
        "pressed": LIFT_PIVOT_BAR_FOR_PHONE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "LIFT_PIVOT_BAR_FOR_PHONE"
      },
      {
        "type": "option-menu",
        "title": "PIVOT_SHRINK_SPACING",
        "subtitle": "",
        "options": [
          {
            "title": "Off",
            "selected": PIVOT_SHRINK_SPACING_expflag == "Off",
            "selected-default": true
          },
          {
            "title": "Manual (looks bad on portrait)",
            "selected": PIVOT_SHRINK_SPACING_expflag == "Manual (looks bad on portrait)",
            "selected-default": false
          },
          {
            "title": "Auto (Will turn on/off depending on rotation)",
            "selected": PIVOT_SHRINK_SPACING_expflag == "Auto (Will turn on/off depending on rotation)",
            "selected-default": true
          }
        ],
        "lsitem": "PIVOT_SHRINK_SPACING"
      },
      {
        "type": "boolean",
        "title": "PIVOT_HIDE_NOTIFICATIONS",
        "subtitle": "",
        "pressed": PIVOT_HIDE_NOTIFICATIONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "PIVOT_HIDE_NOTIFICATIONS"
      },
      {
        "type": "option-menu",
        "title": "PIVOT_NOTIFICATIONS_ICON_VARIANT",
        "subtitle": "",
        "options": [
          {
            "title": "Notifications",
            "selected": PIVOT_NOTIFICATIONS_ICON_VARIANT_expflag == "Notifications",
            "selected-default": true
          },
          {
            "title": "Activity",
            "selected": PIVOT_NOTIFICATIONS_ICON_VARIANT_expflag == "Activity",
            "selected-default": false
          },
          {
            "title": "Inbox",
            "selected": PIVOT_NOTIFICATIONS_ICON_VARIANT_expflag == "Inbox",
            "selected-default": false
          },
          {
            "title": "Shared",
            "selected": PIVOT_NOTIFICATIONS_ICON_VARIANT_expflag == "Shared",
            "selected-default": false
          }
        ],
        "lsitem": "PIVOT_NOTIFICATIONS_ICON_VARIANT"
      },
      {
        "type": "boolean",
        "title": "APP_HELVETICA_NEUE_FONT",
        "subtitle": "",
        "pressed": APP_HELVETICA_NEUE_FONT_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_HELVETICA_NEUE_FONT"
      },
      {
        "type": "boolean",
        "title": "APP_NEW_ERROR_SCREEN",
        "subtitle": "",
        "pressed": APP_NEW_ERROR_SCREEN_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_NEW_ERROR_SCREEN"
      },
      {
        "type": "text",
        "title": "APP_CUSTOM_INVIDIOUS_URL",
        "subtitle": "This loads your home page and comments. <small>which should update and not be static</small><br>If you are hosting an invidious instance put it here<br>You should change CORS policy if you own your instance, otherwise use a CORS redirector. <small>If you can use a CORS disabler extension, you can also remove the starting proxy url, it will make it faster.</small>><br>Clear the text box to reset the url<br><small>If you want to setup an invidious instance just for YTm15, it is not worth it, it is complicated to setup and will take all of your computer's resources.</small>",
        "value": "https://api.codetabs.com/v1/proxy?quest=https://y.com.sb/",
        "placeholder": "",
        "disabled": false,
        "lsitem": "APP_CUSTOM_INVIDIOUS_URL"
      },
      {
        "type": "boolean",
        "title": "APP_DONT_AUTH_TO_INVIDIOUS",
        "subtitle": "",
        "pressed": APP_DONT_AUTH_TO_INVIDIOUS_expflag == "true",
        "pressed-default": true,
        "disabled": false,
        "lsitem": "APP_DONT_AUTH_TO_INVIDIOUS"
      },
      {
        "type": "boolean",
        "title": "APP_NO_ANDROID_ANIMATIONS",
        "subtitle": "",
        "pressed": APP_NO_ANDROID_ANIMATIONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_NO_ANDROID_ANIMATIONS"
      },
      {
        "type": "boolean",
        "title": "WEB_IOS_SPINNER",
        "subtitle": "",
        "pressed": WEB_IOS_SPINNER_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WEB_IOS_SPINNER"
      },
      {
        "type": "boolean",
        "title": "HEADER_NO_SHADOW",
        "subtitle": "Fun fact: there was usually no shadow on non Retina (low-res) devices",
        "pressed": HEADER_NO_SHADOW_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "HEADER_NO_SHADOW"
      },
      {
        "type": "boolean",
        "title": "DARK_THEME_SEPERATE_BACKGROUND_COLOR",
        "subtitle": "",
        "pressed": DARK_THEME_SEPERATE_BACKGROUND_COLOR_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "DARK_THEME_SEPERATE_BACKGROUND_COLOR"
      },
      {
        "type": "boolean",
        "title": "APP_UNDERLINE_BUTTONS",
        "subtitle": "",
        "pressed": APP_UNDERLINE_BUTTONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_UNDERLINE_BUTTONS"
      },
      {
        "type": "boolean",
        "title": "HEADER_CAST_BUTTON_AS_URL_BOX",
        "subtitle": "Copy a youtube link and press cast to open it in YTm15",
        "pressed": HEADER_CAST_BUTTON_AS_URL_BOX_expflag == "true",
        "pressed-default": true,
        "disabled": false,
        "lsitem": "HEADER_CAST_BUTTON_AS_URL_BOX"
      },
      {
        "type": "option-menu",
        "title": "HEADER_CAST_ALTERNATE_ICON",
        "subtitle": "",
        "options": [
          {
            "title": "Holo",
            "selected": HEADER_CAST_ALTERNATE_ICON_expflag == "Holo",
            "selected-default": true
          },
          {
            "title": "Material",
            "selected": HEADER_CAST_ALTERNATE_ICON_expflag == "Material",
            "selected-default": false
          },
          {
            "title": "Material_2",
            "selected": HEADER_CAST_ALTERNATE_ICON_expflag == "Material_2",
            "selected-default": false
          },
          {
            "title": "Camera",
            "selected": HEADER_CAST_ALTERNATE_ICON_expflag == "Camera",
            "selected-default": false
          }
        ],
        "lsitem": "HEADER_CAST_ALTERNATE_ICON"
      },
      {
        "type": "boolean",
        "title": "APP_STOP_TEXT_SELECTION",
        "subtitle": "",
        "pressed": APP_STOP_TEXT_SELECTION_expflag == "true",
        "pressed-default": true,
        "disabled": false,
        "lsitem": "APP_STOP_TEXT_SELECTION"
      },
      {
        "type": "boolean",
        "title": "WATCH_UI_NO_LINES",
        "subtitle": "",
        "pressed": WATCH_UI_NO_LINES_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_UI_NO_LINES"
      },
      {
        "type": "boolean",
        "title": "WATCH_COMMENT_SECTION_LEFT",
        "subtitle": "",
        "pressed": WATCH_COMMENT_SECTION_LEFT_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_COMMENT_SECTION_LEFT"
      },
      {
        "type": "boolean",
        "title": "WATCH_DOWNLOAD_BUTTON",
        "subtitle": "",
        "pressed": WATCH_DOWNLOAD_BUTTON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_DOWNLOAD_BUTTON"
      },
      {
        "type": "boolean",
        "title": "WATCH_SAVE_BUTTON",
        "subtitle": "Saved videos go to your Library on the homepage.",
        "pressed": WATCH_SAVE_BUTTON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_SAVE_BUTTON"
      },
      {
        "type": "boolean",
        "title": "WATCH_HIDE_SUBSCRIBE_ICON",
        "subtitle": "",
        "pressed": WATCH_HIDE_SUBSCRIBE_ICON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_HIDE_SUBSCRIBE_ICON"
      },
      {
        "type": "option-menu",
        "title": "HEADER_YOUTUBE_BRANDING",
        "subtitle": "",
        "options": [
          {
            "title": "YouTube",
            "selected": HEADER_YOUTUBE_BRANDING_expflag == "YouTube",
            "selected-default": true
          },
          {
            "title": "Red",
            "selected": HEADER_YOUTUBE_BRANDING_expflag == "Red",
            "selected-default": false
          },
          {
            "title": "Premium",
            "selected": HEADER_YOUTUBE_BRANDING_expflag == "Premium",
            "selected-default": false
          }
        ],
        "lsitem": "HEADER_YOUTUBE_BRANDING"
      },
      {
        "type": "boolean",
        "title": "WATCH_AUTOPLAY_SWITCH",
        "subtitle": "",
        "pressed": WATCH_AUTOPLAY_SWITCH_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_AUTOPLAY_SWITCH"
      },
      {
        "type": "boolean",
        "title": "HEADER_USE_ACCOUNT_ICON",
        "subtitle": "",
        "pressed": HEADER_USE_ACCOUNT_ICON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "HEADER_USE_ACCOUNT_ICON"
      },
      {
        "type": "text",
        "title": "HEADER_ACCOUNT_ICON_LINK",
        "subtitle": "",
        "value": "",
        "placeholder": "",
        "disabled": false,
        "lsitem": "HEADER_ACCOUNT_ICON_LINK"
      },
      {
        "type": "boolean",
        "title": "WATCH_SAVE_IS_ADD_TO",
        "subtitle": "",
        "pressed": WATCH_SAVE_IS_ADD_TO_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_SAVE_IS_ADD_TO"
      },
      {
        "type": "boolean",
        "title": "PIVOT_TRENDING_IS_EXPLORE",
        "subtitle": "",
        "pressed": PIVOT_TRENDING_IS_EXPLORE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "PIVOT_TRENDING_IS_EXPLORE"
      },
      {
        "type": "boolean",
        "title": "PIVOT_LIBRARY_UPDATED_ICON",
        "subtitle": "",
        "pressed": PIVOT_LIBRARY_UPDATED_ICON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "PIVOT_LIBRARY_UPDATED_ICON"
      },
      {
        "type": "boolean",
        "title": "WATCH_SAVE_UPDATED_ICON",
        "subtitle": "",
        "pressed": WATCH_SAVE_UPDATED_ICON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_SAVE_UPDATED_ICON"
      },
      {
        "type": "boolean",
        "title": "WATCH_COLLAPSABLE_COMMENTS",
        "subtitle": "",
        "pressed": WATCH_COLLAPSABLE_COMMENTS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_COLLAPSABLE_COMMENTS"
      },
      {
        "type": "boolean",
        "title": "HEADER_ALWAYS_SHOW_YOUTUBE_TITLE",
        "subtitle": "",
        "pressed": HEADER_ALWAYS_SHOW_YOUTUBE_TITLE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "HEADER_ALWAYS_SHOW_YOUTUBE_TITLE"
      },
      {
        "type": "boolean",
        "title": "HEADER_MENU_BUTTON",
        "subtitle": "",
        "pressed": HEADER_MENU_BUTTON_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "HEADER_MENU_BUTTON"
      },
      {
        "type": "boolean",
        "title": "APP_NO_INTERNET_POPUP_NEW_STYLE",
        "subtitle": "",
        "pressed": APP_NO_INTERNET_POPUP_NEW_STYLE_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_NO_INTERNET_POPUP_NEW_STYLE"
      },
      {
        "type": "boolean",
        "title": "WATCH_CONDENSE_COMMENT_BUTTONS",
        "subtitle": "",
        "pressed": WATCH_CONDENSE_COMMENT_BUTTONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_CONDENSE_COMMENT_BUTTONS"
      },
      {
        "type": "boolean",
        "title": "WATCH_FORMAT_LIKE_COUNTS",
        "subtitle": "",
        "pressed": WATCH_FORMAT_LIKE_COUNTS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_FORMAT_LIKE_COUNTS"
      },
      {
        "type": "boolean",
        "title": "APP_IOS_SYSTEM_FONT",
        "subtitle": "",
        "pressed": APP_IOS_SYSTEM_FONT_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "APP_IOS_SYSTEM_FONT"
      },
      {
        "type": "boolean",
        "title": "WATCH_CONDENSE_COMMUNITY_POST_BUTTONS",
        "subtitle": "",
        "pressed": WATCH_CONDENSE_COMMUNITY_POST_BUTTONS_expflag == "true",
        "pressed-default": false,
        "disabled": false,
        "lsitem": "WATCH_CONDENSE_COMMUNITY_POST_BUTTONS"
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
      renderSettingOptionMenu(settingsPage, item.title, optSubtitle, item.options, item.lsitem);
      };
      if (item.type == "text") {
        renderSettingText(settingsPage, item.title, item.subtitle, item.value, item.placeholder, item.disabled, item.lsitem);
      }
      });
      }
    } else {
      ytm15settings.classList.remove("page-visible");
    };
    };

    settingsEventListenFunc();

    updateSettingsPage = function(){settingsEventListenFunc();};

    window.addEventListener("hashchange", function(event){
    settingsEventListenFunc();
    });
}