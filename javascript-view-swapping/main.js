var $tabContainer = document.querySelector('.tab-container');
var $tabElements = document.querySelector('.tab');
var $viewElements = document.querySelector('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tabElements.length; i++) {
      if ($tabElements[i] === e.target) {
        $tabElements[i].className = 'active';
      } else {
        $tabElements[i].className = 'inactive';
      }
    }
    var $dataView = e.target.getAttribute('data-view');
    for (var x = 0; x < $viewElements.length; x++) {
      if ($viewElements[x].getAttribute('data-view') === $dataView) {
        $viewElements[x].className = 'view';
      } else {
        $viewElements[x].className = 'hidden';
      }
    }
  }
});
