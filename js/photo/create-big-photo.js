import { createTemplateComments } from '../comments/create-template-comments';

const bigPhotoBlock = document.querySelector('.big-picture');
const bigPhotoImage = bigPhotoBlock.querySelector('img');
const likesCount = bigPhotoBlock.querySelector('.likes-count');
const socialComments = bigPhotoBlock.querySelector('.social__comments');
const commentsTotalCount = bigPhotoBlock.querySelector('.social__comment-total-count');
const commentsShowCount = bigPhotoBlock.querySelector('.social__comment-shown-count');
const socialCaption = bigPhotoBlock.querySelector('.social__caption');
const buttonCommentsLoader = bigPhotoBlock.querySelector('.comments-loader');

const createBigPhoto = ({url, description, likes,comments}) => {
  bigPhotoImage.src = url;
  bigPhotoImage.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentsTotalCount.textContent = comments.length;

  const onButtonCommentsLoader = () => {
    comments.splice(0, 5).forEach((element) => {
      socialComments.append(createTemplateComments(element));
      commentsShowCount.textContent = socialComments.children.length;
      if (comments.length === 0) {
        buttonCommentsLoader.classList.add('hidden');
      }
    });
  };

  onButtonCommentsLoader();
  buttonCommentsLoader.addEventListener('click', onButtonCommentsLoader);
};

export {createBigPhoto, bigPhotoBlock, socialComments, buttonCommentsLoader};

