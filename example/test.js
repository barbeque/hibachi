var streamy;
var canvas;
var context;

function main() {
	// Blahblah.
	streamy = new StreamedImage();
	streamy.image.src = "test.png";

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	// 20 fps
	setInterval(step, 1000 / 20);
}

// Invoked every step of the loop
function step() {
	// Stamp an example on there
	streamy.draw(context, 64, 64, 32, 32);
}
