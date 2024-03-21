async function aboutYTm15() {
    const headerTitle = document.querySelector(".header-title");

    const headerBar = document.querySelector("ytm15-header-bar");

    const pageCont = document.querySelector('.page-container');
    pageCont.innerHTML = "";

    var spinner = document.querySelector(".spinner-container.full-height");
    spinner.removeAttribute("hidden");

    if (document.querySelector(".tab-bar")) {
    document.querySelector(".tab-bar").setAttribute("hidden", "");
    headerBar.classList.remove('has-tab-bar');
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
YouTube Mobile 2015/YTm15
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
This project has been ongoing since Feb 2024, in an effort to ensure that you can relive a nostalgic experience of what it was like to use the YouTube mobile app back in 2015.
<br>
<br>
YTm15 is based off of version 10 of the Android YT app
<br>
<br>
Please note that YTm15 as it is in its current state is unfinished, so a lot of things you'd expect to see in something like this (e.g. channel pages, search page, playlist page, and even watchpage) are not present/built in this app yet
</div>
    </div>
    </div>

    <div class="ap-shelf">
    <div class="ap-shelf-header">
    <h3>
APIs YTm15 makes use of
    </h3>
    </div>

    <div class="ap-shelf-content">
    <div class="ap-shelf-text">
-Invidious API (<a href="https://docs.invidious.io/api/">https://docs.invidious.io/api/</a>)
<br>
<br>
-YouTube Operational API (<a href="https://yt.lemnoslife.com/">https://yt.lemnoslife.com/</a>)
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
    </div>
    </div>
    </div>
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