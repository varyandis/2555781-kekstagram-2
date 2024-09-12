const picturesList = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fileInput = document.querySelector('#upload-file');
const preview = document.querySelectorAll('.effects__preview');
const imagePreview = document.querySelector('.img-upload__preview img');
const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const createDescriptionPhoto = (data) => {
  data.forEach(({id, url, description, likes, comments}) => {
    const item = templatePicture.cloneNode(true);
    const elementImage = item.querySelector('.picture__img');
    const elementLikes = item.querySelector('.picture__likes');
    const elementComments = item.querySelector('.picture__comments');

    elementLikes.textContent = likes;
    elementComments.textContent = Object.keys(comments).length;
    elementImage.src = url;
    elementImage.alt = description;
    elementImage.dataset.id = id;

    picturesList.append(item);
  });
};

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    const objectURL = URL.createObjectURL(file);
    imagePreview.src = objectURL;
    preview.forEach((photo) => {
      photo.style.backgroundImage = `url(${objectURL})`;
    });
  }
});

export {createDescriptionPhoto};
