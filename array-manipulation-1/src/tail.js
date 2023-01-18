/* exported tail */
// use a for loop to go through 2nd element to last element in array
// add the elements to the newly created array
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
