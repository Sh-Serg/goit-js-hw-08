import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

initForm();

feedbackForm.addEventListener('submit', onFeedbackFormSubmit);
feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));

function onFeedbackFormSubmit(e) {
  e.preventDefault();

  if (
    feedbackForm.elements.email.value === '' ||
    feedbackForm.elements.message.value === ''
  ) {
    return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  }

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
}

function onFeedbackFormInput(e) {
  let savedForm = localStorage.getItem(STORAGE_KEY);
  savedForm = savedForm ? JSON.parse(savedForm) : {};

  savedForm[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
}

function initForm() {
  let savedForm = localStorage.getItem(STORAGE_KEY);

  if (savedForm) {
    savedForm = JSON.parse(savedForm);

    Object.entries(savedForm).forEach(([name, value]) => {
      feedbackForm.elements[name].value = value;
    });
  }
}

//
//
//
//
//
//
//
// ! Розробка коду
// import throttle from 'lodash.throttle';

// const STORAGE_KEY = 'feedback-form-state';

// const feedbackForm = document.querySelector('.feedback-form');
// // const inputForm = {};
// // console.log(feedbackForm);

// initForm();

// feedbackForm.addEventListener('submit', onFeedbackFormSubmit);

// feedbackForm.addEventListener('input', throttle(onFeedbackFormInput, 500));

// // feedbackForm.addEventListener('submit', e => {
// //   e.preventDefault();
// //   // console.log(feedbackForm.elements.email.value);
// //   // console.log(feedbackForm.elements.message.value);
// //   // const formData = new FormData(feedbackForm);
// //   // formData.forEach((value, name) => console.log(value, name));
// //   console.log({
// //     email: feedbackForm.elements.email.value,
// //     message: feedbackForm.elements.message.value,
// //   });
// //   if (
// //     feedbackForm.elements.email.value === '' ||
// //     feedbackForm.elements.message.valuee === ''
// //   ) {
// //     return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
// //   }

// //   localStorage.removeItem('form');

// //   e.currentTarget.reset();
// // });

// function onFeedbackFormSubmit(e) {
//   e.preventDefault();

//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

//   if (
//     feedbackForm.elements.email.value === '' ||
//     feedbackForm.elements.message.valuee === ''
//   ) {
//     return alert(`Будь ласка, заповніть всі обов'язкові поля.`);
//   }

//   localStorage.removeItem(STORAGE_KEY);
//   e.currentTarget.reset();
// }

// // feedbackForm.addEventListener('input', e => {
// //   // console.log(e.target.name);
// //   // console.log(e.target.value);

// //   // inputForm[e.target.name] = e.target.value;
// //   // console.log(inputForm);
// //   // localStorage.setItem('form', JSON.stringify(inputForm));

// //   let savedForm = localStorage.getItem(STORAGE_KEY);

// //   savedForm = savedForm ? JSON.parse(savedForm) : {};

// //   // console.log(savedForm);
// //   // if (savedForm) {
// //   //   savedForm = JSON.parse(savedForm);
// //   // } else {
// //   //   savedForm = {};
// //   // }
// //   savedForm[e.target.name] = e.target.value;
// //   localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));

// //   // console.log(savedForm);
// // });

// function onFeedbackFormInput(e) {
//   let savedForm = localStorage.getItem(STORAGE_KEY);
//   savedForm = savedForm ? JSON.parse(savedForm) : {};

//   savedForm[e.target.name] = e.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(savedForm));
// }

// function initForm() {
//   let savedForm = localStorage.getItem(STORAGE_KEY);
//   // console.log(savedForm);
//   if (savedForm) {
//     savedForm = JSON.parse(savedForm);
//     // console.log(savedForm);
//     // console.log(Object.entries(savedForm));
//     Object.entries(savedForm).forEach(([name, value]) => {
//       // console.log(name, value);
//       // console.log(feedbackForm.elements);
//       // inputForm[name] = value;
//       feedbackForm.elements[name].value = value;
//     });
//   }
// }
