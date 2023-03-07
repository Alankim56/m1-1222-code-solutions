var $letter = 0;
var $span = document.querySelectorAll('span');
var $word = $span[$letter];

document.addEventListener('keydown', function (event) {
  if ($word.textContent === event.key) {
    $word.className = 'green';
    $word = $span[$letter++];
    $word.className = 'word';
  } else {
    $word.className = 'red';
  }
});
