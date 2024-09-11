import './scale.js';
import { onPhotoSliderChange } from './nouislider.js';

const effectListItems = document.querySelectorAll('.effects__radio');

effectListItems.forEach((elem) => {
  elem.addEventListener('change', onPhotoSliderChange);
});
