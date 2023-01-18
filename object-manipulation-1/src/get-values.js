/* exported getValues */
// create new function as well as new array
// use a for statement for each value in object
// return new array
function getValues(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(object[property]);
  }
  return newArray;
}
