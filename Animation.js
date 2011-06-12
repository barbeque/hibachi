function Animation() {
	/**
	*  Time, in seconds, between frames
	*/
	this.frameInterval = 0.25; // 4 fps
	this.frames = new Array();
	
	/**
	*  Sets the frame images for the animation
	*  @param {frames}	An array of frame images for the animation
	*/
	this.setFrames = function(frames) {
		this.frames = frames;
	}
	
	/**
	*  Gets a frame of the animation suitable for drawing
	*  @param {t}	The time, in seconds, into the animation
	*  @returns		The frame, in the form of a drawable image
	*/
	this.getFrameAt = function(t) {
		var frameNumber = Math.floor(t / this.frameInterval) % this.frames.length;
		return this.frames[frameNumber];
	}
}