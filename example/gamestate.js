function main() {
	// Create game state object
	state = { };
	state.keyboard = new Keyboard();
	state.canvas = document.getElementById("canvas");
	state.context = canvas.getContext("2d");

	var interval = 1000 / 20;
	var f = function() { step(state) };
	setInterval(f, interval);
}

function step(state) {
	// clear screen
	state.context.save();
	state.context.fillStyle = "red";
	state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);
	state.context.restore();

	// tell if space is down
	if(state.hotKeyDown) {
		state.context.save();

		state.context.fillStyle = "orange";
		state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);

		state.context.restore();
	}
	
	// refresh output, showing that state continues between frames
	state.hotKeyDown = state.keyboard.isKeyDown(state.keyboard.upArrowKeyCode);
}
