// requires StreamedImage.js

SpriteSheet = function(imageUrl, spriteWidth, spriteHeight) {
	if(imageUrl == undefined) {
		throw new Error("Need to set imageUrl");
	}
	if(spriteWidth == undefined || spriteWidth < 1) {
		throw new Error("Need to set spriteWidth");
	}
	if(spriteHeight == undefined || spriteHeight < 1) {
		throw new Error("Need to set spriteHeight");
	}
	
	this.image = new StreamedImage();
	this.image.image.src = imageUrl;
	this.spriteWidth = spriteWidth;
	this.spriteHeight = spriteHeight;
	
	this.draw = function(context, spriteIndex, destinationX, destinationY, destinationWidth, destinationHeight) {
		var sourcePosition = this.calculateSourcePosition(spriteIndex);
		
		this.image.drawPortion(context, sourcePosition.x, sourcePosition.y, this.spriteWidth, this.spriteHeight, destinationX, destinationY, destinationWidth, destinationHeight);
	}
	
	this.calculateSourcePosition = function(index) {
		if(this.image.isLoaded) {
			// Some caching might be nice eventually
			var spritesPerRow = Math.floor(this.image.image.width / this.spriteWidth);
			var rowsPerSheet = Math.floor(this.image.image.height / this.spriteHeight);
			
			var sourceX = Math.floor(index % spritesPerRow) - 1;
			var sourceY = Math.floor(index / spritesPerRow);
			
			return { x: sourceX * this.spriteWidth, y: sourceY * this.spriteHeight };
		}
		else {
			// We have no idea how big it is so can't compute indices
			return { x: 0, y: 0 };
		}
	}
}