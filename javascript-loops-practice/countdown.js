/* exported countdown */

function countdown(number) {
  var $number = [];
  while (number >= 0) {
    $number.push(number);
    number--;
  }
  return $number;
}
