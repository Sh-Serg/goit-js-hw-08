import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
// const inputForm = {};
// console.log(feedbackForm);

initForm();

feedbackForm.addEventListener('submit', event => {
  event.preventDefault();
  // console.log(feedbackForm.elements.email.value);
  // console.log(feedbackForm.elements.message.value);
  // const formData = new FormData(feedbackForm);
  // formData.forEach((value, name) => console.log(value, name));
  console.log({
    email: feedbackForm.elements.email.value,
    message: feedbackForm.elements.message.value,
  });
  if (
    feedbackForm.elements.email.value === '' ||
    feedbackForm.elements.message.valuee === ''
  ) {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  }

  localStorage.removeItem('form');
  event.currentTarget.reset();
});

feedbackForm.addEventListener('input', e => {
  // console.log(e.target.name);
  // console.log(e.target.value);

  // inputForm[e.target.name] = e.target.value;
  // console.log(inputForm);
  // localStorage.setItem('form', JSON.stringify(inputForm));

  let savedForm = localStorage.getItem('form');

  savedForm = savedForm ? JSON.parse(savedForm) : {};

  // console.log(savedForm);
  // if (savedForm) {
  //   savedForm = JSON.parse(savedForm);
  // } else {
  //   savedForm = {};
  // }
  savedForm[e.target.name] = e.target.value;
  localStorage.setItem('form', JSON.stringify(savedForm));

  // console.log(savedForm);
});

function initForm() {
  let savedForm = localStorage.getItem('form');
  // console.log(savedForm);
  if (savedForm) {
    savedForm = JSON.parse(savedForm);
    // console.log(savedForm);
    // console.log(Object.entries(savedForm));
    Object.entries(savedForm).forEach(([name, value]) => {
      // console.log(name, value);
      // console.log(feedbackForm.elements);
      // inputForm[name] = value;
      feedbackForm.elements[name].value = value;
    });
  }
}
