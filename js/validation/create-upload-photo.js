import { isEscapeKey } from '../util.js';
import { resetSlider } from '../photo/edite-photo/nouislider.js';
import { pristine } from './validation.js';

const formElement = document.querySelector('.img-upload__form');
const uploadPhotoInputElement = formElement.querySelector('.img-upload__input');
const editPhotoOverlayElement = formElement.querySelector('.img-upload__overlay');
const closeButtonElement = formElement.querySelector('.img-upload__cancel');
const commentsFieldElement = formElement.querySelector('.text__description');
const hashtagsFieldElement = formElement.querySelector('.text__hashtags');

const closeEditPhotoOverlay = () => {
  editPhotoOverlayElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
  formElement.reset();
  resetSlider();
  pristine.reset();
};

const onEscapeKeyCloseOverlay = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditPhotoOverlay();
  }
};

const onPhotoOverlayOpen = () => {
  editPhotoOverlayElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  closeButtonElement.addEventListener('click', closeEditPhotoOverlay);
  document.addEventListener('keydown', onEscapeKeyCloseOverlay);
};


const focusFieldElements = [commentsFieldElement, hashtagsFieldElement];

focusFieldElements.forEach((fieldElement) => {
  fieldElement.addEventListener('focus',() => {
    document.removeEventListener('keydown', onEscapeKeyCloseOverlay);
  });
  fieldElement.addEventListener('blur',() => {
    document.addEventListener('keydown', onEscapeKeyCloseOverlay);
  });
});


uploadPhotoInputElement.addEventListener('change', onPhotoOverlayOpen);

export {closeEditPhotoOverlay as onbuttonClose, onEscapeKeyCloseOverlay as onEscapeClose};
