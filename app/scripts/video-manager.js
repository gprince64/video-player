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

initVideoPlayer();

function initVideoPlayer() {
	videoPlayer = document.getElementById('video');
	videoPlayer.controls = false;

	playPauseBtn = document.getElementById('play-pause-button');

	muteBtn = document.getElementById('mute-button');

	progressBar = document.getElementById('progress-bar');
	progressBar.addEventListener('click', clickedBar, false);

	volumeBar = document.getElementById('volume-bar');

	hoverDiv = document.getElementById('video-hover');

	hoverPlay = document.getElementById('hover-play');

	hoverPause = document.getElementById('hover-pause');
	hoverPause.style.display = 'none';

	/*
 	videoPlayer.addEventListener('loadstart', function(){
 		videoPlayer.classList.add("loading");
 	}, false);
 
 	videoPlayer.addEventListener('canplay', function(){
 		videoPlayer.classList.remove("loading");
 	}, false);
 */

	videoPlayer.addEventListener('play', function () {
		changeButton(playPauseBtn, 'pause');
	}, false);

	videoPlayer.addEventListener('pause', function () {
		changeButton(playPauseBtn, 'play');
	}, false);

	videoPlayer.addEventListener('volumechange', function () {
		if (videoPlayer.muted) changeButton(muteBtn, 'unmute');
		else changeButton(muteBtn, 'mute');
	}, false);

	videoPlayer.addEventListener('timeupdate', updateProgressBar, false);

	videoPlayer.addEventListener('ended', resetVideo, false);
}

function replayVideo() {
	videoPlayer.currentTime = 0;
	progressBar.value = 0;
	changeButton(playPauseBtn, 'pause');
	videoPlayer.play();
	hoverPause.style.display = 'block';
	hoverPlay.style.display = 'none';
	hoverDiv.style.visibility = "hidden";
}

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

function resetVideo() {
	videoPlayer.currentTime = 0;
	progressBar.value = 0;
	videoPlayer.muted = false;
	videoPlayer.volume= 1;
	changeButton(playPauseBtn, 'play');
	videoPlayer.pause();
	hoverPause.style.display = 'none';
	hoverPlay.style.display = 'block';
	hoverDiv.style.visibility = "visible";
}

function changeVolume(vol) {
	videoPlayer.volume = vol / 100;
}

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

function updateProgressBar() {
	var currentTimePercentage = Math.floor(100 / videoPlayer.duration * videoPlayer.currentTime);
	progressBar.value = currentTimePercentage;
	progressBar.innerHTML = currentTimePercentage + '%';
}

function showHoverImg() {
	hoverDiv.style.visibility = "visible";
}

function hideHoverImg() {
	if (videoPlayer.paused || videoPlayer.stopped) hoverDiv.style.visibility = "visible";else hoverDiv.style.visibility = 'hidden';
}

function clickedBar(e) {
	var time = (e.pageX - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
	videoPlayer.currentTime = time * videoPlayer.duration;
}

function changeButton(btn, val) {
	btn.title = val;
	btn.innerHTML = val;
	btn.className = val;
	btn.setAttribute('data-state', val);
}
