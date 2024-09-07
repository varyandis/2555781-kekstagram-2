import { createDescriptionPhoto } from './photo/add-user-photo-main-page';
import { openPhoto } from './photo/open-big-photo';
import { setUserFormSubmit } from './validation/validation';
import { closeBigPhoto } from './photo/create-big-photo';

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data').then((response) => response.json()).then((data) => {
  createDescriptionPhoto(data);
  openPhoto(data);
});


setUserFormSubmit(closeBigPhoto);

