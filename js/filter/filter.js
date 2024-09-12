import { shuffle, debounce } from '../util.js';
import { createDescriptionPhoto } from '../photo/add-user-photo-main-page.js';

const filters = document.querySelector('.img-filters');
const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');

const removeActiveClassFromButtons = () => {
  const filterButtons = document.querySelectorAll('.img-filters__button');
  filterButtons.forEach((button) => {
    button.classList.remove('img-filters__button--active');
  });
};

const showFilterContainer = () => {
  filters.classList.remove('img-filters--inactive');
};

const clearAddedPhotos = () => {
  const addedPhotos = document.querySelectorAll('a.picture');
  addedPhotos.forEach((photo) => photo.remove());
};

const updatePhotoDisplay = (array, button) => {
  removeActiveClassFromButtons();
  clearAddedPhotos();
  debounce(createDescriptionPhoto(array), 500);
  button.classList.add('img-filters__button--active');
};

const showfilterRandom = (array, button) => {
  const shuffleArrayRandom = array.slice();
  shuffle(shuffleArrayRandom);
  const arrayRandom = shuffleArrayRandom.slice(0, 10);
  updatePhotoDisplay(arrayRandom, button);
};

const showfilterDiscussed = (array, button) => {
  const arrayDiscussed = array.slice().sort((a, b) => b.comments.length - a.comments.length);
  updatePhotoDisplay(arrayDiscussed, button);
};


const showfilterDefault = (array, button) => {
  clearAddedPhotos();
  createDescriptionPhoto(array);
  removeActiveClassFromButtons();
  button.classList.add('img-filters__button--active');
};


const filterPhoto = (data) => {
  const arrayDefault = data;

  filterDefault.addEventListener('click', () => {
    showfilterDefault(arrayDefault, filterDefault);
  });
  filterRandom.addEventListener('click', () => {
    showfilterRandom(arrayDefault, filterRandom);
  }
  );
  filterDiscussed.addEventListener('click', () => {
    showfilterDiscussed(arrayDefault, filterDiscussed);
  }
  );

  // filterDefault.addEventListener('click', () => {
  //   showfilterDefault(arrayDefault);
  // });
  // filterRandom.addEventListener('click', () => {
  //   showfilterRandom(arrayDefault);
  // }
  // );
  // filterDiscussed.addEventListener('click', () => {
  //   showfilterDiscussed(arrayDefault);

  // }
  // );
};


export {showFilterContainer, filterPhoto};
// export {showFilterContainer};
// const filt = {
//   filterDefault: (data) => data,
//   filterDiscussed: (data) => data.slice().sort((a, b) => b.comments.length - a.comments.length),
//   filterRandom: (data) => shuffle(data.slice())
// }

// const onClick = (data, filter, button) => {
// console.log(data)
// console.log(filter)
// console.log(button)
// }
// const o = [filterDefault, filterRandom, filterDiscussed];
// o.forEach((n, i) => n.addEventListener('click', () => onClick(arrayDefault, o[i], n)));
