var streamy;
var canvas;
var context;

var interval = 1000/20;
var x = 64.0
var y = 64.0
var dx = 450.2
var dy = -50.4

function main() {
	// Blahblah.
	streamy = new StreamedImage();
	streamy.image.src = "test.png";

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	// 20 fps
	setInterval(step, interval);
}

// Invoked every step of the loop
function step() {
	var secs = interval / 1000.0;

	// Wipe out the screen
	var oldFill = context.fillStyle;
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.fillStyle = oldFill;
	
	// Handle ball bouncing
	if(y + 32 >= canvas.height) {
		// Apply bounce
		y = (canvas.height - 33);
		dy = -1 * dy;
	}
	else if(y <= 0) {
		y = 1;
		dy = -1 * dy;
	}
	else {
		// Apply speed
		y += dy * secs;
	}

	if(x + 32 >= canvas.width) {
		// Bounce again
		dx = -dx;
		x = canvas.width - 33;
	}
	else if(x <= 0) {
		dx = -dx;
		x = 1;
	}
	else {
		x += dx * secs;
	}
	
	// Stamp an example on there
	streamy.draw(context, x, y, 32, 32);
}
