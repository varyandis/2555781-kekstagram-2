import './photo/add-user-photo-main-page.js';
import './photo/open-big-photo.js';
import './validation/validation.js';
import './photo/edite-photo/edite-photo.js';
import './api.js';
import { showFilterContainer } from './filter/filter.js';
import { getData } from './api.js';
import { renderPhotoDescriptions } from './photo/add-user-photo-main-page.js';
import { openPhotoGallery } from './photo/open-big-photo.js';
import { setUserFormSubmit } from './validation/validation.js';
import { showAlertDowload, showAlertError, showAlertSuccess } from './photo/show-alert/show-alert.js';
import { filterPhotos } from './filter/filter.js';


const onDataSuccess = (data) => {
  if (!data) {
    return;
  }
  renderPhotoDescriptions(data);
  openPhotoGallery(data);
  filterPhotos(data);
};

const onDataError = () => {
  showAlertDowload();
};

getData(onDataSuccess, onDataError, showFilterContainer, filterPhotos);

setUserFormSubmit(showAlertSuccess, showAlertError);

