var dark = true;
var $body = document.querySelector('body');
var $button = document.querySelector('button');

$button.addEventListener('click', function (e) {
  if (dark === true) {
    $body.className = 'light';
    $button.className = 'lgt-button';
    dark = false;
  } else if (dark === false) {
    $body.className = 'dark';
    $button.className = 'drk-button';
    dark = true;
  }
});
