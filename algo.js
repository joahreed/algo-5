// Given array and an additional value, insert this value at the beginning of
// the array by making space for it at the beginning of the array.
// return the new length of the array.

// Do this without using any built-in array methods.
// */

var arr1 = [1, 2, 3];
var newItem1 =0;
var expected1 = 4;
// after function is called, arr1 should be:
var arr1Expected = [0, 1, 2, 3];

var arr2 = [];
var newItem2 = "a";
var expected2 = 1;
// after function is called, arr2 should be:
var arr2Expected = ["a"];

/**
* Shifts all items to the right by one to make space to add the given new item
* to the front of the given array.
* @param {Array<any>} items An array of any kind of items.
* @param {any} newItem To add to front.
* @returns {number} The new length of items.
*/
function unshift(items, newItem) {
  var newArr = [newItem]
  var iterator = 1;
for (var i = 0; i < items.length; i++) {
  // newArr.push(items[i])
  newArr[iterator] = items[i]
  iterator++
}
items = newArr
return items.length
}

/* 
Given an array, remove and
return the value at the beginning of the array and then shift the remaining items down to fill the empty space.

var arr1 = [1, 2, 3];
var expected1 = 1;
// after running function arr1 should now be:
var expectedArr1 = [2, 3];

var arr2 = ["a", "b", "c", "d"];
var expected2 = "a";
// after running function arr2 should now be:
var expectedArr2 = ["b", "c", "d"];

var arr3 = [];
var expected3 = undefined;
var expectedArr3 = [];

/**
* Shifts every item of the array to the left by 1 so that the first item is
* removed and returned.
* @param {Array<any>} items An array of any kind of items.
* @returns {any} The removed value previously at idx 0.
*/
function shift(items) {
var newArr = []
var itererator = 0;
for (var i = 1; i < items.length; i++) {
  // newArr.push(items[i])
  newArr[itererator] = items[i]
  itererator++
}
var value = items[0]
items = newArr
return value
} 