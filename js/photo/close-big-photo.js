import {body} from './open-big-photo';
import {createBigPhoto, bigPhotoBlock, socialComments, buttonCommentsLoader} from './create-big-photo';
import { isEscapeKey } from '../util';


const buttonClose = bigPhotoBlock.querySelector('.cancel');

const onBigPhotoEscKeydownClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPhotoBlock.classList.add('hidden');
    body.classList.remove('modal-open');

    document.removeEventListener('keydown', onBigPhotoEscKeydownClose);
    socialComments.innerHTML = '';
    buttonCommentsLoader.classList.remove('hidden');
    buttonCommentsLoader.removeEventListener('keydown', createBigPhoto.onButtonCommentsLoader);
  }
};

const closeBigPhoto = () => {
  bigPhotoBlock.classList.add('hidden');
  body.classList.remove('modal-open');

  buttonClose.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', onBigPhotoEscKeydownClose);

  socialComments.innerHTML = '';
  buttonCommentsLoader.classList.remove('hidden');
  buttonCommentsLoader.removeEventListener('keydown', createBigPhoto.onButtonCommentsLoader);
};


export {onBigPhotoEscKeydownClose, closeBigPhoto};


