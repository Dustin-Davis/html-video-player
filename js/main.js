const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');

const videoWorks = !!document.createElement('video').canPlayType; // canPlayType is to detect support for a video format in a browser. !! = shorthand to make a boolean

if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}
