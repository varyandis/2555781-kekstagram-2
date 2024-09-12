import { onbuttonClose, onEscapeClose } from './validation/create-upload-photo';

const templateAlertError = document.querySelector('#error').content.querySelector('.error');
const templateAlertSuccess = document.querySelector('#success').content.querySelector('.success');
const templateAlert = document.querySelector('#data-error').content.querySelector('.data-error');
const ALERT_SHOW_TIME = 5000;

const isEscapeKey = (evt) => evt.key === 'Escape';


const closeAlert = (button, inner, container) => {
  const onOutsideClick = (evt) => {
    if (!inner.contains(evt.target)) {
      onClose();
    }
  };

  const onEscPress = (evt) => {
    if (isEscapeKey) {
      evt.preventDefault();
      onClose();
    }
  };

  function onClose () {
    container.remove();
    document.removeEventListener('keydown', onEscPress);
    document.removeEventListener('click', onOutsideClick);
    document.addEventListener('keydown', onEscapeClose);
  }

  button.addEventListener('click', onClose);
  document.addEventListener('keydown', onEscPress);
  document.addEventListener('click', onOutsideClick);
};


const showAlertError = () => {
  document.removeEventListener('keydown', onEscapeClose);

  const errorContainer = templateAlertError.cloneNode(true);
  document.body.append(errorContainer);

  const errorButton = errorContainer.querySelector('.error__button');
  const errorInner = errorContainer.querySelector('.error__inner');

  closeAlert(errorButton, errorInner, errorContainer);
};


const showAlertSuccess = () => {
  onbuttonClose();

  const successContainer = templateAlertSuccess.cloneNode(true);
  document.body.append(successContainer);

  const successButton = successContainer.querySelector('.success__button');
  const successInner = successContainer.querySelector('.success__inner');

  closeAlert(successButton, successInner, successContainer);
};


const showAlertDowload = () => {
  const alertContainer = templateAlert.cloneNode(true);
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

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

    // поменять элементы местами
    // мы используем для этого синтаксис "деструктурирующее присваивание"
    // подробнее о нём - в следующих главах
    // то же самое можно записать как:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
};


export {isEscapeKey, showAlertError, showAlertSuccess, showAlertDowload, debounce, shuffle};
