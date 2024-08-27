import { createTemplateComments } from '../comments/create-template-comments';

const bigPhotoBlock = document.querySelector('.big-picture');
const bigPhotoImage = bigPhotoBlock.querySelector('img');
const likesCount = bigPhotoBlock.querySelector('.likes-count');
const socialComments = bigPhotoBlock.querySelector('.social__comments');
const commentsTotalCount = bigPhotoBlock.querySelector('.social__comment-total-count');
const commentsShowCount = bigPhotoBlock.querySelector('.social__comment-shown-count');
const socialCaption = bigPhotoBlock.querySelector('.social__caption');


const createBigPhoto = ({url, description, likes,comments}) => {
  bigPhotoImage.src = url;
  bigPhotoImage.alt = description;
  socialCaption.textContent = description;
  likesCount.textContent = likes;
  commentsTotalCount.textContent = comments.length;

  comments.forEach((element) => {
    socialComments.append(createTemplateComments(element));
  });
  commentsShowCount.textContent = socialComments.children.length;
};

export {createBigPhoto, bigPhotoBlock, socialComments};

