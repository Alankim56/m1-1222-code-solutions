var $button1 = document.querySelector('.button1');
var $main = document.querySelector('.main');
var $modal = document.querySelector('.modal');
var $button2 = document.querySelector('.button2');

$button1.addEventListener('click', modalOne);
function modalOne() {
  $modal.className = 'modal on';
  $main.className = 'main color';
}

$button2.addEventListener('click', modalTwo);
function modalTwo() {
  $modal.className = 'modal off';
  $main.className = 'main';
}
