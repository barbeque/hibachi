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
		this.keyboardState.keyDownState[e.keyCode] = true;
	}
	
	/**
		Private event handler for a key being released.
		@param e key up event
	*/
	this.onKeyUp = function(e) {
		// "this" refers to window in this case
		this.keyboardState.keyDownState[e.keyCode] = false;
	}

	/**
		Tells us whether or not a key is currently down.
		@param keyId	The key code for the key (e.g. 38)
		@return		True if the key is down.
	*/
	this.isKeyDown = function(keyId) {
		return this.keyDownState[keyId];
	}
	
	window.addEventListener('keydown', this.onKeyDown, true);
	window.addEventListener('keyup', this.onKeyUp, true);
	window.keyboardState = this;
}
