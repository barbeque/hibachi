// "streamed" images that provide a placeholder until they are
// fully loaded.

function StreamedImage () {
	this.isLoaded = false;
	this.image = new Image();
	this.image.owner = this;
	this.image.onload = function() {
		// Informs us when the image is available.
		this.owner.isLoaded = true;
	}
	/**
	*  Draws the image to screen, or a surrogate if the image is not
	*  yet loaded.
	*  @param context	2D canvas context to draw to
	*  @param x			X-location in pixels to draw to
	*  @param y			Y-location in pixels to draw to
	*  @param width		Width that the image will end up being, in pixels
	*  @param height	Height that the image will end up being, in pixels
	*/
	this.draw = function(context, x, y, width, height) {
		// Draws an image to a context
		if(!this.isLoaded) {
			// Draw something else
			context.save();
			context.fillStyle = '#f0f'; // pink
			context.fillRect(x, y, width, height);
			context.restore();
		}
		else {
			// Draw the loaded texture
			context.drawImage(this.image, x, y, width, height);
		}
	}
}
