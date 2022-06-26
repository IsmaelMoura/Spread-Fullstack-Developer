const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const changeCatButton = document.querySelector('#change-cat');

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    const json = await data.json();

    return json[0].url;
  } catch (error) {
    console.log(error.message);
  }
};

const loadImage = async () => {
  const catImage = document.querySelector('#cat');
  catImage.src = await getCats();
};

changeCatButton.addEventListener('click', loadImage);

loadImage();
