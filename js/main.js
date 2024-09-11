import './photo/add-user-photo-main-page.js';
import './photo/open-big-photo.js';
import './validation/validation.js';
import './photo/edite-photo/edite-photo.js';
import './api.js';
import { getData } from './api.js';
import { createDescriptionPhoto } from './photo/add-user-photo-main-page.js';
import { openPhoto } from './photo/open-big-photo.js';
import { setUserFormSubmit } from './validation/validation.js';
import { showAlertDowload, showAlertError, showAlertSuccess } from './util.js';

const onDataSuccess = (data) => {
  if (!data) {
    return;
  }
  createDescriptionPhoto(data);
  openPhoto(data);
};

const onDataError = () => {
  showAlertDowload();
};


getData(onDataSuccess, onDataError);

setUserFormSubmit(showAlertSuccess, showAlertError);
