function aboutYTm15() {
    const headerTitle = document.querySelector(".header-title");

    const headerBar = document.querySelector("ytm15-header-bar");

    const pageCont = document.querySelector('.page-container');
    pageCont.innerHTML = "";

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    document.querySelector(".tab-bar").setAttribute("isChannel", "false");
    headerBar.classList.remove('has-tab-bar');
    document.querySelector(".tab-bar").innerHTML = "";
    };

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.setAttribute("hidden", "");

    headerTitle.setAttribute("aria-label", "About 2015YouTube");
    headerTitle.textContent = "About 2015YouTube";

    const page = document.createElement("page");
    page.classList.add('aboutYTm15');

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "");

    const aboutPage = document.createElement("ytm15-about-page");

    const section = document.createElement("div");
    section.classList.add('section-list');

    const sectLazyList = document.createElement("div");
    sectLazyList.classList.add('lazy-list');
    sectLazyList.innerHTML = `
    <div class="item-section">
    <div class="lazy-list no-animation">
    <div class="about-page-heading">
YouTube Mobile 2015/YTm15<img class="ytm15-logo ytm15-img" src="YouTube Mobile 2015 Logo (with shadow).png"></img>
    </div>
    <div class="about-page-subheading">
The 2015 YouTube experience, brought back to your smart device
    </div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
What is YTm15/YouTube Mobile 2015?
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">YouTube Mobile 2015 (also known as YTm15) is a project of mine to rebuild the 2015 version of the interface of YouTube for mobile. The creator of YTm15 is Yacine Ghuloum.

This project has been ongoing since Feb 2024, in an effort to ensure that you can relive a nostalgic experience of what it was like to use the YouTube mobile app back in 2015. (or just for people who want to use YT with an older look ig)

YTm15 is based off of version 10 of the Android YT app
<!-- The line below was previously: "Please note that YTm15 as it is in its current state is unfinished, so a lot of things you'd expect to see in something like this (e.g. channel pages, search page, playlist page, and even watchpage) are not present/built/finished in this app yet" -->
Please note YTm15 as it is right now is currently in an unfinished state, so it's expected to find bugs and missing/unfinished features/pages/stuff here and there
</div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
Stuff YTm15 makes use of
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">APIs:
-Invidious API (<a href="https://docs.invidious.io/api/">https://docs.invidious.io/api/</a>)

-YouTube Operational API (<a href="https://yt.lemnoslife.com/">https://yt.lemnoslife.com/</a>)

-Return YouTube Dislike API (<a href="https://returnyoutubedislikeapi.com/swagger/">https://returnyoutubedislikeapi.com/swagger/</a>)

Player:
-Custom-built player made just for YTm15 (uses the Invidious API) (You can use YT's embed player as a fallback by going to "player 3-square menu" > "YT iframe player", in case the YTm15 player doesn't play)
(Formely used YouTube's embed player, and Invidious' embed player before that)
<!-- Polyfills:
-Polyfill.io (<a href="https://polyfill.io/">https://polyfill.io/</a>) (this line of text was removed on 31 Aug 2024 due to polyfill.io being shut down for some reason) -->
Other JS Plugins:
-Swipe Listener (<a href="https://github.com/umanghome/swipe-listener">https://github.com/umanghome/swipe-listener</a>)
</div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
Changelog
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">22 Feb 2024:
-Initial development started

15 Mar 2024:
-Initial github release

16 Mar 2024:
-Added an about page for YTm15
-Added a menu icon button next to media items
-CSS updates

20 - 21 Mar 2024:
-Started working on menus
-Made the menu button on the header work

21 - 22 Mar 2024:
-The searchpage and searchbar now gets the "query" parameter from the hash in the page URL (This was done so that the web app doesn't reload when switching from one page to the searchpage)

22 Mar 2024:
-The searchpage and searchbar now uses the "decodeURIComponent()" and "encodeURIComponent()" functions instead of "replaceAll()";
-Modified inputs' cancel buttons

23 Mar 2024:
-Slight JS changes
-YTm15 now uses a polyfill for multiple js functions older browsers might not support
-The "APIs YTm15 makes use of" section has been updated to not only list APIs, but other stuff too

30 Mar 2024:
-YT shorts' time statuses now display the actual length instead of a text saying "YT Short"
-CSS and JS tweaks
-Started working on channel pages a bit
-Added a footer to the about page (Aka this page)
-The homepage no-longer uses async functions to get data from the API it uses (This change was made to support older browsers)

31 Mar - 01 Apr 2024:
-Implemented search suggestions

02 Apr 2024:
-Now when you switch from one page to a non-existent one, the page becomes blank

04 Apr 2024:
-Media items are now rendered via the "renderMediaItem()" and "renderCompactMediaItem()" functions

06 Apr 2024:
-Started working on the searchpage
-Compact media items now have the ability to display its data based on what type of media it is (For example, if it's a video, it'll display video data, if it's a channel, it'll be channel data, if it's a playlist, you guessed it, playlist data, etc.)

07 Apr 2024:
-API data is now fetched from the "inv.tux.pizza" instance of Invidious
-Bug fixes with compact media items
-Slightly modified the menu's position in the header

08 - 09 Apr 2024:
-Implemented continuations to the search page
-CSS and JS updates
-Tweaked the player a bit
-Started working on channel pages' headers on their home tabs

11 Apr 2024:
-Added 3 more shelves to the homepage

12 Apr 2024:
-YTm15 now uses the embed player from the "invidious.private.coffee" instance of Invidious instead of the "inv.tux.pizza" one

14 Apr 2024:
-API data now no-longer gets logged to the console

18 Apr 2024:
-Finally made a banner for this page
-The about page's footer is no-longer nested within a lazy list and an item section
-YTm15 now uses the embed player from the "invidious.protokolla.fi" instance of Invidious (With DASH (Adaptive quality) and the "YouTube" player style enabled)

19 Apr 2024:
-Changed the embed player URL from "invidious.protokolla.fi" to "invidious.fi"
-Made a logo for YTm15

02 May 2024:
-YTm15 now uses YouTube's official embed player

03 - 06 May 2024:
-Finally started working on the watchpage
-The searchpage now uses "searchValueNotDecoded" for the API (this change was made to fix hashtag results on the searchpage since they weren't working before)

09 - 10 May 2024:
-Started working on the "video owner" thing for the watchpage
-The watchpage now uses the "items[0].status.license" thing from the API instead of "items[0].contentDetails.licensedContent" to detect if the video uses the "Creative Commons" license or the "YouTube" license

12 May 2024:
-Started working on the "recommended videos" thing for the watchpage

21 May 2024:
-What's a good 2015 YT mobile web-client without an.. you guessed it, ERA-ACCURATE PLAYER?! That's why I made one to finally implement into this project of mine

22 May 2024:
-Implemented the ability to use YT's iframe player as a fallback

23 May 2024:
-Pressing the retry button on errors now no-longer refresh the page entirely
-The trending page now gets the "trtype" parameter from its id
-Started working on channel pages' video page

24 May 2024:
-The header's js now uses "dataset.mode" instead of "setAttribute()" to set its dataset's mode

27 May 2024:
-Modified channel pages' refresh behavior when switching through tabs (Previously, it would show the loading animation on the middle, the tabs would disappear, and the title would become blank, then when the loading was finished, the changes in the header would be reverted and the loading thingy would disappear)

28 May 2024:
-YTm15 now makes use of a JS plugin called "swipe listener" (link can be found above), allowing for the user to swipe the player in the watchpage down for miniplayer mode, and up when in miniplayer mode to exit it

29 May 2024:
-A few slight JS updates related to the player's new swipe-ability

31 May 2024:
-The player's exit/collapse watch button is now an actual player controls button

04 - 05 Jun 2024:
-1st YTm15 summer update, Happy Summer Month Everybody! (Actual changes list is below)
-Started working on the settings page
-Added a bottom title to this page describing what YTm15 is in a short sentence

05 - 06 Jun 2024:
-YTm15 now uses the local storage API, allowing for implementation of experimental flags in the settings page
-Started working on toggle buttons
-Settings "options" have now been renamed to categories
-Added a dark theme
-Clicking the arrow next to a search suggestion now puts the text from said search suggestion into the search bar without searching for said thing
-The playlist icon is now an img icon

07 Jun 2024:
-Added a new experimental flag: WEB_CHANNELS_HEADER_NO_LEFT_MARGIN

09 Jun 2024:
-Added a new experimental flag: MENU_DISABLE_CANCEL_BUTTON
-The menus' cancel buttons are now hidden by default
-Started working on channel pages' about page

14 Jun 2024:
-Now when a shelf is empty, it'll say "This shelf is empty"
-The shelf's expand button now only shows when there's more than 3 items in the shelf's vertical list
-Changed holo menus' dark theme color from "#252525" to "#303030"

17 Jun 2024:
-Added 2 new header menu btns, one is called "Return home", which takes you back to the YTm15 app's homepage after clicking it, and the other is called "Refresh", which reloads the webpage entirely

19 Jun 2024:
-Started working on dropdown selects, sub-menus, and sections
-You can now sort videos by oldest, newest, and most-popular on channel pages

20 Jun 2024:
-Added external links to channel about pages (Only appears if the channel itself has external links in general)
-Changed the text string for the channel pages' home page
-The shorts and live pages on channels now work
-The searchbox dropdown now animates when you open and close search mode

25 Jun 2024:
-Started working on the playlist page (As of now, said page is in beta since it's not complete yet)

26 Jun 2024:
-Updated the "please note YTm15 is unfinished" text above (along with a few modifications to another text also above)

01 Jul 2024:
-1st update of July yippee! (actual updates are mentioned below)
-The videos, shorts, and live tabs are now combined into one, with the option to separate them again by enabling the newly-added "CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS" expflag

07 Jul 2024:
-The play button in the playlist page is now a red circle like in the actual app
-The miniplayer's min height in the "miniplayer-to-player" (beginning) and "player-to-miniplayer" (ending) animations is now 120px
-The watchpage title is now animated when opening the description
-Started working on channels' playlist pages

09 Jul 2024:
-Made it so that the videos tab on channel pages wouldn't hide itself if a channel has no videos (Disclaimer: this change only applies if the "CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS" expflag is disabled)

11 Jul 2024:
-(Finally) started working on channel pages' homepage, making channel pages (almost) complete

12 Jul 2024:
-Started working on the playlist page header's description

14 Jul 2024:
-The menu button is now no-longer visible for channel pages' compact channel media items

21 Jul 2024:
-Channel sub counts are now pulled from a different API, because the Invidious API's channel sub counts are always 0, regardless if said channel actually has any subs or not
-Added a channels tab to channel pages
-Fixed a bug that prevented channel pages from being reloaded when there's an error

23 Jul 2024:
-Done some slight changes to material ripples (originally tried updating them for all "has-ripple" elements to make them no-longer psuedo "::before" elements, but that failed)
-You can now click on the header of channel shelfs that feature channels to view all channels from said shelf

31 Jul 2024:
-Finally started working on comment sections (they're in beta for now)
a few hours later:
-Added channel names to comments along with like and reply counts
-Added a continuation item (spinner) to comment sections that acts as a placeholder for while it loads
-Comment sections now have continuations
-Playlist descriptions' white spaces are now pre-wrapped

01 Aug 2024:
-Now when you drag the miniplayer in the watchpage, frames of its animation play

02 Aug 2024:
-Made a dedicated page for the comment section
-Added a "view replies" button to comments with replies (will make it work soon since it currently does nothing as of this update being published)
-Added the pinned comment badge for pinned comments (will make it say the actual name of the uploader soon)

05 Aug 2024:
-Added a pivot bar which is accessible by enabling the newly-added expflag: "WEB_ENABLE_PIVOT_BAR"
-Added some more new expflags:
--"COMPACT_ITEM_LARGER_THUMBNAILS"
--"PIVOT_DISABLE_SHADOW"
--"TIMESTATUS_NEW_STYLE"
--"LIGHTER_BORDER_COLORS"

06 Aug 2024:
-Added 4 new expflags (updater's note: man, I got on a role with expflags recently, welp can't stop now):
--"HEADER_SHORTER_SIZE"
--"HEADER_WHITE_BTN_COLORS"
--"HEADER_RED_STYLE" (enabled by default)
--"PIVOT_SHORTER_SIZE"

15 Aug 2024:
-Started working on dialogs
-Made settings option menus work

16 Aug 2024:
-Added 2 new expflags:
--"DARK_THEME_HASH_COLOR" (with options)
--"SUBSCRIBE_BTN_UPPERCASE"
-Comments now support dark theme
-The watchpage now uses the "invidious.jing.rocks" instance instead of "inv.tux.pizza" (this change was done to try and get rid of the "this helps protect our community" thing that's been popping up on certain invidious instances' watchpages recently)

17 Aug 2024:
-Channel pages now use the "invidious.jing.rocks" instance in order to fix the missing banner bug

18 Aug 2024:
-Added a new expflag: "WATCH_USE_MTRL_ICONS"

20 Aug 2024:
-The player's previous and next buttons are now shown and now work (however, the previous video url gets resetted when you click on a video item)

21 Aug 2024:
-Added a left margin to the player's progress container and modified the player dialog's top border a bit
-Changed the player's play-pause button look to the material-style one
-Changed the max-height of the player's title

22 Aug 2024:
-Disabled prev and next player buttons are now grey
-Added a new expflag: "BTN_FONT_WEIGHT_500"
-Added a new option to the "DARK_THEME_HASH_COLOR" expflag: "#21"

23 Aug 2024:
-Added 2 new expflags:
--"WATCH_AUTONAV_BAR_STYLE"
--"WATCH_AUTONAV_TITLE_USE_UPNEXT"
-The watchpage now collapses into a miniplayer when going to another page

23 - 24 Aug 2024:
-Added a new expflag:
--"APP_DEMATERIALIZE_UI" (basically reverts the whole interface to the 2013 - 2014 look. as of now it's incomplete so there's alot of css that needs to be added for this expflag)

27 Aug 2024:
-Made updates to the dematerialized/2013-style css and js

30 Aug 2024:
-The back button now has the YT logo in the 2013 UI
-Added a new expflag: "DISABLE_TAB_ICONS" (recommended to enable this when using YTm15 with the 2013 UI enabled)

31 Aug 2024:
-Added 2 new expflags:
--"WATCH_ENABLE_NEW_UI" (turns the watch UI into the 2017 one)
--"WATCH_TILTE_FONT_WEIGHT_500"
-YTm15 now uses the "white-space: pre-line" css for its shelves' texts instead of using "<br>" elements for each text

01 Sep 2024:
-YTm15 now globally uses the "invidious.jing.rocks" instance instead of "inv.tux.pizza" (since the tux pizza instance got shut down)

03 Sep 2024:
-The "inv.tux.pizza" instance is back up again so YTm15 now uses it instead of the jing.rocks one (however the jing.rocks one is still used for the watchpage)
-Timestamps in video descriptions and comments now work

04 Sep 2024:
-Added a new expflag: "USE_NEW_SUBSCRIBE_ICON"
    </div>
    </div>
    </div>
    <!-- <div class="item-section"> -->
    <!-- <div class="lazy-list no-animation"> -->
    <div class="about-page-bottom-title">
    <h3 class="ap-bottom-title-text">YTm15, a project to bring back YT's old mobile UI</h3>
    </div>
    <footer class="about-page-footer">
    <div class="ap-footer-content">
    <h3 class="ap-footer-text">Have any questions/issues/requests/bugs/feedback? <a href="https://github.com/ytm15/ytm15.github.io/issues">Visit our Github's issues page</a></h3>
    <h4 class="ap-footer-text small subhead" id="ap-footer-links">Links: <a href="https://ytm15.github.io/">Landing page</a> | <a href="https://github.com/ytm15/ytm15.github.io/">Github page</a></h4>
    <h4 class="ap-footer-text small subhead" id="ap-footer-copyright-and-copyleft-text">© 2015, YouTube and Google | (ↄ) 2024, Yacine's remakes</h4>
    <h4 class="ap-footer-text small subhead">Please note that YTm15 is not associated with, affiliated with, developed, approved, or endorsed by YouTube or Google!</h4>
    </div>
    </footer>
    <!-- </div> -->
    <!-- </div> -->
    `;
    section.appendChild(sectLazyList);

    if (APP_DEMATERIALIZE_UI_expflag == "true") {
      Array.from(sectLazyList.querySelectorAll(".ap-shelf")).forEach(function(item){
      item.classList.add('card');
      });
      Array.from(sectLazyList.querySelectorAll(".about-page-bottom-title")).forEach(function(item){
      item.classList.add('card');
      });
    }

    const parent = document.querySelector(".page-container");
    parent.appendChild(page);
    page.appendChild(tabContainer);
    tabContainer.appendChild(tabContent);
    tabContent.appendChild(aboutPage);
    aboutPage.appendChild(section);

    var title = document.querySelector("title");
    title.textContent = 'About - 2015YouTube';
}