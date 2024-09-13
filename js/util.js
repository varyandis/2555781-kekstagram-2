// import { onbuttonClose, onEscapeClose } from './validation/create-upload-photo';

// const templateAlertErrorElement = document.querySelector('#error').content.querySelector('.error');
// const templateAlertSuccessElement = document.querySelector('#success').content.querySelector('.success');
// const templateAlertElement = document.querySelector('#data-error').content.querySelector('.data-error');
// const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';

// const closeAlert = (buttonElement, innerElement, containerElement) => {
//   const onOutsideClick = (evt) => {
//     if (!innerElement.contains(evt.target)) {
//       onAlertContainerClose();
//     }
//   };

//   const onEscapeKeyPress = (evt) => {
//     if (isEscapeKey) {
//       evt.preventDefault();
//       onAlertContainerClose();
//     }
//   };

//   function onAlertContainerClose () {
//     containerElement.remove();
//     document.removeEventListener('keydown', onEscapeKeyPress);
//     document.removeEventListener('click', onOutsideClick);
//     document.addEventListener('keydown', onEscapeClose);
//   }

//   buttonElement.addEventListener('click', onAlertContainerClose);
//   document.addEventListener('keydown', onEscapeKeyPress);
//   document.addEventListener('click', onOutsideClick);
// };


// const showAlertError = () => {
//   document.removeEventListener('keydown', onEscapeClose);

//   const errorContainer = templateAlertErrorElement.cloneNode(true);
//   document.body.append(errorContainer);

//   const errorButton = errorContainer.querySelector('.error__button');
//   const errorInner = errorContainer.querySelector('.error__inner');

//   closeAlert(errorButton, errorInner, errorContainer);
// };


// const showAlertSuccess = () => {
//   onbuttonClose();

//   const successContainer = templateAlertSuccessElement.cloneNode(true);
//   document.body.append(successContainer);

//   const successButton = successContainer.querySelector('.success__button');
//   const successInner = successContainer.querySelector('.success__inner');

//   closeAlert(successButton, successInner, successContainer);
// };


// const showAlertDowload = () => {
//   const alertContainer = templateAlertElement.cloneNode(true);
//   document.body.append(alertContainer);

//   setTimeout(() => {
//     alertContainer.remove();
//   }, ALERT_SHOW_TIME);
// };

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
};


export {isEscapeKey, debounce, shuffle};
