const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const pictureList = document.querySelector('.pictures');

const similarListFragment = document.createDocumentFragment();

const destroyPictures = () => document.querySelectorAll('.picture').forEach((picture) => pictureList.removeChild(picture));

export const renderingImages = (generatePictures) => {
  generatePictures.forEach(({url, description, likes, comments}) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__comments').textContent = comments.length;
    similarListFragment.appendChild(pictureElement);
  });

  destroyPictures();
  pictureList.appendChild(similarListFragment);
};
