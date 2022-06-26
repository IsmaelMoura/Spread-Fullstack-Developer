const title = document.querySelector('#page-title');
const button = document.querySelector('#mode-selector');
const footer = document.getElementsByTagName('footer')[0];
const body = document.getElementsByTagName('body')[0];
const darkModeClass = 'dark-mode';
function changeMode() {
  changeLightingMode();
  changeTexts();
}

function changeLightingMode() {
  title.classList.toggle(darkModeClass);
  button.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
}

function changeTexts() {
  const lightMode = 'Light Mode';
  const darkMode = 'Dark Mode';

  if (button.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    title.innerHTML = `${darkMode} ON`;
  } else {
    button.innerHTML = darkMode;
    title.innerHTML = `${lightMode} ON`;
  }
}

button.addEventListener('click', changeMode);
