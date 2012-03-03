describe("SpriteSheet", function() {
		beforeEach(function() {
			});
		// basic construction
		it("should throw an error if all constructor arguments are undefined", function() {
			expect(function() { new SpriteSheet() }).toThrow(new Error("Need to set imageUrl"));
		});
		it("should throw an error if spriteWidth is undefined or too small", function() {
			expect(function() { new SpriteSheet("dummy.png") }).toThrow(new Error("Need to set spriteWidth"));
			expect(function() { new SpriteSheet("dummy.png", -30) }).toThrow(new Error("Need to set spriteWidth"));
		});
		it("should throw an error if spriteHeight is undefined or too small", function() {
			expect(function() { new SpriteSheet("dummy.png", 30) }).toThrow(new Error("Need to set spriteHeight"));
			expect(function() { new SpriteSheet("dummy.png", 30, -30) }).toThrow(new Error("Need to set spriteHeight"));
		});
		// index -> sprite sheet position calculator
		it("should calculate a non-negative source position for the index of zero", function() {
			var spriteSheet = new SpriteSheet("dummy.png", 32, 32);
			spriteSheet.image = { isLoaded: true, image: { width: 64, height: 64 } };
			var calculated = spriteSheet.calculateSourcePosition(0);
			expect(calculated.x).toBeGreaterThan(-1); // can't be negative
			expect(calculated.y).toBeGreaterThan(-1); // can't be negative
		});
		it("should calculate a non-zero source position for an index of one", function() {
			var spriteSheet = new SpriteSheet("dummy.png", 32, 32);
			spriteSheet.image = { isLoaded: true, image: { width: 64, height: 64 } };
			var calculated = spriteSheet.calculateSourcePosition(1);
			expect(calculated.x).toEqual(32); // has to be to the right
			expect(calculated.y).toEqual(0); // can't be negative
		});
		it("should break to a new line properly", function() {
			var spriteSheet = new SpriteSheet("dummy.png", 32, 32);
			spriteSheet.image = { isLoaded: true, image: { width: 64, height: 64 } };
			var calculated = spriteSheet.calculateSourcePosition(2);	
			expect(calculated.x).toEqual(0);
			expect(calculated.y).toEqual(32);
		});
		it("should return valid coordinates all the way to the end of the available sprites", function() {
			var spriteSheet = new SpriteSheet("dummy.png", 32, 32);
			spriteSheet.image = { isLoaded: true, image: { width: 64, height: 64 } };
			
			for(var i = 0; i < 4; i++) {
				var pos = spriteSheet.calculateSourcePosition(i);
				expect(pos.x).toBeGreaterThan(-1);
				expect(pos.x).toBeLessThan(65);
				expect(pos.y).toBeGreaterThan(-1);
				expect(pos.y).toBeLessThan(65);
			}
		});
		it("should throw an error if the provided index is negative", function() {
			var spriteSheet = new SpriteSheet("dummy.png", 32, 32);
			spriteSheet.image = { isLoaded: true, image: { width: 64, height: 64 } };
			expect(function() { spriteSheet.calculateSourcePosition(-1) }).toThrow(new Error("Cannot have a negative index"));
		});
		it("should throw an error if the provided index is outside the bounds of the image", function() {
			var spriteSheet = new SpriteSheet("dummy.png", 32, 32);
			spriteSheet.image = { isLoaded: true, image: { width: 64, height: 64 } };
			// maximum index: 3
			expect(function() { spriteSheet.calculateSourcePosition(4) }).toThrow(new Error("Index is above the maximum of 3"));
		});
});
