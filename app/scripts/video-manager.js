'use strict';

// Initializing elements

var videoPlayer;
var playPauseBtn;
var muteBtn;
var progressBar;
var volumeBar;
var hoverDiv;
var hoverPlay;
var hoverPause;

// Starting initialization
initVideoPlayer();

function initVideoPlayer() {
	//Setting up videoPlayer
	videoPlayer = document.getElementById('video');
	//Disabling native controls
	videoPlayer.controls = false;

	//Registering events (Most events are synced in HTML File (onClick))
	//Change play/pause button states when using native play event (right click on media)
	videoPlayer.addEventListener('play', function () {
		changeButton(playPauseBtn, 'pause');
	}, false);
	videoPlayer.addEventListener('pause', function () {
		changeButton(playPauseBtn, 'play');
	}, false);

	// Changes mute/unmute buttons when videoPlayer is muted
	videoPlayer.addEventListener('volumechange', function () {
		if (videoPlayer.muted) changeButton(muteBtn, 'unmute');else changeButton(muteBtn, 'mute');
	}, false);

	// Update progress bar when time is running
	videoPlayer.addEventListener('timeupdate', updateProgressBar, false);

	// Reset the play when video is ended
	videoPlayer.addEventListener('ended', resetVideo, false);

	/*
 	// Test : add a .gif loading image when media is loading -> not working
 	videoPlayer.addEventListener('loadstart', function(){
 		videoPlayer.classList.add("loading");
 	}, false);
 
 	videoPlayer.addEventListener('canplay', function(){
 		videoPlayer.classList.remove("loading");
 	}, false);
 */

	// Register all elements
	playPauseBtn = document.getElementById('play-pause-button');
	muteBtn = document.getElementById('mute-button');
	progressBar = document.getElementById('progress-bar');
	volumeBar = document.getElementById('volume-bar');
	hoverDiv = document.getElementById('video-hover');
	hoverPlay = document.getElementById('hover-play');
	hoverPause = document.getElementById('hover-pause');
	//Hide pause button, media is not playing on init
	hoverPause.style.display = 'none';

	// Register click event on progress bar, load video from where user clicked
	progressBar.addEventListener('click', clickedBar, false);
}

// Replays the video from 0 on btn click
function replayVideo() {
	videoPlayer.currentTime = 0;
	progressBar.value = 0;
	changeButton(playPauseBtn, 'pause');
	videoPlayer.play();
	hoverPause.style.display = 'block';
	hoverPlay.style.display = 'none';
	hoverDiv.style.visibility = "hidden";
}

// Play/Pause the video on btn click
function togglePlayPause() {
	if (videoPlayer.paused || videoPlayer.ended) {
		changeButton(playPauseBtn, 'pause');
		videoPlayer.play();
		hoverPlay.style.display = 'none';
		hoverPause.style.display = 'block';
		hoverDiv.style.visibility = "hidden";
	} else {
		changeButton(playPauseBtn, 'play');
		videoPlayer.pause();
		hoverPlay.style.display = 'block';
		hoverPause.style.display = 'none';
		hoverDiv.style.visibility = 'visible';
	}
}

// Reset the video on btn click
function resetVideo() {
	videoPlayer.currentTime = 0;
	progressBar.value = 0;
	changeButton(playPauseBtn, 'play');
	videoPlayer.pause();
	hoverPause.style.display = 'none';
	hoverPlay.style.display = 'block';
	hoverDiv.style.visibility = "visible";
}

// Volume Change when user slides the volume bar
function changeVolume(vol) {
	videoPlayer.volume = vol / 100;
}

// Mutes/Unmutes the video on btn click
function toggleMute() {
	if (videoPlayer.muted) {
		changeButton(muteBtn, 'mute');
		videoPlayer.muted = false;
		volumeBar.value = 100;
		changeVolume(100);
	} else {
		changeButton(muteBtn, 'unmute');
		videoPlayer.muted = true;
		volumeBar.value = 0;
		changeVolume(0);
	}
}

// Change the progress bar progression according video currentTime
function updateProgressBar() {
	var currentTimePercentage = Math.floor(100 / videoPlayer.duration * videoPlayer.currentTime);
	progressBar.value = currentTimePercentage;
	progressBar.innerHTML = currentTimePercentage + '%';
}

// Show the image over the video (Play or Pause) when user hovers the video
function showHoverImg() {
	hoverDiv.style.visibility = "visible";
}

// Hides the images over the video when user moves his mouse ouf of screen, only if video is playing.
function hideHoverImg() {
	if (videoPlayer.paused || videoPlayer.stopped) hoverDiv.style.visibility = "visible";else hoverDiv.style.visibility = 'hidden';
}

// Changes the currentTime of the video according user's click on progress bar
function clickedBar(e) {
	var time = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
	videoPlayer.currentTime = time * videoPlayer.duration;
}

// Change button state
function changeButton(btn, val) {
	btn.title = val;
	btn.innerHTML = val;
	btn.className = val;
	btn.setAttribute('data-state', val);
}