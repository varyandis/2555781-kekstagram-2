const picturesList = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const fileInput = document.querySelector('#upload-file');

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

  if (file) {
    const reader = new FileReader();

    reader.addEventListener('load', (event) => {
      const imagePreview = document.querySelector('.img-upload__preview img');
      imagePreview.src = event.target.result;
    });

    reader.readAsDataURL(file);
  }
});

export {createDescriptionPhoto};
