const video = document.createElement("video");
video.setAttribute("controls", "");
video.preload = "auto";
video.id = "player";
video.classList.add("player-api", "video-stream");

const videoPlayer = document.createElement("div");
videoPlayer.classList.add("video-player");
videoPlayer.id = video.id;
videoPlayer.setAttribute("tabindex", "-1");
const htmlVideoCont = document.createElement("div");
htmlVideoCont.ariaLabel = "2015YouTube Video Player";
htmlVideoCont.classList.add("html-video-container");
htmlVideoCont.id = "movie-player";
videoPlayer.appendChild(htmlVideoCont);
video.insertAdjacentElement('beforebegin', videoPlayer);
htmlVideoCont.appendChild(video);
video.removeAttribute("controls");
const controlsCont = document.createElement("div");
controlsCont.classList.add("player-controls-container");
leftArrowUnicode = '\u25C0';
rightArrowUnicode = '\u25B6';
controlsCont.innerHTML = `
<div class="player-poster" tabindex="-1"></div>
<div class="player-spinner-container">
<svg class="player-spinner" width="60px" height="60px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle class="path" fill="none" stroke-width="6" stroke-linecap="spuare" cx="33" cy="33" r="30"></circle>
</svg>
</div>
<div class="seek-notifications">
  <div class="video-rewind-notify rewind seek-notification">
    <div class="rewind-icon icon">
        <i class="left-triangle triangle" id="triangle-1">${leftArrowUnicode}</i>
        <i class="left-triangle triangle" id="triangle-2">${leftArrowUnicode}</i>
        <i class="left-triangle triangle" id="triangle-3">${leftArrowUnicode}</i>
        <span class="rewind">10 seconds</span>
    </div>
  </div>
  <div class="video-forward-notify forward seek-notification">
    <div class="forward-icon icon">
        <i class="right-triangle triangle" id="triangle-3">${rightArrowUnicode}</i>
        <i class="right-triangle triangle" id="triangle-2">${rightArrowUnicode}</i>
        <i class="right-triangle triangle" id="triangle-1">${rightArrowUnicode}</i>
        <span class="forward">10 seconds</span>
    </div>
  </div>
</div>
<div class="player-controls-overlay">
<div class="player-controls-background">
</div>
</div>
<div class="player-error">
</div>
<div class="player-options-container">
<div class="player-options-content">
</div>
</div>
`;
const seekNotifications = controlsCont.querySelectorAll('.seek-notification');
const forwardNotificationValue = controlsCont.querySelector('.video-forward-notify span');
const rewindNotificationValue = controlsCont.querySelector('.video-rewind-notify span');
const playerError = controlsCont.querySelector(".player-error");
const playerOptCont = controlsCont.querySelector(".player-options-container");
const playerOptContent = playerOptCont.querySelector(".player-options-content");
const playerOptClose = document.createElement("button");
playerOptClose.classList.add("controls-button", "hide-options-button", "has-ripple");
playerOptClose.title = "Hide options";
playerOptClose.ariaLabel = "Hide options";
playerOptClose.innerHTML = `<img class="player-img-icon button-icon hide-icon inactive" src="ic_vidcontrol_hide_controls.png"></img>
<img class="player-img-icon button-icon hide-icon active" src="ic_vidcontrol_hide_controls_pressed.png"></img>`;
playerOptClose.ariaPressed = "false";
playerOptContent.appendChild(playerOptClose);
const poster = controlsCont.querySelector(".player-poster");
videoPlayer.appendChild(controlsCont);
const controlsTop = document.createElement("div");
controlsTop.classList.add("player-controls-top");
const controlsMiddle = document.createElement("div");
controlsMiddle.classList.add("player-controls-middle");
const controls = document.createElement("div");
controls.classList.add("player-controls");
const controlsOverlay = controlsCont.querySelector(".player-controls-overlay");
const controlsBG = controlsCont.querySelector(".player-controls-background");
controlsOverlay.appendChild(controlsTop);
controlsOverlay.appendChild(playerError);
controlsOverlay.appendChild(controlsMiddle);
controlsOverlay.appendChild(controls);
const btnsCont = document.createElement("div");
btnsCont.classList.add("player-buttons-container");
controls.appendChild(btnsCont);
const currentTime = document.createElement("span");
currentTime.classList.add("player-time-count", "player-current-time");
currentTime.innerHTML = "00:00";
currentTime.ariaLabel = "Current time is " + currentTime.innerHTML;
btnsCont.appendChild(currentTime);
const progressCont = document.createElement("div");
progressCont.classList.add("progress-container");
const progress = document.createElement("div");
progress.classList.add("progress");
progress.innerHTML = `<div class="progress-filled"><div class="progress-track"></div>
<div class="player-storyboard-container">
<div class="player-storyboard">
<video class="storyboard-video" preload="also" muted src=""></video>
</div>
<div class="player-storyboard-time-tooltip">
00:00
</div>
</div>
</div>`;
const SBVideo = progress.querySelector("video");
const storyboard = progress.querySelector(".player-storyboard");
const storyboardTime = progress.querySelector(".player-storyboard-time-tooltip");
const progressBar = progress.querySelector(".progress-filled");
const progressTrack = progress.querySelector(".progress-track");
progressCont.appendChild(progress);
const prevVidBtn = document.createElement("button");
prevVidBtn.classList.add("controls-button", "controls-btn-disabled", "prev-vid-button", "has-ripple");
prevVidBtn.ariaLabel = "Previous video";
prevVidBtn.ariaDisabled = "true";
prevVidBtn.title = "Previous video";
prevVidBtn.innerHTML = `<img class="player-img-icon button-icon prev-vid-icon" src="ic_vidcontrol_prev.png"></img>`;
controlsMiddle.appendChild(prevVidBtn);
const toggleButton = document.createElement("button");
toggleButton.classList.add("controls-button", "toggle-button", "play-pause-button", "has-ripple");
toggleButton.ariaLabel = "Play video";
toggleButton.ariaPressed = "false";
toggleButton.title = "Toggle Play";
toggleButton.innerHTML = `<img class="player-img-icon button-icon play-icon" src="ic_vidcontrol_play.png"></img>`;
controlsMiddle.appendChild(toggleButton);
const nextVidBtn = document.createElement("button");
nextVidBtn.classList.add("controls-button", "controls-btn-disabled", "next-vid-button", "has-ripple");
nextVidBtn.ariaLabel = "Next video";
nextVidBtn.ariaDisabled = "true";
nextVidBtn.title = "Next video";
nextVidBtn.innerHTML = `<img class="player-img-icon button-icon next-vid-icon" src="ic_vidcontrol_next.png"></img>`;
controlsMiddle.appendChild(nextVidBtn);
btnsCont.appendChild(progressCont);
const playerExitWatchBtn = document.createElement("button");
playerExitWatchBtn.classList.add("controls-button", "exit-watch-button", "has-ripple");
playerExitWatchBtn.title = "Collapse watchpage";
playerExitWatchBtn.ariaLabel = "Collapse watchpage";
playerExitWatchBtn.innerHTML = `<img class="player-img-icon button-icon exit-watch-icon inactive" src="ic_vidcontrol_collapse.png"></img>
<img class="player-img-icon button-icon exit-watch-icon active" src="ic_vidcontrol_collapse_pressed.png"></img>`;
playerExitWatchBtn.ariaPressed = "false";
controlsTop.appendChild(playerExitWatchBtn);
const playerTitle = document.createElement("h3");
playerTitle.classList.add("player-title");
playerTitle.ariaLabel = "";
playerTitle.innerHTML = "";
controlsTop.appendChild(playerTitle);
const labSliderVol = document.createElement("label");
labSliderVol.setAttribute("for", "volume");
labSliderVol.classList.add("controls-slider-label");
const sliderVol = document.createElement("input");
sliderVol.type = "range";
sliderVol.name = "volume";
sliderVol.id = "volume";
sliderVol.classList.add("controls-slider");
sliderVol.min = "0";
sliderVol.max = "1";
sliderVol.step = "0.01";
sliderVol.setAttribute("value", 1);
labSliderVol.textContent = "Volume: " + Math.round(sliderVol.value * 100) + "%";
const labSliderPR = document.createElement("label");
labSliderPR.setAttribute("for", "playbackRate");
labSliderPR.classList.add("controls-slider-label");
const sliderPR = document.createElement("input");
sliderPR.type = "range";
sliderPR.name = "playbackRate";
sliderPR.id = "playbackRate";
sliderPR.classList.add("controls-slider");
sliderPR.min = "0.25";
sliderPR.max = "2";
sliderPR.step = "0.05";
sliderPR.setAttribute("value", 1);
labSliderPR.textContent = "Speed: " + sliderPR.value + "x";
const skipBtn1 = document.createElement("button");
skipBtn1.classList.add("controls-button", "skip-button", "has-ripple");
skipBtn1.innerHTML = `<< 10s`;
skipBtn1.dataset.skip = "-10";
const skipBtn2 = document.createElement("button");
skipBtn2.classList.add("controls-button", "skip-button", "has-ripple");
skipBtn2.innerHTML = `10s >>`;
skipBtn2.dataset.skip = "10";
const controlsSpacer = document.createElement("div");
controlsSpacer.classList.add("controls-spacer");
controlsTop.appendChild(controlsSpacer);
const playerShareBtn = document.createElement("button");
playerShareBtn.classList.add("controls-button", "share-button", "has-ripple");
playerShareBtn.title = "Share video";
playerShareBtn.ariaLabel = "Share video";
playerShareBtn.innerHTML = `<img class="player-img-icon button-icon share-icon inactive" src="ic_vidcontrol_share.png"></img>
<img class="player-img-icon button-icon share-icon active" src="ic_vidcontrol_share_pressed.png"></img>`;
playerShareBtn.ariaPressed = "false";
controlsTop.appendChild(playerShareBtn);
const overflowBtn = document.createElement("button");
overflowBtn.classList.add("controls-button", "overflow-button", "has-ripple");
overflowBtn.title = "More options";
overflowBtn.ariaLabel = "More options";
overflowBtn.innerHTML = `<img class="player-img-icon button-icon menu-icon inactive" src="ic_vidcontrol_overflow.png"></img>
<img class="player-img-icon button-icon menu-icon active" src="ic_vidcontrol_overflow_pressed.png"></img>`;
overflowBtn.ariaPressed = "false";
controlsTop.appendChild(overflowBtn);
const duration = document.createElement("span");
duration.classList.add("player-time-count", "player-duration");
duration.innerHTML = "00:00";
duration.ariaLabel = "Duration is " + duration.innerHTML;
btnsCont.appendChild(duration);
const fullScreenBtn = document.createElement("button");
fullScreenBtn.classList.add("controls-button", "toggle-button", "fullscreen-button", "has-ripple");
fullScreenBtn.title = "Toggle Fullscreen";
fullScreenBtn.ariaLabel = "Open fullscreen";
fullScreenBtn.innerHTML = `<img class="player-img-icon button-icon fullscreen-icon inactive" src="ic_vidcontrol_fullscreen_off.png"></img>
<img class="player-img-icon button-icon fullscreen-icon active" src="ic_vidcontrol_fullscreen_off_pressed.png"></img>`;
fullScreenBtn.ariaPressed = "false";
btnsCont.appendChild(fullScreenBtn);
const playerOptDialog = document.createElement("dialog");
playerOptDialog.classList.add("player-options-dialog");
playerOptDialog.id = "";
playerOptDialog.innerHTML = `
<div class="player-dialog-header">
<h3 class="player-dialog-title" aria-label=""></h3>
</div>
<div class="player-dialog-content">
</div>
`;
const playerDialogHeader = playerOptDialog.querySelector(".player-dialog-header");
const playerDialogTitle = playerOptDialog.querySelector(".player-dialog-title");
const playerDialogContent = playerOptDialog.querySelector(".player-dialog-content");
playerOptCont.appendChild(playerOptDialog);
const playerOptCloseDialog = document.createElement("button");
playerOptCloseDialog.classList.add("controls-button", "close-plyr-dialog-button", "has-ripple");
playerOptCloseDialog.title = "Close dialog";
playerOptCloseDialog.ariaLabel = "Close dialog";
playerOptCloseDialog.innerHTML = `<img class="player-img-icon button-icon hide-icon inactive" src="ic_vidcontrol_hide_controls.png"></img>
<img class="player-img-icon button-icon hide-icon active" src="ic_vidcontrol_hide_controls_pressed.png"></img>`;
playerOptCloseDialog.ariaPressed = "false";
playerDialogHeader.appendChild(playerOptCloseDialog);
const playerOptItem = document.createElement("div");
playerOptItem.classList.add("player-options-item");
playerOptContent.appendChild(playerOptItem);
const playerOptMisc = document.createElement("button");
playerOptMisc.classList.add("controls-button", "options-item-button", "misc-button", "has-ripple");
playerOptMisc.title = "Miscellaneous";
playerOptMisc.ariaLabel = "Miscellaneous";
playerOptMisc.innerHTML = `<img class="player-img-icon button-icon misc-icon inactive" src="player_icon_misc.png"></img>
<img class="player-img-icon button-icon misc-icon active" src="player_icon_misc_pressed.png"></img>`;
playerOptMisc.ariaPressed = "false";
const playerOptMiscText = document.createElement("span");
playerOptMiscText.textContent = "Misc";
playerOptMiscText.classList.add("options-item-text");
playerOptItem.appendChild(playerOptMisc);
playerOptItem.appendChild(playerOptMiscText);
const playerMiscOptions = document.createElement("div");
playerMiscOptions.classList.add("player-misc-options");
playerMiscOptions.appendChild(labSliderVol);
playerMiscOptions.appendChild(sliderVol); 
playerMiscOptions.appendChild(labSliderPR);
playerMiscOptions.appendChild(sliderPR);
playerMiscOptions.appendChild(skipBtn1);
playerMiscOptions.appendChild(skipBtn2);
const sliders = playerMiscOptions.querySelectorAll(".controls-slider");
const skipBtns = playerMiscOptions.querySelectorAll("[data-skip]");
const playerOptItem2 = document.createElement("div");
playerOptItem2.classList.add("player-options-item");
playerOptContent.appendChild(playerOptItem2);
const playerOptQual = document.createElement("button");
playerOptQual.classList.add("controls-button", "options-item-button", "quality-button", "has-ripple");
playerOptQual.title = "Quality";
playerOptQual.ariaLabel = "Quality";
playerOptQual.innerHTML = `<img class="player-img-icon button-icon quality-icon inactive" src="ic_vidcontrol_quality.png"></img>
<img class="player-img-icon button-icon quality-icon active" src="ic_vidcontrol_quality_pressed.png"></img>`;
playerOptQual.ariaPressed = "false";
const playerOptQualText = document.createElement("span");
playerOptQualText.textContent = "Quality";
playerOptQualText.classList.add("options-item-text");
playerOptItem2.appendChild(playerOptQual);
playerOptItem2.appendChild(playerOptQualText);
const playerOptSelect = document.createElement("div");
playerOptSelect.classList.add("player-dialog-select");
const playerOptItem3 = document.createElement("div");
playerOptItem3.classList.add("player-options-item");
playerOptContent.appendChild(playerOptItem3);
const playerOptIFrame = document.createElement("button");
playerOptIFrame.classList.add("controls-button", "options-item-button", "iframe-player-button", "has-ripple");
playerOptIFrame.title = "YT iFrame Player";
playerOptIFrame.ariaLabel = "YT iFrame Player";
playerOptIFrame.innerHTML = `<img class="player-img-icon button-icon iframe-icon inactive" src="player_icon_iframe.png"></img>
<img class="player-img-icon button-icon iframe-icon active" src="player_icon_iframe_pressed.png"></img>`;
playerOptIFrame.ariaPressed = "false";
const playerOptIFrameText = document.createElement("span");
playerOptIFrameText.textContent = "YT iFrame Player";
playerOptIFrameText.classList.add("options-item-text");
playerOptItem3.appendChild(playerOptIFrame);
playerOptItem3.appendChild(playerOptIFrameText);

controlsVisible = false;

controlsBG.onclick = function(){
if (!controlsVisible) {
controlsVisible = true;
controlsOverlay.classList.add("controls-visible");

coTimO = setTimeout(function(){

}, 4000);
setTimeout(function(){
clearTimeout(coTimO);
}, 09);
setTimeout(function(){
coTimO = setTimeout(function(){
controlsVisible = false;
controlsOverlay.classList.remove("controls-visible");
}, 4000);
}, 09);

if (video.paused) {
setTimeout(function(){
clearTimeout(coTimO);
}, 09);
};

video.addEventListener("playing", function(){
if (!videoPlayer.classList.contains("dbl-tap-seek-mode")) {
setTimeout(function(){
clearTimeout(coTimO);
}, 09);
setTimeout(function(){
coTimO = setTimeout(function(){
controlsVisible = false;
controlsOverlay.classList.remove("controls-visible");
}, 4000);
}, 09);
};
});

video.addEventListener("pause", function(){
if (!videoPlayer.classList.contains("dbl-tap-seek-mode")) {
setTimeout(function(){
clearTimeout(coTimO);
}, 09);
};
});

} else if (controlsVisible) {
controlsVisible = false;
controlsOverlay.classList.remove("controls-visible");
if (coTimO) {
setTimeout(function(){
clearTimeout(coTimO);
}, 09);
}
}
};

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
  } else {
    video.pause();
  }
}

function toggleFullScreen() {
  if (document.webkitFullscreenElement) {
    document.webkitExitFullscreen();
  } else {
    videoPlayer.webkitRequestFullscreen();
  }
}

function updateToggleButton() {
  videoPlayer.classList.remove("player-ended");
  toggleButton.innerHTML = video.paused ? `<img class="player-img-icon button-icon play-icon" src="ic_vidcontrol_play.png"></img>` : `<img class="player-img-icon button-icon pause-icon" src="ic_vidcontrol_pause.png"></img>`;
  toggleButton.ariaLabel = video.paused ? "Play video" : "Pause video";
  toggleButton.ariaPressed = video.paused ? "false" : "true";
  if (video.ended) {
  toggleButton.innerHTML = `<img class="player-img-icon button-icon reload-icon" src="ic_vidcontrol_reload.png"></img>`;
  toggleButton.ariaLabel = "Replay video";
  toggleButton.ariaPressed = "false";
  videoPlayer.classList.add("player-ended");
  if (!controlsOverlay.classList.contains("controls-visible")) {
  controlsBG.click();
  }
  }
}

function updateFSButton() {
  if (document.webkitFullscreenElement) {
    fullScreenBtn.innerHTML = `<img class="player-img-icon button-icon fullscreen-icon inactive" src="ic_vidcontrol_fullscreen_on.png"></img>
<img class="player-img-icon button-icon fullscreen-icon active" src="ic_vidcontrol_fullscreen_on_pressed.png"></img>`;
    fullScreenBtn.ariaPressed = "true";
    fullScreenBtn.ariaLabel = "Exit fullscreen";
    videoPlayer.classList.add("player-is-fullscreen");
  } else {
    fullScreenBtn.innerHTML = `<img class="player-img-icon button-icon fullscreen-icon inactive" src="ic_vidcontrol_fullscreen_off.png"></img>
<img class="player-img-icon button-icon fullscreen-icon active" src="ic_vidcontrol_fullscreen_off_pressed.png"></img>`;
    fullScreenBtn.ariaPressed = "false";
    fullScreenBtn.ariaLabel = "Open fullscreen";
    videoPlayer.classList.remove("player-is-fullscreen");
  }
}

function handleProgress() {
  const progressPercentage = (video.currentTime / video.duration) * 100;
  if (mousedown == false) {
  progressBar.style.flexBasis = `${progressPercentage}%`;
  }
  if (video.currentTime > "3599") {
  currentTime.innerHTML = new Date(1000 * video.currentTime).toISOString().substr(11, 8);
  } else {
  currentTime.innerHTML = new Date(1000 * video.currentTime).toISOString().substr(14, 5);
  }
  currentTime.ariaLabel = "Current time is " + currentTime.innerHTML;
}

function removeScrubbingClass(e) {
    progressTrack.classList.remove("scrubbing");
    videoPlayer.classList.remove("player-seek-mode");
    if (scrubTime) {
    video.currentTime = scrubTime;
    }
}

function scrub(e) {
  if (e.type == "touchmove") {
    var bcr = e.target.getBoundingClientRect();
    var e_x = e.targetTouches[0].clientX - bcr.x;
    var e_y = e.targetTouches[0].clientY - bcr.y;
    scrubTime = (e_x / progress.offsetWidth) * video.duration;
    if (scrubTime < video.duration && scrubTime > 0) {
    if (scrubTime > "3599") {
    storyboardTime.innerHTML = new Date(1000 * scrubTime).toISOString().substr(11, 8);
    } else {
    storyboardTime.innerHTML = new Date(1000 * scrubTime).toISOString().substr(14, 5);
    }
    }
    const progressPercentage = (scrubTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
    SBVideo.currentTime = scrubTime;
    updateToggleButton();
    if (mousedown == true) {
    progressTrack.classList.add("scrubbing");
    videoPlayer.classList.add("player-seek-mode");
    if (coTimO) {
    clearTimeout(coTimO);
    };
    } else if (mousedown == false) {
    progressTrack.classList.remove("scrubbing");
    videoPlayer.classList.remove("player-seek-mode");
    video.currentTime = scrubTime;
    };
  } else {
    scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    if (scrubTime < video.duration && scrubTime > 0) {
    if (scrubTime > "3599") {
    storyboardTime.innerHTML = new Date(1000 * scrubTime).toISOString().substr(11, 8);
    } else {
    storyboardTime.innerHTML = new Date(1000 * scrubTime).toISOString().substr(14, 5);
    }
    }
    const progressPercentage = (scrubTime / video.duration) * 100;
    progressBar.style.flexBasis = `${progressPercentage}%`;
    SBVideo.currentTime = scrubTime;
    updateToggleButton();
    if (mousedown == true) {
    progressTrack.classList.add("scrubbing");
    videoPlayer.classList.add("player-seek-mode");
    if (coTimO) {
    clearTimeout(coTimO);
    };
    } else if (mousedown == false) {
    progressTrack.classList.remove("scrubbing");
    videoPlayer.classList.remove("player-seek-mode");
    video.currentTime = scrubTime;
    };
  };
}

function handleSliderUpdate() {
  video[this.name] = this.value;
  playerMiscOptions.querySelector(`[for="${this.id}"].controls-slider-label`).textContent = this.value;
  if (this.id == "playbackRate"){
  playerMiscOptions.querySelector(`[for="${this.id}"].controls-slider-label`).textContent = "Speed: " + this.value + "x";
  };
  if (this.id == "volume"){
  playerMiscOptions.querySelector(`[for="${this.id}"].controls-slider-label`).textContent = "Volume: " + Math.round(this.value * 100) + "%";
  };
}

Array.from(sliders).forEach(function(slider){
  slider.addEventListener("input", handleSliderUpdate);
});

function handleSkip() {
  video.currentTime += +this.dataset.skip;
  updateToggleButton();
}
function handleSkipKey(skip) {
  video.currentTime += +skip;
  updateToggleButton();
}
function handleDurationChange(){
  if (video.duration > "3599") {
  duration.innerHTML = new Date(1000 * video.duration).toISOString().substr(11, 8);
  } else {
  duration.innerHTML = new Date(1000 * video.duration).toISOString().substr(14, 5);
  }
  duration.ariaLabel = "Duration is " + duration.innerHTML;
};

Array.from(skipBtns).forEach(function(btn){
  btn.addEventListener("click", handleSkip);
});

/* The code for double tapping to seek was originally from: https://codepen.io/smithsa/pen/ZmWMxy (Credit goes to them) */

var timer;
var rewindSpeed = 0;
var forwardSpeed = 0;
var rewindSpeed2 = 0;
var forwardSpeed2 = 0;

function updateCurrentTime(delta){
    var isRewinding = delta < 0;
  
    if(isRewinding){
      rewindSpeed = delta;
      rewindSpeed2 = rewindSpeed2 + delta;
      forwardSpeed = 0;
      forwardSpeed2 = 0;
    }else{
      forwardSpeed = delta;
      forwardSpeed2 = forwardSpeed2 + delta;
      rewindSpeed = 0;
      rewindSpeed2 = 0;
    }
    
    clearTimeout(timer);
  
    var speed = (isRewinding ? rewindSpeed : forwardSpeed);
    var speed2 = (isRewinding ? rewindSpeed2 : forwardSpeed2);
    video.currentTime = video.currentTime + speed;
  
    var NotificationValue =  isRewinding ? rewindNotificationValue : forwardNotificationValue ;
    NotificationValue.innerHTML = `${Math.abs(speed2)} seconds`;
    if (isRewinding) {
    NotificationValue.innerHTML = `-${Math.abs(speed2)} seconds`;
    }
  
    timer = setTimeout(function(){
      rewindSpeed = 0;
      rewindSpeed2 = 0;
      forwardSpeed = 0;
      forwardSpeed2 = 0;
    }, 2000);
    /* console.log(`updated time: ${video.currentTime}`); */
}

function animateNotificationIn(isRewinding){
  isRewinding ? seekNotifications[0].classList.remove('animate-in') : seekNotifications[1].classList.remove('animate-in'); 
  videoPlayer.classList.remove("dbl-tap-seek-mode");
  setTimeout(function(){
  isRewinding ? seekNotifications[0].classList.add('animate-in') : seekNotifications[1].classList.add('animate-in'); 
  videoPlayer.classList.add("dbl-tap-seek-mode");
  }, 10);
}

function animateNotificationOut(e){
    e.classList.remove('animate-in');
    videoPlayer.classList.remove("dbl-tap-seek-mode");
}

function forwardVideo(){
    updateCurrentTime(10);
    animateNotificationIn(false);
}

function rewindVideo(){
    updateCurrentTime(-10);
    animateNotificationIn(true);
}

function doubleClickHandler(e){
    /* console.log(`current time: ${video.currentTime}`); */
    const videoWidth = video.offsetWidth;
    (e.offsetX < videoWidth/2) ? rewindVideo() : forwardVideo();
}

Array.from(seekNotifications).forEach(function(notification){
  notification.addEventListener('animationend', function(){
    setTimeout(animateNotificationOut(notification), 200);
  });
});


/* This code was originally taken from: https://gist.github.com/toorajam/0c7fc1f9eeb854334757b56b497af43b (credit goes to them). Its use is to achieve something like the "dblclick" event on mobile browsers */
var clickCount = 0;
var timeout;
controlsBG.addEventListener("click", function(e) {
    if (timeout) {
        clearTimeout(timeout);
    }
    clickCount++;

    if (clickCount === 2) {
        doubleClickHandler(e);
        clickCount = 0;
    }
    timeout = setTimeout(function() {
        clickCount = 0;
    }, 300);
})

function openPlayerOptions(){
  videoPlayer.classList.add("player-options-shown");
};
function hidePlayerOptions(){
  videoPlayer.classList.remove("player-options-shown");
  closePlayerDialog();
};

function openPlayerDialog(){
playerOptDialog.setAttribute("open", "");
};
function closePlayerDialog(){
playerOptDialog.removeAttribute("open");
setTimeout(function(){
playerDialogTitle.textContent = "";
playerDialogContent.innerHTML = "";
playerDialogContent.removeAttribute("content-identifier");
playerOptDialog.id = "";
playerOptSelect.innerHTML = "";
}, 300);
};

function openPlayerDialogMisc(){
playerDialogTitle.textContent = "Misc";
playerDialogContent.innerHTML = "";
playerOptSelect.innerHTML = "";
playerDialogContent.appendChild(playerMiscOptions);
playerDialogContent.setAttribute("content-identifier", "player-misc");
playerOptDialog.id = "playerDialogMisc";
};

function openPlayerDialogQual(){
playerDialogTitle.textContent = "Quality";
playerDialogContent.innerHTML = "";
playerOptSelect.innerHTML = "";
playerDialogContent.appendChild(playerOptSelect);
playerDialogContent.setAttribute("content-identifier", "player-quality");
playerOptDialog.id = "playerDialogQuality";
const videoSources = video.querySelectorAll("source");
Array.from(video.querySelectorAll("source")).forEach(function(item){
const playerSelectBtn = document.createElement("button");
playerSelectBtn.classList.add("controls-button", "player-select-button", "has-ripple");
playerSelectBtn.title = item.getAttribute("label");
playerSelectBtn.ariaLabel = item.getAttribute("label");
playerSelectBtn.innerHTML = item.getAttribute("label");
playerSelectBtn.ariaPressed = "false";
playerSelectBtn.dataset.src = item.src;
if (item.getAttribute("selected") == "true") {
playerSelectBtn.title = item.getAttribute("label") + " (Selected)";
playerSelectBtn.ariaLabel = item.getAttribute("label") + " (Selected)";
playerSelectBtn.innerHTML = item.getAttribute("label") + " (Selected)";
playerSelectBtn.ariaPressed = "true";
};
if (item.getAttribute("selected") !== "true") {
playerSelectBtn.onclick = function(itembtn){
prevVidTime = video.currentTime;
video.src = itembtn.target.dataset.src;
video.currentTime = prevVidTime;
Array.from(video.querySelectorAll("source")).forEach(function(item1){
item1.setAttribute("selected", "false");
if (item1.src == itembtn.target.dataset.src) {
item1.setAttribute("selected", "true");
};
});
};
};
playerOptSelect.appendChild(playerSelectBtn);
});
};

toggleButton.addEventListener("click", togglePlay);
fullScreenBtn.addEventListener("click", toggleFullScreen);
overflowBtn.addEventListener("click", openPlayerOptions);
playerOptClose.addEventListener("click", hidePlayerOptions);
playerOptMisc.addEventListener("click", function(){
openPlayerDialog();
openPlayerDialogMisc();
});
playerOptQual.addEventListener("click", function(){
openPlayerDialog();
openPlayerDialogQual();
});
playerOptCloseDialog.addEventListener("click", closePlayerDialog);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
video.addEventListener("durationchange", handleDurationChange);
videoPlayer.addEventListener("webkitfullscreenchange", updateFSButton);

video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
var mousedown = false;
var touchstart = false;
progress.addEventListener("mousedown", function() {mousedown = true});
progress.addEventListener("mousemove", function(e) {mousedown && scrub(e)});
progress.addEventListener("mouseup", function() {mousedown = false; removeScrubbingClass()});
progress.addEventListener("touchstart", function() {mousedown = true});
progress.addEventListener("touchmove", function(e) {mousedown && scrub(e)});
progress.addEventListener("touchend", function() {mousedown = false; removeScrubbingClass()});

video.addEventListener("loadedmetadata", function(e){

});

video.addEventListener("error", function(e){
videoPlayer.classList.add("player-has-error");
playerError.textContent = `The video failed to load

Tap to retry`;
console.error("The video failed to load. Sorry about that...");
});

playerError.addEventListener("click", function(e){
video.load();
SBVideo.load();
});

function closeIFramePlayer(){
    iframePlayerCont.classList.add("iframe-not-visible");
    setTimeout(function(){
    iframePlayerCont.remove();
    iframePlayerCont.classList.remove("iframe-not-visible");
    videoPlayer.classList.remove("player-iframe-visible");
    }, 350);
}

video.addEventListener("loadeddata", function(e){

});
video.addEventListener("loadstart", function(e){
    if (!videoPlayer.classList.contains("player-loading")) {
    videoPlayer.classList.add("player-loading");
    }
    poster.style.backgroundImage = `url("${video.poster}")`;
    videoPlayer.classList.remove("player-started");
    videoPlayer.classList.remove("player-has-error");
    playerTitle.innerHTML = video.dataset.title;
    videoPlayer.classList.remove("player-options-shown");
    videoPlayer.classList.remove("player-mini-mode");
    videoPlayer.classList.add("hide-prev-next-btns");
    closeIFramePlayer();
    closePlayerDialog();
});
video.addEventListener("waiting", function(e) {
    if (!videoPlayer.classList.contains("player-loading")) {
    videoPlayer.classList.add("player-loading");
    }
});
video.addEventListener("canplay", function(e) {

});
video.addEventListener("playing", function() {
    if (!videoPlayer.classList.contains("player-started")) {
    videoPlayer.classList.add("player-started");
    }
    setTimeout(function() {
    if (videoPlayer.classList.contains("player-loading")) {
    videoPlayer.classList.remove("player-loading");
    }
    }, 10);
});
video.addEventListener("suspend", function(e) {
    setTimeout(function() {
    if (videoPlayer.classList.contains("player-loading")) {
    videoPlayer.classList.remove("player-loading");
    }
    }, 10);
});
video.addEventListener("canplaythrough", function(e) {

});
video.addEventListener("stalled", function(e) {

});

videoPlayer.addEventListener("keydown", function(e){
  if (e.code === "Space"){
  togglePlay();
  };
  if (e.code === "ArrowLeft"){
  handleSkipKey(-10);
  };
  if (e.code === "ArrowRight"){
  handleSkipKey(10);
  };
});

function insertYTmPlayer(parent){
parent.appendChild(videoPlayer);

video.poster = "";
video.innerHTML = ``;
video.dataset.title = "";
video.removeAttribute("src");
currentTime.innerHTML = "00:00";
duration.innerHTML = "00:00";

video.load();

YTmVideoId = playerVideoId;

const playerxhttpr = new XMLHttpRequest();
playerxhttpr.open('GET', 'https://inv.tux.pizza/api/v1/videos/' + YTmVideoId, true);
 
playerxhttpr.send();

playerxhttpr.onerror = function(){
      videoPlayer.classList.add("player-has-error");
      playerError.textContent = `There was an error retrieving the video from the server

Sorry about that...`;
      if (playerxhttpr.response) {
      playerError.textContent = JSON.parse(playerxhttpr.response).error + `

Sorry about that...`;
      }
      console.error('There was a problem with the xhttpr operation:', playerxhttpr.status);
};
 
playerxhttpr.onload = function() {
  if (playerxhttpr.status === 200) {
      const data = JSON.parse(playerxhttpr.response);
          video.poster = data.videoThumbnails[3].url;
          video.innerHTML = ``;
          video.dataset.title = data.title;
          /* storyboardURL = "https://inv.tux.pizza" + data.storyboards[2].url; */
          SBVideo.src = data.formatStreams[0].url;

/* const sbxhttpr = new XMLHttpRequest();

sbxhttpr.open('GET', storyboardURL, true);
 
sbxhttpr.send();

sbxhttpr.onerror = function(){
      console.error('Unable to retrieve the storyboard for this video (' + sbxhttpr.status + ')');
};

sbxhttpr.onload = function() {
  if (sbxhttpr.status === 200) {
  SBData = sbxhttpr.response;
  } else {
  sbxhttpr.onerror();
  };
}; */

          data.formatStreams.forEach(function(item) {
          const lastFS = data.formatStreams.slice(-1)[0]
          const vidSource = document.createElement("source");
          vidSource.src = item.url;
          vidSource.type = item.type;
          vidSource.setAttribute("label", item.qualityLabel);
          vidSource.setAttribute("selected", false);
          if (item == lastFS) {
          vidSource.setAttribute("selected", true);
          };
          video.appendChild(vidSource);
          if (vidSource.getAttribute("selected", "true")) {
          video.src = item.url;
          };
          });
          if (data.captions) {
          data.captions.forEach(function(item) {
          const vidTrack = document.createElement("track");
          vidTrack.kind = "captions";
          vidTrack.src = "https://inv.tux.pizza" + item.url;
          vidTrack.srclang = item.language_code;
          vidTrack.label = item.label;
          video.appendChild(vidTrack);
          });
          };
  } else {
          playerxhttpr.onerror();
  }
};
};