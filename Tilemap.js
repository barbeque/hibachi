// Basic tile map useful for prototyping.
// Requires hibachi DataStructures.js

/**
	Creates a new tile map.
	@constructor
	@class	A type containing a 2D tile map. Requires DataStructures.js
	@param columns			The number of columns in the map.
	@param rows				The number of rows in the map.
	@param tileWidth		The width (in pixels) of each tile.
	@param tileHeight		The height (in pixels) of each tile.
	@param userRenderTile	Optional. User function to control tile rendering.
*/
Tilemap = function(columns, rows, tileWidth, tileHeight, userRenderTile) {
	this.renderTile = userRenderTile || defaultRenderTile;

	this.columns = columns;
	this.rows = rows;
	this.tileWidth = tileWidth || 32;
	this.tileHeight = tileHeight || 32;

	if(!make2DArray) {
		throw new ReferenceError("make2DArray not defined. Is DataStructures.js included?")
	}
	this.map = make2DArray(this.columns, this.rows);
	for(var r = 0; r < this.rows; ++r) {
		for(var c = 0; c < this.columns; ++c) {
			this.map[r][c] = 0;
		}
	}

	/**
		Draw the tilemap to screen.
		@param canvas		html5 canvas.
		@param context		html5 2d context.
		@param scrollX		The x-offset from top left the scrolling is at.
		@param scrollY		The y-offset from top left the scrolling is at.
		@param tileImages	An object containing tile images. Passed verbatim to the render tile function.
	*/
	this.draw = function(canvas, context, scrollX, scrollY, tileImages) {
		var startX = Math.floor(Math.max(0, scrollX / this.tileWidth));
		var startY = Math.floor(Math.max(0, scrollY / this.tileHeight));
		var finishX = Math.floor(Math.min(this.columns - 1, startX + (canvas.width) / this.tileWidth));
		var finishY = Math.floor(Math.min(this.rows - 1, startY + (canvas.height) / this.tileHeight));

		for(var r = startY; r <= finishY; ++r) {
			for(var c = startX; c <= finishX; ++c) {
				var index = this.map[r][c];
				var screenX = (c - startX) * this.tileWidth;
				var screenY = (r - startY) * this.tileHeight;

				this.renderTile(context, index, tileImages, screenX, screenY, this.tileWidth, this.tileHeight);
			}
		}
	}

	/**
		Write an index to a large rectangular area (including a line).
		@param startX			Start x index on the map.
		@param startY			Start y index on the map.
		@param finishX			Finish x index on the map (inclusive).
		@param finishY			Finish y index on the map (inclusive).
		@param indexToFillWith	The tile index to write to the map
								between the coordinates given.
	*/
	this.fillRect = function(startX, startY, finishX, finishY, indexToFillWith) {
		var c1 = Math.floor(Math.min(startX, finishX));
		var c2 = Math.floor(Math.max(startX, finishX));
		var r1 = Math.floor(Math.min(startY, finishY));
		var r2 = Math.floor(Math.max(startY, finishY));

		c1 = Math.max(0, Math.min(this.columns - 1, c1));
		c2 = Math.max(0, Math.min(this.columns - 1, c2));
		r1 = Math.max(0, Math.min(this.rows - 1, r1));
		r2 = Math.max(0, Math.min(this.rows - 1, r2));

		for(var r = r1; r <= r2; ++r) {
			for(var c = c1; c <= c2; ++c) {				
				this.map[r][c] = indexToFillWith;
			}
		}
	}

	function defaultRenderTile(context, tileIndex, tileImages, screenX, screenY, width, height) {
		var t = tileImages[tileIndex];
		t.draw(context, screenX, screenY, width, height);
	}
}