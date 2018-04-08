/**
*  Creates a streamed image with no resource URI set.
*  @class	A "streamed" image that provides a placeholder until it is
*  			fully loaded, and which contains convenience methods for
*  			rendering to a 2D canvas context.
*/
function StreamedImage () {
	this.isLoaded = false;
	this.image = new Image();
	this.image.owner = this;
	this.image.onload = function() {
		// Informs us when the image is available.
		this.owner.isLoaded = true;
	};
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
		if(this.isLoaded) {
			// Draw the loaded texture
			context.drawImage(this.image, x, y, width, height);
		}
		else {
			this.drawPlaceholder(context, x, y, width, height);
		}
	};

	this.drawPortion = function(context, srcX, srcY, srcW, srcH, destX, destY, destW, destH) {
		// Draws an image to a context
		if(this.isLoaded) {
			// Draw the loaded texture
			context.drawImage(this.image, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
		}
		else {
			this.drawPlaceholder(context, destX, destY, destW, destH);
		}
	};

	this.drawPlaceholder = function(context, x, y, width, height) {
		// Draw something else
		context.save();
		context.fillStyle = '#f0f'; // pink
		context.fillRect(x, y, width, height);
		context.restore();
	};
}

GetStreamedImage = function(imageUri) {
	var streamedImage = new StreamedImage();
	streamedImage.image.src = imageUri;
	return streamedImage;
};
