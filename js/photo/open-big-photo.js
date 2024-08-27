import {descriptionPhoto} from './create-description-photo';
import {createBigPhoto, bigPhotoBlock} from './create-big-photo';
import { onBigPhotoEscKeydownClose, closeBigPhoto} from './close-big-photo';


const pictureCollection = document.querySelector('.pictures');
// const socialCommentCount = document.querySelector('.social__comment-count');
// const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const buttonClose = bigPhotoBlock.querySelector('.cancel');

const openBigPhoto = function(evt) {
  if (evt.target.matches('[class="picture__img"]')) {
    const objectPhoto = descriptionPhoto.find((item) => evt.target.dataset.id === String(item.id));
    bigPhotoBlock.classList.remove('hidden');
    createBigPhoto(objectPhoto);

    // socialCommentCount.classList.add('hidden');
    // commentsLoader.classList.add('hidden');
    body.classList.add('modal-open');

    buttonClose.addEventListener('click', closeBigPhoto);
    document.addEventListener('keydown', onBigPhotoEscKeydownClose);

  }


};

pictureCollection.addEventListener('click', openBigPhoto);


export {openBigPhoto, body};
