/* exported todos */

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');
if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', function (e) {
  var todosJSON = JSON.stringify(todos);
  var $storage = window.localStorage;
  $storage.setItem('javascript-local-storage', todosJSON);
});
