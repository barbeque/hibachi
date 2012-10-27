hbSetup = function() {
	state = {
		interval: 1000 / 20, // 20 frames per second
		keyboard: new Keyboard(),
		frames: 0
	};

	state.canvas = document.getElementById('hbgame');
	state.context = state.canvas.getContext('2d');

	var stepStub = function() { step(state); };
	setInterval(stepStub, state.interval);
}

step = function(state) {
	state.context.save();

	state.context.fillStyle = "orange";
	state.context.fillRect(0, 0, state.canvas.width, state.canvas.height);

	state.context.restore();

	++state.frames;
	renderWrappedText("Frames: " + state.frames, 5, 15, state.canvas.width, 10, state.context);
}