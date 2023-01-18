/* exported compact */
// create an empty array assigned to a new variable
// use a for loop to determine if element in array is: false, null , true w/ isNaN method, -0 & 0, undefined or ''
// if they are not, add the elements to new array.
function compact(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== false &&
      array[i] !== null &&
      Number.isNaN(array[i]) !== true &&
      array[i] !== 0 &&
      array[i] !== undefined && array[i] !== '') {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
