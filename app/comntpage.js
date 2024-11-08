function commentsPage(){
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

    headerTitle.setAttribute("aria-label", Comments_text_string);
    headerTitle.textContent = Comments_text_string;

    const page = document.createElement("page");
    page.classList.add('commentsPage');

    const tabContainer = document.createElement("div");
    tabContainer.classList.add('tabs-content-container');

    const tabContent = document.createElement("div");
    tabContent.classList.add('tab-content');
    tabContent.setAttribute("tab-identifier", "");

    const section = document.createElement("div");
    section.classList.add('section-list');

    const sectLazyList = document.createElement("div");
    sectLazyList.classList.add('lazy-list');

    /* renderCommentSection(sectLazyList, "video", window.location.hash.split("?").slice(1, 2).toString().split("&").slice(0, 1).toString().split("v").slice(1, 2).toString().split("=").slice(1, 2).toString(), true, window.location.hash.split("?").slice(1, 2).toString().split("&").slice(1, 2).toString().split("id").slice(1, 2).toString().split("=").slice(1, 2).toString(), window.location.hash.split("?").slice(1, 2).toString().split("&").slice(2, 3).toString().split("continuation").slice(1, 2).toString().split("=").slice(1, 2).toString()); */
    renderCommentSection(sectLazyList, "video", window.location.hash.split("?").slice(1, 2).toString().split("&").slice(0, 1).toString().split("v=").slice(1, 2).toString(), true, window.location.hash.split("?").slice(1, 2).toString().split("&").slice(1, 2).toString().split("id").slice(1, 2).toString().split("=").slice(1, 2).toString(), window.location.hash.split("?").slice(1, 2).toString().split("&").slice(2, 3).toString().split("continuation").slice(1, 2).toString().split("=").slice(1, 2).toString());

    section.appendChild(sectLazyList);

    pageCont.appendChild(page);
    page.appendChild(tabContainer);
    tabContainer.appendChild(tabContent);
    tabContent.appendChild(section);

    var title = document.querySelector("title");
    title.textContent = Comments_text_string + ' - 2015YouTube';

    if (window.location.hash.split("?").slice(1, 2).toString().split("&").slice(1, 2).toString().split("id").slice(1, 2).toString().split("=").slice(1, 2).toString() !== "" && window.location.hash.split("?").slice(1, 2).toString().split("&").slice(1, 2).toString().split("id").slice(1, 2).toString().split("=").slice(1, 2).toString() !== undefined) {
    title.textContent = Replies_text_string + ' - 2015YouTube';
    headerTitle.setAttribute("aria-label", Replies_text_string);
    headerTitle.textContent = Replies_text_string;
    }
};