import { sliderSetting } from './data-filter.js';

const sliderElement = document.querySelector('.effect-level__slider');
const sliderConteiner = document.querySelector('.img-upload__effect-level');
const targetPhoto = document.querySelector('.img-upload__preview img');
const calculatedValueSlider = sliderConteiner.querySelector('.effect-level__value');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      return value;
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

const resetSlider = () => {
  sliderConteiner.classList.add('hidden');
  targetPhoto.style.filter = 'none';
};


const onPhotoSliderChange = (evt) => {
  const idEffect = evt.target.id;
  const effect = sliderSetting[idEffect];

  if (idEffect === 'effect-none') {
    resetSlider();
    return;
  }

  sliderConteiner.classList.remove('hidden');

  sliderElement.noUiSlider.updateOptions({
    range: {
      min: effect.minValue,
      max: effect.maxValue,
    },
    start: effect.maxValue,
    step: effect.step
  });

  sliderElement.noUiSlider.on('update', () => {
    const valueSlider = sliderElement.noUiSlider.get();
    targetPhoto.style.filter = `${effect.name}(${valueSlider}${effect.unit})`;
    calculatedValueSlider.setAttribute('value', valueSlider);
  });

};

export {onPhotoSliderChange, resetSlider};
