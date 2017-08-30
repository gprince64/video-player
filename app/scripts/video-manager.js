// Initializing elements
var videoPlayer;
var playPauseBtn;
var progressBar;


document.addEventListener("DOMContentLoaded", function(){initVideoPlayer(); }, false);

function initVideoPlayer(){
	videoPlayer = document.getElementById('video');
	videoPlayer.controls = false;

	playPauseBtn = document.getElementById('play-pause-button');

	progressBar = document.getElementById('progress-bar');
	progressBar.addEventListener('click', clickedBar, false);

	videoPlayer.addEventListener('play', function(){
		changeButton(playPauseBtn, 'pause');
	}, false);

	videoPlayer.addEventListener('pause', function(){
		changeButton(playPauseBtn, 'play');
	}, false);

	videoPlayer.addEventListener('timeupdate', updateProgressBar, false);
	videoPlayer.addEventListener('ended', resetVideo, false);

}

function togglePlayPause(){
	if(videoPlayer.paused || videoPlayer.ended){
		changeButton(playPauseBtn, 'pause')
		videoPlayer.play();
	}else{
		changeButton(playPauseBtn, 'play')
		videoPlayer.pause();
	}
}

function updateProgressBar(){
	var currentTimePercentage = Math.floor((100/videoPlayer.duration) * videoPlayer.currentTime);
	progressBar.value = currentTimePercentage;
	progressBar.innerHTML = currentTimePercentage + '%';
}

function resetVideo(){
	videoPlayer.currentTime = 0;
	progressBar.value = 0
	changeButton(playPauseBtn, 'play');
	videoPlayer.pause();
}

function clickedBar(e){
	var time = (e.pageX  - (this.offsetLeft + this.offsetParent.offsetLeft)) / this.offsetWidth;
   videoPlayer.currentTime = time * videoPlayer.duration;
}

function changeButton(btn, val){
	btn.title = val;
	btn.innerHTML = val;
	btn.className = val;
}