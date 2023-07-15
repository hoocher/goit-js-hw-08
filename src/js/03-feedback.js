import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailInputEl = document.querySelector('[name=email]');
const messageInputEl = document.querySelector('[name=message]');
// console.log(messageInputEl);

function checkLocalStorage() {
  if (localStorage.getItem('feedback-form-state')) {
    const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
    const parsedData = JSON.parse(dataFromLocalStorage);
    emailInputEl.value = parsedData.email;
    messageInputEl.value = parsedData.message;
  }
}

function inputFunc() {
  const formData = {
    email: emailInputEl.value,
    message: messageInputEl.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitFunc(event) {
  const dataFromLocalStorage = localStorage.getItem('feedback-form-state');
  console.log((parsedData = JSON.parse(dataFromLocalStorage)));
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  event.preventDefault();
}

checkLocalStorage();

formEl.addEventListener('input', throttle(inputFunc, 1000));
formEl.addEventListener('submit', submitFunc);
