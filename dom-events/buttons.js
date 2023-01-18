function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var newButton = document.querySelector('.click-button');
newButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

var newMouseOver = document.querySelector('.hover-button');
newMouseOver.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}
var newDoubleClick = document.querySelector('.double-click-button');
newDoubleClick.addEventListener('dblclick', handleDoubleClick);
