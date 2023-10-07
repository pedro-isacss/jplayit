// === ===
const videoWrapper = document.querySelector(".jplayit-wrapper");
const video = document.querySelector("#jplayit-video");
const playBtn = document.querySelector("#jplayit-play");
const fullScreenBtn = document.querySelector("#jplayit-full-screen");
const initialVideoHeight = video.style.height;

// === STATES ===
let isPlaying = false;
let isFullScreen = false;

// === PLAY/PAUSE ===
playBtn.addEventListener("click", () => {
  if (isPlaying) {
    video.pause();
  } else {
    video.play();
  }

  isPlaying = !isPlaying;
});

// === FULSCREEN ON/OFF ===
fullScreenBtn.addEventListener("click", () => {
  if (isFullScreen) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
    video.style.height = initialVideoHeight;
  } else {
    if (videoWrapper.requestFullscreen) {
      videoWrapper.requestFullscreen();
    } else if (videoWrapper.webkitRequestFullscreen) {
      videoWrapper.webkitRequestFullscreen();
    } else if (videoWrapper.msRequestFullscreen) {
      videoWrapper.msRequestFullscreen();
    }
    video.style.height = "100%";
  }

  isFullScreen = !isFullScreen;
});
