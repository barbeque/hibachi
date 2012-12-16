InputResponder = function(keyboard) {
	this.keyboard = keyboard;
	this.callbacks = {};

	this.onKey = function(keycode, callback) {
		this.callbacks[keycode] = callback;
	}
	this.onUpCursorKey = function(callback) {
		setResponderForKey(keyboard.upArrowKeyCode, callback);
	}
	this.onDownCursorKey = function(callback) {
		setResponderForKey(keyboard.downArrowKeyCode, callback);
	}
	this.onLeftCursorKey = function(callback) {
		setResponderForKey(keyboard.leftArrowKeyCode, callback);
	}
	this.onRightCursorKey = function(callback) {
		setResponderForKey(keyboard.rightArrowKeyCode, callback);
	}
}