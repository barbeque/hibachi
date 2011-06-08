/**
* Remove an element from an array
* @param {list}		The array/list to remove the item from
* @param {toRemove}	The item to remove from the array
* @returns		An array/list without the item in it,
*			or the original array if the item could
*			not be found in the array.
*/
function arrayRemove(list, toRemove) {
	// find the item in the array
	for(i = 0; i < list.length; i++) {
		// splice out that index
		if(list[i] == toRemove) {
			return list.splice(i, 1);
		}
	}
	return list;
}
