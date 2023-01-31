/* exported capitalize */
// capitalize entire word
// separately save the first letter of word
// separately make rest of word lower case
// add both words together
function capitalize(word) {
  word = word.toUpperCase();
  var wordFirst = word[0];
  var wordSecond = word.slice(1).toLowerCase();
  word = wordFirst + wordSecond;
  return word;
}
