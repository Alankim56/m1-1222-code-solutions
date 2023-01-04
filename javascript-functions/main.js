function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

console.log('value of convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log('value of greet:', greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('value of getArea:', getArea(17, 42));

function getFirstName(person) {
  return person.firstName;
}

console.log('value of firstName:', getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('value of lastElement:', getLastElement(['propane', 'and', 'propane', 'accessories']));
