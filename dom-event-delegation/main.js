var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target', event.target);
  console.log('event.target.tagName', event.target.tagName);
  if (event.target.tagname === 'BUTTON') {
    var parentElement = event.target.closest('.task-list-item');
    console.log(parentElement);
    parentElement.remove();
  }

});
