describe("Keyboard", function() {
		beforeEach(function() {
			});
		it("must initialize", function() {
			var keyboard = new Keyboard();
			for(i = 0; i < 255; i++) {
				expect(keyboard.isKeyDown(i)).toEqual(false);
			}
			delete keyboard;
		});

		it("should let me trigger the same key twice", function() {
			var keyboard = new Keyboard();
			var e = new Object(); // mock event message

			e.keyCode = 38;
			keyboard.onKeyDown(e);
			expect(keyboard.isKeyDown(38)).toEqual(true);
			expect(keyboard.isKeyDown(37)).toEqual(false);
			keyboard.onKeyDown(e);
			expect(keyboard.isKeyDown(38)).toEqual(true);
			delete keyboard;
			});
		it("lets me press and release", function() {
			var keyboard = new Keyboard();
			var e = new Object();

			e.keyCode = 38;

			expect(keyboard.isKeyDown(38)).toEqual(false);
			keyboard.onKeyDown(e);
			expect(keyboard.isKeyDown(38)).toEqual(true);
			keyboard.onKeyUp(e);
			expect(keyboard.isKeyDown(38)).toEqual(false);
			delete keyboard;
		});
});

function makeKeyDownObject(keyCode) {
	if(keyCode) {
		return { keyCode: keyCode };
	} else {
		fail("Something is wrong with makeKeyDownObject");
	}
}

describe("Keyboard.getCursorKeyVector", function() {
	var keyboard = {};
	beforeEach(function() {
		keyboard = new Keyboard();
	});
	afterEach(function() {
		delete keyboard;
	})

	it("returns <0, 0> vector by default", function() {
		var kv = keyboard.getCursorKeyVector();
		expect(kv.x).toEqual(0);
		expect(kv.y).toEqual(0);
	});

	function testUpKey(normalized) {
		var e = makeKeyDownObject(keyboard.upArrowKeyCode);

		// With up key held, it should be <0, -1>
		keyboard.onKeyDown(e);
		var kv = keyboard.getCursorKeyVector(normalized);
		expect(kv.x).toEqual(0);
		expect(kv.y).toEqual(-1);
		keyboard.onKeyUp(e);

		// With keys released, it should be <0, 0>
		kv = keyboard.getCursorKeyVector(normalized);
		expect(kv.x).toEqual(0);
		expect(kv.y).toEqual(0);
	}

	it("works for a single cursor key", function() {
		testUpKey(false);
	});

	it("works for a single cursor key with normalization", function() {
		testUpKey(true);
	});
});

describe("Keyboard.getCursorKeyVector with multiple keys", function() {
	var keyboard = new Keyboard();
	beforeEach(function() {
		keyboard = new Keyboard();
		// Hold down up + left
		keyboard.onKeyDown(makeKeyDownObject(keyboard.upArrowKeyCode));
		keyboard.onKeyDown(makeKeyDownObject(keyboard.leftArrowKeyCode));
	});
	afterEach(function() {
		delete keyboard;
	});

	it("should produce denormalized vector by default", function() {
		var kv = keyboard.getCursorKeyVector();
		expect(kv.x).toEqual(-1);
		expect(kv.y).toEqual(-1);
	});
	it("should produce a normalized vector when asked", function() {
		var kv = keyboard.getCursorKeyVector(true);
		var axis = -1 / Math.sqrt(2);
		expect(kv.x).toEqual(axis);
		expect(kv.y).toEqual(axis);
	});
});
