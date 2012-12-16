InputResponder = function(keyboard) {
	this.keyboard = keyboard;
	this.callbacks = {};

	var onKey = function(keycode, callback) {
		this.callbacks[keycode] = callback;
	}
	var onUpCursorKey = function(callback) {
		setResponderForKey(keyboard.upArrowKeyCode, callback);
	}
	var onDownCursorKey = function(callback) {
		setResponderForKey(keyboard.downArrowKeyCode, callback);
	}
	var onLeftCursorKey = function(callback) {
		setResponderForKey(keyboard.leftArrowKeyCode, callback);
	}
	var onRightCursorKey = function(callback) {
		setResponderForKey(keyboard.rightArrowKeyCode, callback);
	}
}