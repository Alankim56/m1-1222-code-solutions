/* exported reverse */
// after creating new array function, create a storage for a new array
// using a for loop, go through the last element towards the first
// add elements to the new array
function reverse(array) {
  var revArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  return revArray;
}
