describe("Keyboard", function() {
		beforeEach(function() {
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
			});
		it("let me press and release", function() {
			var keyboard = new Keyboard();
			var e = new Object();
			e.keyCode = 38;

			expect(keyboard.isKeyDown(38)).toEqual(false);
			keyboard.onKeyDown(e);
			expect(keyboard.isKeyDown(38)).toEqual(true);
			keyboard.onKeyUp(e);
			expect(keyboard.isKeyDown(38)).toEqual(false);
		});
});
