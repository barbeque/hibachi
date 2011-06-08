describe("DataStructures", function() {
		beforeEach(function() {
			});

		it("should be able to create a 2D array of square size", function() {
			var arr = make2DArray(4, 4);
			expect(arr.length).toEqual(4);
			expect(arr[0].length).toEqual(4);		
			expect(arr[1].length).toEqual(4);		
			});
		it("should be able to create a 2D array of nonsquare size", function() {
			var arr = make2DArray(5, 4);
			expect(arr.length).toEqual(4);
			expect(arr[0].length).toEqual(5);		
			expect(arr[1].length).toEqual(5);		
			});
		it("should make 2D arrays you can write to", function() {
			var arr = make2DArray(4, 4);
			arr[0][1] = 6;
			arr[1][0] = 27;
			expect(arr[0][1]).toEqual(6);
			expect(arr[1][0]).toEqual(27);
			});
		it("should be able to delete an array element", function() {
			var test = ["Orange", "Banana", "Grape"];
			expect(test.length).toEqual(3);
			arrayRemove(test, "Orange");
			expect(test.length).toEqual(2);
			for(i = 0; i < test.length; i++) { 
				expect(test[i]).toNotEqual("Orange");
			}
			expect(test[0]).toEqual("Banana");
			expect(test[1]).toEqual("Grape");
			});
		it("should be able to ignore trying to delete something that isn't there", function() {
			var test = ["Orange", "Banana", "Grape"];
			arrayRemove(test, "Kumquat");
			expect(test.length).toEqual(3);
			});
});
