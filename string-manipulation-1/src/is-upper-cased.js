/* exported isUpperCased */
// if all characters in word are upper cased after function, it is true, if not
// it is false
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
