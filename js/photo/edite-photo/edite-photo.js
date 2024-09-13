import './scale.js';
import { onPhotoSliderChange } from './nouislider.js';

const effectRadioElements = document.querySelectorAll('.effects__radio');

effectRadioElements.forEach((radioElement) => {
  radioElement.addEventListener('change', onPhotoSliderChange);
});
