var renderWrappedText = function(text, x, y, maximumWidth, lineHeight, context) {
	var words = text.split(' ');
	var line = "";

	for(var i = 0; i < words.length; ++i) {
		var probeLine = line + words[i] + " ";
		var size = context.measureText(probeLine);
		if(size.width > maximumWidth) {
			// draw the completed line, break to the next line
			context.fillText(line, x, y);
			line = words[i] + " ";
			y += lineHeight;
		}
		else {
			line = probeLine;
		}
	}
	// Fill in whatever is left
	context.fillText(line, x, y);
};