import {body} from './open-big-photo';
import {bigPhotoBlock, socialComments} from './create-big-photo';
import { isEscapeKey } from '../util';


const buttonClose = bigPhotoBlock.querySelector('.cancel');

const onBigPhotoEscKeydownClose = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    bigPhotoBlock.classList.add('hidden');
    body.classList.remove('modal-open');
    socialComments.innerHTML = '';

    document.removeEventListener('keydown', onBigPhotoEscKeydownClose);
  }
};

const closeBigPhoto = () => {
  bigPhotoBlock.classList.add('hidden');
  body.classList.remove('modal-open');

  buttonClose.removeEventListener('click', closeBigPhoto);
  document.removeEventListener('keydown', onBigPhotoEscKeydownClose);
  socialComments.innerHTML = '';
};


export {onBigPhotoEscKeydownClose, closeBigPhoto};


