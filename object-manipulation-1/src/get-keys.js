/* exported getKeys */
// assign a new function as well as a variable for new array
// use a for statement to go through all properties
// return the newly created array
function getKeys(object) {
  var newArray = [];
  for (var property in object) {
    newArray.push(property);
  }
  return newArray;
}
