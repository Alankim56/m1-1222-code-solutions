/* exported reverseWord */
// create empty variable
// use for loop to iterate over strings
function reverseWord(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    newWord = word[i] + newWord;
  }
  return newWord;
}
