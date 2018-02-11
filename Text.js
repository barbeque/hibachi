/**
	Render text that wraps to a given x-location on screen
*/
var renderWrappedText = function(text, x, y, maximumWidth, lineHeight, context) {
	var words = text.split(' ');
	var line = "";

	for(var i = 0; i < words.length; ++i) {
		var probeLine = line + words[i] + " ";
		var size = context.measureText(probeLine);
		if(size.width > maximumWidth) {
			// draw the completed line, break to the next line
			renderText(line, x, y, context);
			line = words[i] + " ";
			y += lineHeight;
		}
		else {
			line = probeLine;
		}
	}
	// Fill in whatever is left
	renderText(line, x, y, context);
};

/**
	Normal text rendering, with no awareness of line wrapping
*/
var renderText = function(text, x, y, context) {
	context.fillText(text, x, y);
}
