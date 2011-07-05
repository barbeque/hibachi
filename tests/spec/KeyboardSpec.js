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
