/**
	Creates an instance of Keyboard.
	@constructor
	@this {Keyboard}
*/
Keyboard = function() {
	this.keyDownState = new Array();

	for(i = 0; i < 255; i++) {
		// Assuming only 255 key codes
		this.keyDownState[i] = false;
	}

	this.upArrowKeyCode = 38;
	this.downArrowKeyCode = 40;
	this.leftArrowKeyCode = 37;
	this.rightArrowKeyCode = 39;
	
	/**
		Private event handler for a key being pressed.
		@param e key down event
	*/
	this.onKeyDown = function(e) {
		window.keyboardHandler.keyDownState[e.keyCode] = true;
	}
	
	/**
		Private event handler for a key being released.
		@param e key up event
	*/
	this.onKeyUp = function(e) {
		// It's assumed that 'this' is a DOMWindow. There's a hack for Jasmine to work properly
		window.keyboardHandler.keyDownState[e.keyCode] = false;
	}

	window.addEventListener('keydown', this.onKeyDown, true);
	window.addEventListener('keyup', this.onKeyUp, true);
	window.keyboardHandler = this;
}

/**
	Tells us whether or not a key is currently down.
	@param keyId	The key code for the key (e.g. 38)
	@return		True if the key is down.
*/
Keyboard.prototype.isKeyDown = function(keyId) {
	return this.keyDownState[keyId];
}
