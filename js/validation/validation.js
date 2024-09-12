import './create-upload-photo.js';
import { blockSubmitButton, unblockSubmitButton } from '../photo/edite-photo/block-button.js';
import { sendData } from '../api.js';

const formBlock = document.querySelector('.img-upload__form');
const hashtag = formBlock.querySelector('.text__hashtags');
const comment = formBlock.querySelector('.text__description');

const maxHashtag = 5;
const maxCharactersComments = 140;

const pristine = new Pristine(formBlock, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error'
});

const reghashtag = /^#[a-zа-яё0-9]{1,19}$|^$/i;

const validateHashtagCorrect = (values) => {
  let flag = true;
  for (const value of values.trim().split(' ')) {
    flag = reghashtag.test(value);
  }
  return flag;
};
const validateHashtagCount = (values) => {
  const hashtags = values.split(/\s+/).filter((tag) => tag.trim().length > 0);
  return hashtags.length <= maxHashtag;
};

const isAllSpaces = (values) => {
  const validPattern = /^(?![\s]*$).*|^$/;
  return validPattern.test(values);
};
const validateHashtagRepeat = (values) => {
  const arrayHashtags = values.toUpperCase().split(/\s+/).filter((tag) => tag.trim().length > 0);
  const duplicates = arrayHashtags.filter((elem, index, array) => array.indexOf(elem) !== index);
  return duplicates.length === 0;
};
const validateCommentLenght = (values) => values.length < maxCharactersComments;


pristine.addValidator(comment, validateCommentLenght, 'Максимальное количество символов в комментарии: 140');
pristine.addValidator(hashtag, isAllSpaces, 'Строка не может быть только из пробелов');
pristine.addValidator(hashtag, validateHashtagCount, 'Максимальное количество хештегов: 5');
pristine.addValidator(hashtag, validateHashtagRepeat, 'Хештеги не должны повторяться');
pristine.addValidator(hashtag, validateHashtagCorrect, 'Введен невалидный хештег');


// const validateHashtagCorrect = (values) => {
//   let flag = true;
//   for (const value of values.trim().split(' ')) {
//     flag = reghashtag.test(value);
//   }
//   return flag;
// };

// const validateHashtagCount = (values) => values.split(' ').length <= maxHashtag;

// const validateHashtagRepeat = (values) => {
//   const arrayHashtags = values.toUpperCase().split(' ');
//   const duplicates = arrayHashtags.filter((elem, index, array) => array.indexOf(elem) !== index);
//   return duplicates.length === 0;
// };

// const validateCommentLenght = (values) => values.length < maxCharactersComments;


// pristine.addValidator(hashtag, validateHashtagCount, 'Максимальное количество хештегов: 5');

// pristine.addValidator(hashtag, validateHashtagCorrect, 'Введен невалидный хештег');

// pristine.addValidator(hashtag, validateHashtagRepeat, 'Хештеги не должны повторяться');

// pristine.addValidator(comment, validateCommentLenght, 'Максимальное количество символов в комментарии: 140');

const setUserFormSubmit = (onSuccess, onError) => {
  formBlock.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target)).then(onSuccess).catch(onError)
        .finally(unblockSubmitButton);
    }
  });
};


export {setUserFormSubmit, pristine};
