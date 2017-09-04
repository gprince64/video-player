var assert = chai.assert;

describe('Initialization', function() {

	it('test function returning 1', function() {
  	assert.equal(test(),1);
  });

  it('default controls are hidden', function() {
  	assert.equal(0,1);
  });

  it('media is defined', function(){
  	assert.equal(0,1);
  });
});

describe('Video Controls', function() {
	it('video is playing when play btn is clicked',function(){
		assert.equal(0,1);

	});

	it('video is playing when play btn (On screen) is clicked',function(){
  		assert.equal(0,1);
	});

	it('video is paused when pause btn is clicked',function(){
  		assert.equal(0,1);
	});

	it('video is paused when pause btn (On screen) is clicked',function(){
  		assert.equal(0,1);
	});

	it('video is playing from beginning when replay btn is clicked',function(){
  		assert.equal(0,1);
	});

	it('video is stopped when stop btn is clicked',function(){
  		assert.equal(0,1);
	});

	it('volume is changed when volume slider is changed',function(){
  		assert.equal(0,1);
	});

	it('video is muted when mute btn is clicked',function(){
  		assert.equal(0,1);
	});

	it('video is unmuted when UNmute btn is clicked',function(){
  		assert.equal(0,1);
	});

	it('video is stopped when it reaches end',function(){
  		assert.equal(0,1);
	});

	it('Progress bar is changed when video is playing',function(){
  		assert.equal(0,1);
	});
})

describe('Video Style', function() {
	it('Play button on screen is visible when video is paused',function(){
  		assert.equal(0,1);
	});

	it('Pause button on screen is visible when video is paused',function(){
  		assert.equal(0,1);
	});

	it('Play btn  in controls is visible when video is paused',function(){
  		assert.equal(0,1);
	});

	it('Pause btn in controls is visible when video is paused',function(){
  		assert.equal(0,1);
	});

	it('Mute btn is visible when video is unmuted',function(){
  		assert.equal(0,1);
	});

	it('Unmute btn is visible when video is muted',function(){
  		assert.equal(0,1);
	});

})