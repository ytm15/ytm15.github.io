function renderWatchPage(parent) {
    parent.innerHTML = "";
    const spinner = document.querySelector(".spinner-container.full-height");
    const contItem = document.createElement("div");
    contItem.classList.add("continuation-item");
    const spinnerClone = spinner.cloneNode(true);
    spinnerClone.classList.remove("full-height");
    spinnerClone.removeAttribute("hidden");
    contItem.appendChild(spinnerClone);

    parent.appendChild(contItem);

    document.body.classList.add("has-watchpage");

    insertYTmPlayer(playerCont2);

    const getWatchData = new XMLHttpRequest();
    getWatchData.open('GET', APIbaseURL + 'api/v1/videos/' + playerVideoId, true);

    getWatchData.onerror = function(event) {
    console.error("An error occurred with this operation (" + getWatchData.status + ")");

    contItem.remove();

    const error = document.createElement("div");
    error.classList.add('error-container');
    error.innerHTML = `<div class="error-content">
<img class="error-icon ytm15-img" src="alert_error.png"></img>
<span class="error-text">There was an error connecting to the server</span>
</div>
<div class="material-button-container" data-style="grey_filled" data-icon-only="false" is-busy="false" aria-busy="false" disabled="false"><button class="material-button has-shadow" aria-label="Retry"><div class="button-text">Retry</div></button></div>`;
    if (JSON.parse(getWatchData.response)) {
    const data = JSON.parse(getWatchData.response);
    if (data.error) {
    error.querySelector(".error-text").textContent = data.error;
    }
    }
    const errorBtn = error.querySelector("button");
    errorBtn.onclick = function(){renderWatchPage(parent)};
    parent.appendChild(error);
    return;
    };

    getWatchData.send();

    getWatchData.onload = function() {
    if (getWatchData.status === 200) {
    const data = JSON.parse(getWatchData.response);

    contItem.remove();

    const scwnr = document.createElement("div");
    scwnr.classList.add("ytm15-single-column-watch-next-results", "watch-content");
    const itemSectMetadata = document.createElement("div");
    itemSectMetadata.classList.add("item-section", "watch-next-results-content");
    itemSectMetadata.dataset.contentType = "result";
    itemSectMetadata.setAttribute("section-identifier", "video-metadata");
    itemSectMetadata.innerHTML = `<div class="lazy-list no-animation"></div>`;
    scwnr.appendChild(itemSectMetadata);
    const videoMetadata = document.createElement("ytm15-video-metadata");
    videoMetadata.classList.add("item");
    itemSectMetadata.querySelector(".lazy-list").appendChild(videoMetadata);
    const metadataHeader = document.createElement("button");
    metadataHeader.classList.add("video-metadata-header", "has-ripple");
    metadataHeader.ariaExpanded = "false";
    metadataHeader.setAttribute("aria-expanded", "false");
    videoMetadata.appendChild(metadataHeader);
    const standaloneBadge = document.createElement("div");
    standaloneBadge.classList.add("video-metadata-standalone-badge");
    standaloneBadge.innerHTML = `<div class="standalone-badge-supported top-standalone-badge">
<div class="standalone-collection-badge-container">
<ytm15-badge class="standalone-collection-badge" data-type="STYLE_PLAIN"></ytm15-badge>
</div>
    </div>`;

    // Original code was taken from: https://stackoverflow.com/a/13554264 (credit goes to them). Its use here is to extract hashtags from the video's description and place them in the standalone badge element
    var s = data.description;
    var re = /(?:^|\W)#(\w+)(?!\w)/g, match, matches = [];
    while (match = re.exec(s)) {
      matches.push(match[1]);
    }
    /* console.log(matches); */
    // End of code

    matches.forEach(function(item){
      var slColBadge = standaloneBadge.querySelector(".standalone-collection-badge");
      slColBadge.innerHTML += `<a href="#/results?query=%23${encodeURIComponent(item)}">#${item}</a>`;
    });

    /* if (matches.toString() !== "[]") */ 
    if (matches !== "") {
    var slColBadge = standaloneBadge.querySelector(".standalone-collection-badge");
    var slColBadges = slColBadge.querySelectorAll("a");
    Array.from(slColBadges).forEach(function(item){
    item.onclick = function(){
    exitWatch.onclick();
    }
    });
    };
    /* console.log(data); */

    metadataHeader.appendChild(standaloneBadge);
    const metaHeaderCont = document.createElement("div");
    metaHeaderCont.classList.add("video-metadata-header-content");
    metadataHeader.appendChild(metaHeaderCont);
    const metaTitleCont = document.createElement("div");
    metaTitleCont.classList.add("video-metadata-title-and-badges");
    metaHeaderCont.appendChild(metaTitleCont);
    const metaTitleCont2 = document.createElement("div");
    metaTitleCont2.classList.add("video-metadata-title-container");
    metaTitleCont.appendChild(metaTitleCont2);
    const metaTitle = document.createElement("h2");
    metaTitle.classList.add("video-metadata-title");
    metaTitle.innerHTML = data.title;
    metaTitleCont2.appendChild(metaTitle);
    var badgesData
    badgesData = {
    "badges": [

    ] 
    };
    if (data.isListed == false) {
    badgesData = {
    "badges": [
      {
        "title": "Unlisted",
        "iconPath": "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z",
        "iconName": "unlisted"
      }
    ] 
    };
    }
    const badgeCont = document.createElement("div");
    badgeCont.classList.add("badge-supported");
    if (badgesData.badges.length == "0") {
    badgeCont.ariaLabel = "hidden";
    }
    metaTitleCont.appendChild(badgeCont);
    badgesData.badges.forEach(function(item){
      const metaBadge = document.createElement("div");
      metaBadge.classList.add("metadata-badge-container");
      metaBadge.innerHTML = `<ytm15-badge class="metadata-badge soft-background typography-body-1b" data-type="BADGE_STYLE_TYPE_SIMPLE">
<ytm15-icon class="${item.iconName}"><svg viewBox="0 0 24 24" fill=""><path d="${item.iconPath}"></path></svg></ytm15-icon> ${item.title}
</ytm15-badge>`;
      badgeCont.appendChild(metaBadge);
    });
    const viewCount = document.createElement("div");
    viewCount.classList.add("video-metadata-view-count");
    viewCount.innerHTML = `<span class="secondary-text" role="text" aria-label="${data.viewCount.toLocaleString() + " views"}">${data.viewCount.toLocaleString() + " views"}</span>`;
    metaTitleCont.appendChild(viewCount);

    metaHeaderCont.innerHTML = metaHeaderCont.innerHTML + `<ytm15-icon class="expand-icon" role="button" aria-label="Show more" aria-expanded="false"><svg viewBox="0 0 24 24" fill=""><path d="M7,10L12,15L17,10H7Z"></path></svg></ytm15-icon>`;

    const metadataDescBox = document.createElement("div");
    metadataDescBox.classList.add("video-metadata-description-box");
    videoMetadata.appendChild(metadataDescBox);

    const videoOwner = document.createElement("div");
    videoOwner.classList.add("ytm15-video-owner");

    metadataHeader.onclick = function(){
    if (metadataHeader.ariaExpanded == "false") {
    metadataHeader.ariaExpanded = "true";
    metadataHeader.setAttribute("aria-expanded", "true");
    metaHeaderCont.querySelector("ytm15-icon").ariaExpanded = "true";
    metaHeaderCont.querySelector("ytm15-icon").ariaLabel = "Show less";
    /* metaHeaderCont.querySelector("ytm15-icon.expand-icon").classList.replace("expand-icon", "collapse-icon"); */
    metaHeaderCont.querySelector("ytm15-icon.expand-icon").classList.add("collapse-icon");
    metaHeaderCont.querySelector("ytm15-icon.expand-icon").classList.remove("expand-icon");
    standaloneBadge.classList.add("expanded");
    standaloneBadge.querySelector(".standalone-badge-supported").setAttribute("style", "max-height: " + standaloneBadge.querySelector(".standalone-badge-supported").scrollHeight + "px");
    metadataDescBox.setAttribute("style", "max-height: " + metadataDescBox.scrollHeight + "px");
    videoOwner.classList.add("expanded");
    } else if (metadataHeader.ariaExpanded == "true") {
    metadataHeader.ariaExpanded = "false";
    metadataHeader.setAttribute("aria-expanded", "false");
    metaHeaderCont.querySelector("ytm15-icon").ariaExpanded = "false";
    metaHeaderCont.querySelector("ytm15-icon").ariaLabel = "Show more";
    /* metaHeaderCont.querySelector("ytm15-icon.collapse-icon").classList.replace("collapse-icon", "expand-icon"); */
    metaHeaderCont.querySelector("ytm15-icon.collapse-icon").classList.add("expand-icon");
    metaHeaderCont.querySelector("ytm15-icon.collapse-icon").classList.remove("collapse-icon");
    standaloneBadge.classList.remove("expanded");
    standaloneBadge.querySelector(".standalone-badge-supported").setAttribute("style", "");
    metadataDescBox.setAttribute("style", "");
    videoOwner.classList.remove("expanded");
    };
    };

    const descInfo = document.createElement("div");
    descInfo.classList.add("video-metadata-info", "description-container");
    descInfo.innerHTML = `<div class="video-published-date"><span style="font-style:italic;opacity:.8;">Retrieving published date...</span></div>
<div class="video-metadata-description user-text">${data.descriptionHtml}</div>`;
    const getPublishDate = new XMLHttpRequest();
    getPublishDate.open('GET', 'https://yt.lemnoslife.com/noKey/videos?part=contentDetails,id,liveStreamingDetails,localizations,player,recordingDetails,snippet,statistics,status,topicDetails&id=' + playerVideoId, true);
 
    getPublishDate.send();
 
    getPublishDate.onload = function(){
      if (getPublishDate.status === 200) {
      const response = JSON.parse(getPublishDate.response);
      const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      };
      const event = new Date(response.items[0].snippet.publishedAt).toLocaleDateString(undefined, options);
      descInfo.querySelector(".video-published-date").innerHTML = "Published on " + event;
      } else {
      console.error("An error occurred with this operation (" + getPublishDate.status + ")");
      }
    };
    metadataDescBox.appendChild(descInfo);
    if (descInfo.querySelectorAll('[href*="hashtag"]').toString() !== "") {
    Array.from(descInfo.querySelectorAll('[href*="hashtag"]')).forEach(function(item){
    item.href = "#" + item.getAttribute("href");
    item.onclick = function(){
    exitWatch.onclick();
    };
    });
    };
    const descRow = document.createElement("div");
    descRow.classList.add("video-metadata-info", "metadata-row-box");
    descRow.innerHTML = `<div class="metadata-row-container">
<div class="metadata-row">
<span class="metadata-row-title">Category</span><span class="metadata-row-items"><span class="metadata-row-item">${data.genre}</span></span>
</div>
</div>`;

    const getLicense = new XMLHttpRequest();
    getLicense.open('GET', 'https://yt.lemnoslife.com/noKey/videos?part=contentDetails,id,liveStreamingDetails,localizations,player,recordingDetails,snippet,statistics,status,topicDetails&id=' + playerVideoId, true);
 
    getLicense.send();
 
    getLicense.onload = function(){
      if (getLicense.status === 200) {
      const response = JSON.parse(getLicense.response);
      licenseText = "Standard YouTube License";
      /* if (response.items[0].contentDetails.licensedContent == false) */ 
      if (response.items[0].status.license == "creativeCommon") {
      licenseText = "Creative Commons Attribution License (Reuse allowed)";
      }
      descRow.querySelector(".metadata-row-container").innerHTML += `<div class="metadata-row">
<span class="metadata-row-title">License</span><span class="metadata-row-items"><span class="metadata-row-item">${licenseText}</span></span>
</div>`;
      } else {
      console.error("An error occurred with this operation (" + getLicense.status + ")");
      }
    };

    const getMetadataMusic = new XMLHttpRequest();
    getMetadataMusic.open('GET', 'https://yt.lemnoslife.com/videos?part=id,status,contentDetails,music,musics,isPaidPromotion,isPremium,isMemberOnly,mostReplayed,qualities,chapters,isOriginal,isRestricted,snippet,activity&id=' + playerVideoId, true);
 
    getMetadataMusic.send();
 
    getMetadataMusic.onload = function(){
      if (getMetadataMusic.status === 200) {
      const response = JSON.parse(getMetadataMusic.response);
      if (response.items[0].musics.length !== 0) {
      descRow.querySelector(".metadata-row-container").innerHTML += `<div class="metadata-row-header">
<h3 class="metadata-row-header-content">${DescMusic_text_string}</h3>
</div>
<div class="metadata-row-header">
<a target="_blank" href="https://web.archive.org/web/20200605010227/https://support.google.com/youtube/answer/7680188">${LearnMore_text_string}</a>
</div>`;
      response.items[0].musics.forEach(function(item){
      descRow.querySelector(".metadata-row-container").innerHTML += `<div class="metadata-row">
<span class="metadata-row-title">${Song_text_string}</span><span class="metadata-row-items"><span class="metadata-row-item">${item.song}</span></span>
</div>
<div class="metadata-row">
<span class="metadata-row-title">${Artist_text_string}</span><span class="metadata-row-items"><span class="metadata-row-item">${item.artist}</span></span>
</div>
<div class="metadata-row">
<span class="metadata-row-title">${Album_text_string}</span><span class="metadata-row-items"><span class="metadata-row-item">${item.album}</span></span>
</div>`;
      });
      }
      } else {
      console.error("An error occurred with this operation (" + getMetadataMusic.status + ")");
      }
    };

    metadataDescBox.appendChild(descRow);

    const metadataActions = document.createElement("div");
    metadataActions.classList.add("video-metadata-actions");
    videoMetadata.appendChild(metadataActions);

    const mtrlBtnCont = document.createElement("div");
    mtrlBtnCont.classList.add("material-button-container", "compact", "like-button");
    mtrlBtnCont.dataset.style = "DEFAULT";
    mtrlBtnCont.dataset.iconOnly = "false";
    mtrlBtnCont.setAttribute("is-busy", "false");
    mtrlBtnCont.ariaBusy = "false";
    mtrlBtnCont.setAttribute("disabled", "false");
    videoMetadataLikeCount = data.likeCount.toLocaleString();
    videoMetadataLikeCountAL = "Like this video along with " + videoMetadataLikeCount + " other people";
    if (data.allowRatings == false) {
    videoMetadataLikeCount = "Like";
    videoMetadataLikeCountAL = "Like this video";
    };
    mtrlBtnCont.innerHTML = `<button class="material-button" aria-label="${videoMetadataLikeCountAL}" aria-pressed="false">
<div class="button-text">${videoMetadataLikeCount}</div><img class="ytm15-img-icon ytm15-img button-icon like-icon" src="ic_like.png"><img class="ytm15-img-icon ytm15-img button-icon like-icon pressed" src="ic_like_focus.png"></img>
</button>`

    const mtrlBtnContDislike = document.createElement("div");
    mtrlBtnContDislike.classList.add("material-button-container", "compact", "dislike-button");
    mtrlBtnContDislike.dataset.style = "DEFAULT";
    mtrlBtnContDislike.dataset.iconOnly = "false";
    mtrlBtnContDislike.setAttribute("is-busy", "false");
    mtrlBtnContDislike.ariaBusy = "false";
    mtrlBtnContDislike.setAttribute("disabled", "false");
    videoMetadataDislikeCount = "";
    videoMetadataDislikeCountAL = "Dislike this video along with " + videoMetadataDislikeCount + " other people";
    if (data.allowRatings == false) {
    videoMetadataDislikeCount = "Dislike";
    videoMetadataDislikeCountAL = "Dislike this video";
    };
    if (data.allowRatings == true) {
    const getDislikeCount = new XMLHttpRequest();
    getDislikeCount.open('GET', 'https://returnyoutubedislikeapi.com/Votes?videoId=' + playerVideoId, true);
 
    getDislikeCount.send();
 
    getDislikeCount.onload = function(){
      if (getDislikeCount.status === 200) {
      const response = JSON.parse(getDislikeCount.response);
      videoMetadataDislikeCount = response.dislikes.toLocaleString();
      videoMetadataDislikeCountAL = "Dislike this video along with " + videoMetadataDislikeCount + " other people";
      mtrlBtnContDislike.querySelector("button").ariaLabel = videoMetadataDislikeCountAL;
      mtrlBtnContDislike.querySelector(".button-text").innerHTML = videoMetadataDislikeCount;
      } else {
      console.error("An error occurred with this operation (" + getDislikeCount.status + ")");
      }
    };
    };
    mtrlBtnContDislike.innerHTML = `<button class="material-button" aria-label="${videoMetadataDislikeCountAL}" aria-pressed="false">
<div class="button-text">${videoMetadataDislikeCount}</div><img class="ytm15-img-icon ytm15-img button-icon dislike-icon" src="ic_dislike.png"><img class="ytm15-img-icon ytm15-img button-icon dislike-icon pressed" src="ic_dislike_focus.png"></img>
</button>`

    const mtrlBtnContShare = document.createElement("div");
    mtrlBtnContShare.classList.add("material-button-container", "compact", "share-button");
    mtrlBtnContShare.dataset.style = "DEFAULT";
    mtrlBtnContShare.dataset.iconOnly = "true";
    mtrlBtnContShare.setAttribute("is-busy", "false");
    mtrlBtnContShare.ariaBusy = "false";
    mtrlBtnContShare.setAttribute("disabled", "false");
    mtrlBtnContShare.innerHTML = `<button class="material-button" aria-label="${Share_text_string}" aria-pressed="false">
<div class="button-text">${Share_text_string}</div><img class="ytm15-img-icon ytm15-img button-icon share-icon" src="ic_share.png">
</button>`

    const actionsSpacer = document.createElement("div");
    actionsSpacer.classList.add("video-metadata-actions-spacer");

    metadataActions.appendChild(mtrlBtnCont);
    metadataActions.appendChild(mtrlBtnContDislike);
    metadataActions.appendChild(mtrlBtnContShare);
    metadataActions.appendChild(actionsSpacer);

    const W2ndHalf = document.createElement("div");
    W2ndHalf.classList.add("wnr-2nd-half", "watch-next-results-content");
    scwnr.appendChild(W2ndHalf);

    const itemSectOwner = document.createElement("div");
    itemSectOwner.classList.add("item-section", "watch-next-results-content");
    itemSectOwner.dataset.contentType = "result";
    itemSectOwner.setAttribute("section-identifier", "video-owner-metadata");
    itemSectOwner.innerHTML = `<div class="lazy-list no-animation"></div>`;
    W2ndHalf.appendChild(itemSectOwner);
    const videoMetadata2 = document.createElement("ytm15-video-metadata");
    videoMetadata2.classList.add("item");
    itemSectOwner.querySelector(".lazy-list").appendChild(videoMetadata2);

    videoOwner.innerHTML = `
<a class="video-owner-icon-and-title has-ripple" aria-label="Go to ${data.author}'s channel" href="#/channel/${data.authorId}">
<div class="profile-icon video-owner-prof-icon">
<img class="profile-img ytm15-img lazy" loading="lazy" src="${data.authorThumbnails[2].url}"></img>
</div>
<div class="video-owner-bylines">
<h3 class="video-owner-title">${data.author}</h3>
<div class="video-owner-sub-count subhead">${data.subCountText} subscribers</div>
</div>
</a>
<div class="video-owner-subscribe-button"></div>
`;
    renderSubscribeBtn(videoOwner.querySelector(".video-owner-subscribe-button"));
    Array.from(videoOwner.querySelectorAll("a")).forEach(function(item){
    item.onclick = function(){
    exitWatch.onclick();
    };
    });
    videoOwner.querySelector(".profile-img").onload = function(){videoOwner.querySelector(".profile-img").classList.add('loaded');}; 
    videoMetadata2.appendChild(videoOwner);

    const itemSectRelated = document.createElement("div");
    itemSectRelated.classList.add("item-section", "watch-next-results-content");
    itemSectRelated.dataset.contentType = "related";
    itemSectRelated.setAttribute("section-identifier", "related-media");
    itemSectRelated.innerHTML = `<div class="lazy-list no-animation"></div>`;
    W2ndHalf.appendChild(itemSectRelated);

    const autonavBar = document.createElement("div");
    autonavBar.classList.add("autonav-bar");
    autonavBar.innerHTML = `<h3 class="autonav-bar-title">${Suggestions_text_string}</h3>`;
    itemSectRelated.querySelector(".lazy-list").appendChild(autonavBar);

    data.recommendedVideos.forEach(function(item) {
        compMediaItemThumb = item.videoThumbnails[3].url;
        compMediaItemLength = item.lengthSeconds;
        compMediaItemTitle = item.title;
        compMediaItemAuthor = item.author;
        compMediaItemvidId = item.videoId;
        renderCompactMediaItem(itemSectRelated.querySelector(".lazy-list"), "related-media-lazy-list", compMediaItemvidId, compMediaItemThumb, compMediaItemLength, compMediaItemTitle, compMediaItemAuthor, item.authorId, "", item.viewCount, "video");
    });

    parent.innerHTML = "";

    parent.appendChild(scwnr);
    } else {
    getWatchData.onerror();
    }
    };
}