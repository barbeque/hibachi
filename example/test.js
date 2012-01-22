var firstFrame;
var secondFrame;
var animation;
var canvas;
var context;
var spriteSheet;

var interval = 1000/20;
var x = 64.0
var y = 64.0
var dx = 450.2
var dy = -50.4

var t = 0;

var keyboard;

function main() {
	// Blahblah.
	frames = new Array();
	
	firstFrame = new StreamedImage();
	firstFrame.image.src = "test.png";
	frames.push(firstFrame);
	
	secondFrame = new StreamedImage();
	secondFrame.image.src = "test2.png";
	frames.push(secondFrame);
	
	spriteSheet = new SpriteSheet("oddball-bosses.png", 16, 16);
	
	animation = new Animation();
	animation.setFrames(frames);

	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");

	keyboard = new Keyboard();

	// 20 fps
	setInterval(step, interval);
}

// Invoked every step of the loop
function step() {
	var secs = interval / 1000.0;
	t += secs;

	// Wipe out the screen
	context.save();
	context.fillStyle = "white";
	context.fillRect(0, 0, canvas.width, canvas.height);
	context.restore();

	// Draw a quickie frame around it
	context.moveTo(0, 0);
	context.lineTo(canvas.width, 0);
	context.lineTo(canvas.width, canvas.height);
	context.lineTo(0, canvas.height);
	context.lineTo(0, 0);
	context.stroke();
	
	// Handle ball bouncing
	if(y + 32 >= canvas.height) {
		// Apply bounce
		y = (canvas.height - 33);
		dy = -dy;
	}
	else if(y <= 0) {
		y = 1;
		dy = -dy;
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

	// Let the keyboard ruin it for you
	var keyboardAcceleration = 200.5;
	if(keyboard.isKeyDown(keyboard.upArrowKeyCode)) {
		dy -= keyboardAcceleration * secs;
	}
	else if(keyboard.isKeyDown(keyboard.downArrowKeyCode)) {
		dy += keyboardAcceleration * secs;
	}
	if(keyboard.isKeyDown(keyboard.leftArrowKeyCode)) {
		dx -= keyboardAcceleration * secs;
	}
	else if(keyboard.isKeyDown(keyboard.rightArrowKeyCode)) {
		dx += keyboardAcceleration * secs;
	}
	
	// Draw current frame of the animation on there
	var currentFrame = animation.getFrameAt(t);
	currentFrame.draw(context, x, y, 32, 32);
	
	// Draw the sprite sheet somewhere
	spriteSheet.draw(context, 6, x + 32, y + 32, 64, 64);
}
