// "streamed" images that provide a placeholder until they are
// fully loaded.

function StreamedImage () {
	this.isLoaded = false;
	this.image = new Image();
	this.image.onload = function() {
		// Informs us when the image is available.
		this.isLoaded = true;
	}
	this.draw = function(context, x, y, width, height) {
		// Draws an image to a context
		if(!this.isLoaded) {
			// Draw something else
			var oldFill = context.fillStyle;
			context.fillStyle = '#f0f'; // pink
			context.fillRect(x, y, width, height);
			context.fillStyle = oldFill;
		}
		else {
			// Draw the loaded texture
			context.drawImage(this.image, x, y, width, height);
		}
	}
}
