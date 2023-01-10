/* exported isLowerCased */
// if all characters in word are lower cased after function, it is true, if not
// it is false
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
