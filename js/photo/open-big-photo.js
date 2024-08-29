import {descriptionPhoto} from './create-description-photo';
import {createBigPhoto, onBigPhotoEscKeydownClose, closeBigPhoto} from './create-big-photo';

const bigPhotoBlock = document.querySelector('.big-picture');
const pictureCollection = document.querySelector('.pictures');
const body = document.querySelector('body');
const buttonClose = bigPhotoBlock.querySelector('.cancel');

const openBigPhoto = function(evt) {
  const pictureElement = evt.target.closest('.picture');
  if (pictureElement) {
    evt.preventDefault();
    const photoId = pictureElement.querySelector('.picture__img').dataset.id;
    const objectPhoto = descriptionPhoto.find((item) => photoId === String(item.id));
    bigPhotoBlock.classList.remove('hidden');
    createBigPhoto(objectPhoto);
    body.classList.add('modal-open');
    buttonClose.addEventListener('click', closeBigPhoto);
    document.addEventListener('keydown', onBigPhotoEscKeydownClose);
  }
};

pictureCollection.addEventListener('click', openBigPhoto);


export {openBigPhoto};
