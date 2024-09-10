import './photo/add-user-photo-main-page.js';
import './photo/open-big-photo.js';
import './validation/validation.js';
import './photo/edite-photo/edite-photo.js';
import './api.js';
import { getData } from './api.js';
import { createDescriptionPhoto } from './photo/add-user-photo-main-page.js';
import { openPhoto } from './photo/open-big-photo.js';
import { setUserFormSubmit } from './validation/validation.js';
import { showAlertError, showAlertSuccess } from './util.js';

getData().then((data) => {
  createDescriptionPhoto(data);
  openPhoto(data);
});

setUserFormSubmit(showAlertSuccess, showAlertError);
