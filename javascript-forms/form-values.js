var theForm = document.querySelector('#contact-form');
theForm.addEventListener('submit', logSubmit);

function logSubmit(event) {
  event.preventDefault();
  var messageData = {
    $name: theForm.elements.name.value,
    $email: theForm.elements.email.value,
    $message: theForm.elements.message.value
  };
  console.log(messageData);
  theForm.reset();
}
