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
    <div class="ap-shelf-text">
YouTube Mobile 2015 (also known as YTm15) is a project of mine to rebuild the 2015 version of the interface of YouTube for mobile. The creator of YTm15 is Yacine Ghuloum.
<br>
<br>
This project has been ongoing since Feb 2024, in an effort to ensure that you can relive a nostalgic experience of what it was like to use the YouTube mobile app back in 2015. (or just for people who want to use YT with an older look ig)
<br>
<br>
YTm15 is based off of version 10 of the Android YT app
<br>
<br>
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
    <div class="ap-shelf-text">
APIs:
<br>
-Invidious API (<a href="https://docs.invidious.io/api/">https://docs.invidious.io/api/</a>)
<br>
<br>
-YouTube Operational API (<a href="https://yt.lemnoslife.com/">https://yt.lemnoslife.com/</a>)
<br>
<br>
-Return YouTube Dislike API (<a href="https://returnyoutubedislikeapi.com/swagger/">https://returnyoutubedislikeapi.com/swagger/</a>)
<br><br>
Player:
<br>
-Custom-built player made just for YTm15 (uses the Invidious API) (You can use YT's embed player as a fallback by going to "player 3-square menu" > "YT iframe player", in case the YTm15 player doesn't play)
<br>
(Formely used YouTube's embed player, and Invidious' embed player before that)
<br>
<br>
Polyfills:
<br>
-Polyfill.io (<a href="https://polyfill.io/">https://polyfill.io/</a>)
<br><br>
Other JS Plugins:
<br>
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
    <div class="ap-shelf-text">
22 Feb 2024:
<br>
-Initial development started
<br>
<br>
15 Mar 2024:
<br>
-Initial github release
<br>
<br>
16 Mar 2024:
<br>
-Added an about page for YTm15
<br>
-Added a menu icon button next to media items
<br>
-CSS updates
<br>
<br>
20 - 21 Mar 2024:
<br>
-Started working on menus
<br>
-Made the menu button on the header work
<br>
<br>
21 - 22 Mar 2024:
<br>
-The searchpage and searchbar now gets the "query" parameter from the hash in the page URL (This was done so that the web app doesn't reload when switching from one page to the searchpage)
<br>
<br>
22 Mar 2024:
<br>
-The searchpage and searchbar now uses the "decodeURIComponent()" and "encodeURIComponent()" functions instead of "replaceAll()";
<br>
-Modified inputs' cancel buttons
<br>
<br>
23 Mar 2024:
<br>
-Slight JS changes
<br>
-YTm15 now uses a polyfill for multiple js functions older browsers might not support
<br>
-The "APIs YTm15 makes use of" section has been updated to not only list APIs, but other stuff too
<br>
<br>
30 Mar 2024:
<br>
-YT shorts' time statuses now display the actual length instead of a text saying "YT Short"
<br>
-CSS and JS tweaks
<br>
-Started working on channel pages a bit
<br>
-Added a footer to the about page (Aka this page)
<br>
-The homepage no-longer uses async functions to get data from the API it uses (This change was made to support older browsers)
<br>
<br>
31 Mar - 01 Apr 2024:
<br>
-Implemented search suggestions
<br>
<br>
02 Apr 2024:
<br>
-Now when you switch from one page to a non-existent one, the page becomes blank
<br>
<br>
04 Apr 2024:
<br>
-Media items are now rendered via the "renderMediaItem()" and "renderCompactMediaItem()" functions
<br>
<br>
06 Apr 2024:
<br>
-Started working on the searchpage
<br>
-Compact media items now have the ability to display its data based on what type of media it is (For example, if it's a video, it'll display video data, if it's a channel, it'll be channel data, if it's a playlist, you guessed it, playlist data, etc.)
<br>
<br>
07 Apr 2024:
<br>
-API data is now fetched from the "inv.tux.pizza" instance of Invidious
<br>
-Bug fixes with compact media items
<br>
-Slightly modified the menu's position in the header
<br>
<br>
08 - 09 Apr 2024:
<br>
-Implemented continuations to the search page
<br>
-CSS and JS updates
<br>
-Tweaked the player a bit
<br>
-Started working on channel pages' headers on their home tabs
<br>
<br>
11 Apr 2024:
<br>
-Added 3 more shelves to the homepage
<br>
<br>
12 Apr 2024:
<br>
-YTm15 now uses the embed player from the "invidious.private.coffee" instance of Invidious instead of the "inv.tux.pizza" one
<br>
<br>
14 Apr 2024:
<br>
-API data now no-longer gets logged to the console
<br><br>
18 Apr 2024:
<br>
-Finally made a banner for this page
<br>
-The about page's footer is no-longer nested within a lazy list and an item section
<br>
-YTm15 now uses the embed player from the "invidious.protokolla.fi" instance of Invidious (With DASH (Adaptive quality) and the "YouTube" player style enabled)
<br><br>
19 Apr 2024:
<br>
-Changed the embed player URL from "invidious.protokolla.fi" to "invidious.fi"
<br>
-Made a logo for YTm15
<br><br>
02 May 2024:
<br>
-YTm15 now uses YouTube's official embed player
<br><br>
03 - 06 May 2024:
<br>
-Finally started working on the watchpage
<br>
-The searchpage now uses "searchValueNotDecoded" for the API (this change was made to fix hashtag results on the searchpage since they weren't working before)
<br><br>
09 - 10 May 2024:
<br>
-Started working on the "video owner" thing for the watchpage
<br>
-The watchpage now uses the "items[0].status.license" thing from the API instead of "items[0].contentDetails.licensedContent" to detect if the video uses the "Creative Commons" license or the "YouTube" license
<br><br>
12 May 2024:
<br>
-Started working on the "recommended videos" thing for the watchpage
<br><br>
21 May 2024:
<br>
-What's a good 2015 YT mobile web-client without an.. you guessed it, ERA-ACCURATE PLAYER?! That's why I made one to finally implement into this project of mine
<br><br>
22 May 2024:
<br>
-Implemented the ability to use YT's iframe player as a fallback
<br><br>
23 May 2024:
<br>
-Pressing the retry button on errors now no-longer refresh the page entirely
<br>
-The trending page now gets the "trtype" parameter from its id
<br>
-Started working on channel pages' video page
<br><br>
24 May 2024:
<br>
-The header's js now uses "dataset.mode" instead of "setAttribute()" to set its dataset's mode
<br><br>
27 May 2024:
<br>
-Modified channel pages' refresh behavior when switching through tabs (Previously, it would show the loading animation on the middle, the tabs would disappear, and the title would become blank, then when the loading was finished, the changes in the header would be reverted and the loading thingy would disappear)
<br><br>
28 May 2024:
<br>
-YTm15 now makes use of a JS plugin called "swipe listener" (link can be found above), allowing for the user to swipe the player in the watchpage down for miniplayer mode, and up when in miniplayer mode to exit it
<br><br>
29 May 2024:
<br>
-A few slight JS updates related to the player's new swipe-ability
<br><br>
31 May 2024:
<br>
-The player's exit/collapse watch button is now an actual player controls button
<br><br>
04 - 05 Jun 2024:
<br>
-1st YTm15 summer update, Happy Summer Month Everybody! (Actual changes list is below)
<br>
-Started working on the settings page
<br>
-Added a bottom title to this page describing what YTm15 is in a short sentence
<br><br>
05 - 06 Jun 2024:
<br>
-YTm15 now uses the local storage API, allowing for implementation of experimental flags in the settings page
<br>
-Started working on toggle buttons
<br>
-Settings "options" have now been renamed to categories
<br>
-Added a dark theme
<br>
-Clicking the arrow next to a search suggestion now puts the text from said search suggestion into the search bar without searching for said thing
<br>
-The playlist icon is now an img icon
<br><br>
07 Jun 2024:
<br>
-Added a new experimental flag: WEB_CHANNELS_HEADER_NO_LEFT_MARGIN
<br><br>
09 Jun 2024:
<br>
-Added a new experimental flag: MENU_DISABLE_CANCEL_BUTTON
<br>
-The menus' cancel buttons are now hidden by default
<br>
-Started working on channel pages' about page
<br><br>
14 Jun 2024:
<br>
-Now when a shelf is empty, it'll say "This shelf is empty"
<br>
-The shelf's expand button now only shows when there's more than 3 items in the shelf's vertical list
<br>
-Changed holo menus' dark theme color from "#252525" to "#303030"
<br><br>
17 Jun 2024:
<br>
-Added 2 new header menu btns, one is called "Return home", which takes you back to the YTm15 app's homepage after clicking it, and the other is called "Refresh", which reloads the webpage entirely
<br><br>
19 Jun 2024:
<br>
-Started working on dropdown selects, sub-menus, and sections
<br>
-You can now sort videos by oldest, newest, and most-popular on channel pages
<br><br>
20 Jun 2024:
<br>
-Added external links to channel about pages (Only appears if the channel itself has external links in general)
<br>
-Changed the text string for the channel pages' home page
<br>
-The shorts and live pages on channels now work
<br>
-The searchbox dropdown now animates when you open and close search mode
<br><br>
25 Jun 2024:
<br>
-Started working on the playlist page (As of now, said page is in beta since it's not complete yet)
<br><br>
26 Jun 2024:
<br>
-Updated the "please note YTm15 is unfinished" text above (along with a few modifications to another text also above)
<br><br>
01 Jul 2024:
<br>
-1st update of July yippee! (actual updates are mentioned below)
<br>
-The videos, shorts, and live tabs are now combined into one, with the option to separate them again by enabling the newly-added "CHANNELS_SEPARATE_VIDS_SHORTS_LIVE_TABS" expflag
<br><br>
07 Jul 2024:
<br>
-The play button in the playlist page is now a red circle like in the actual app
<br>
-The miniplayer's min height in the "miniplayer-to-player" (beginning) and "player-to-miniplayer" (ending) animations is now 120px
<br>
-The watchpage title is now animated when opening the description
<br>
-Started working on channels' playlist pages
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

    const parent = document.querySelector(".page-container");
    parent.appendChild(page);
    page.appendChild(tabContainer);
    tabContainer.appendChild(tabContent);
    tabContent.appendChild(aboutPage);
    aboutPage.appendChild(section);

    var title = document.querySelector("title");
    title.textContent = 'About - 2015YouTube';
}