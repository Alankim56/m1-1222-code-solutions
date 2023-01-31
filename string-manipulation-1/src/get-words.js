/* exported getWords */
// use spaces to separate words within array
function getWords(string) {
  var word = string.split(' ');
  if (string === '') {
    word = [];
  }
  return word;
}
