describe("Animation", function() {
		beforeEach(function() {
			});

		it("should loop over at the end of the animation", function() {
			var frameMocks = [ 1, 2, 3, 4 ];
			var animation = new Animation();
			animation.setFrames(frameMocks);
			animation.frameInterval = 1.0;
			
			expect(animation.getFrameAt(0.0)).toEqual(1);
			expect(animation.getFrameAt(0.5)).toEqual(1);
			expect(animation.getFrameAt(1.0)).toEqual(2);
			expect(animation.getFrameAt(1.5)).toEqual(2);
			expect(animation.getFrameAt(2.0)).toEqual(3);
			expect(animation.getFrameAt(2.5)).toEqual(3);
			expect(animation.getFrameAt(3.0)).toEqual(4);
			expect(animation.getFrameAt(3.5)).toEqual(4);
			expect(animation.getFrameAt(4.0)).toEqual(1);
			expect(animation.getFrameAt(4.5)).toEqual(1);
			expect(animation.getFrameAt(5.0)).toEqual(2);
			});
		it("should work even with just a single frame", function() {
			var animation = new Animation();
			var frames = [1];
			animation.setFrames(frames);
			animation.frameInterval = 0.5;
			
			for(i = 0.0; i < 15.0; i += 0.2) {
				expect(animation.getFrameAt(i)).toEqual(1);
			}	
		});
});
