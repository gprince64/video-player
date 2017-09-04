var assert = chai.assert;

describe('Initialization', function() {

  it('default controls are hidden', function() {
  	assert.equal(videoPlayer.controls,false);
  });

  it('media is defined', function(){
  	assert.equal(videoPlayer.networkState,1);
  });
});

describe('Video Controls', function() {

	beforeEach(function(){
		resetVideo();
	});

	afterEach(function(){
		resetVideo();
	})

	it('video is playing when play btn is clicked',function(){
		playPauseBtn.click();
		assert.isFalse(videoPlayer.paused);
	});

	it('video is playing when play btn (On screen) is clicked',function(){
		hoverPlay.click();
  		assert.isFalse(videoPlayer.paused);
	});

	it('video is paused when pause btn is clicked',function(){
		videoPlayer.play()
		playPauseBtn.click();
  		assert.isTrue(videoPlayer.paused);
	});

	it('video is paused when pause btn (On screen) is clicked',function(){
		videoPlayer.play();
		hoverPause.click();
  		assert.isTrue(videoPlayer.paused);
	});

	it('video is playing from beginning when replay btn is clicked',function(){
  		replayVideo();
  		assert.isTrue((videoPlayer.currentTime == 0)&&(videoPlayer.paused == false));
	});

	it('video is stopped when stop btn is clicked',function(){
		resetVideo();
  		assert.isTrue((videoPlayer.currentTime == 0)&&(videoPlayer.paused == true));
	});

	it('volume is changed when volume slider is changed',function(){
		var volumeOld = videoPlayer.volume
		volumeBar.value = 50;
		volumeBar.onchange();
		assert.notEqual(videoPlayer.volume, volumeOld)

	});

	it('video is muted when mute btn is clicked',function(){
  		muteBtn.click()
  		assert.isTrue(videoPlayer.muted)
	});

	it('video is unmuted when UNmute btn is clicked',function(){
		videoPlayer.muted = true;
		muteBtn.click();
  		assert.isFalse(videoPlayer.muted);
	});

	it('video is stopped when it reaches end',function(){
  		resetVideo();
  		assert.isTrue((videoPlayer.currentTime == 0) && (videoPlayer.paused == true))
	});

	it('Progress bar is changed when video is playing',function(){
  		var valueOld = progressBar.value;
  		videoPlayer.currentTime = valueOld + 10;
  		updateProgressBar();
  		assert.notEqual(valueOld,videoPlayer.currentTime);
	});
})

describe('Video Style', function() {

	beforeEach(function(){
		resetVideo();
	});

	afterEach(function(){
		resetVideo();
	})

	it('Play button on screen is visible when video is paused',function(){
		togglePlayPause();
		togglePlayPause();
	  		assert.isTrue((hoverDiv.style.visibility == "visible")&&(hoverPlay.style.display == "block"))
	});

	it('Pause button on screen is not visible when video is playing and mouse is not on it',function(){
  		togglePlayPause();
  		assert.isTrue((hoverDiv.style.visibility == "hidden")&&(hoverPause.style.display == "block"))
	});

	it('Pause button on screen is visible when video is playing and mouse is over it',function(){
  		togglePlayPause();
  		var player = document.getElementById("player");
  		player.onmouseover();
  		assert.isTrue((hoverDiv.style.visibility == "visible")&&(hoverPause.style.display == "block"))
	});

	it('Play btn in controls is visible when video is paused',function(){
  		togglePlayPause();
  		togglePlayPause();
  		assert.equal(playPauseBtn.className,"play");
	});

	it('Pause btn in controls is visible when video is playing',function(){
		togglePlayPause();
  		assert.equal(playPauseBtn.className,"pause");
	});

	it('Mute btn is visible when video is unmuted',function(){
  		toggleMute();
  		toggleMute();
  		assert.equal(muteBtn.className,"mute");
	});

	it('Unmute btn is visible when video is muted',function(){
		toggleMute();	
  		assert.equal(muteBtn.className,"unmute");
	});

})