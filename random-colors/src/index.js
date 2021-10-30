// elements
const randomColorGrid = document
  .querySelector('#tiny-bite-random-color #random-color-grid');
const refreshColorBtn = document
  .querySelector('#tiny-bite-random-color #refresh-color-btn');
const copyHexBtn = document
  .querySelector('#tiny-bite-random-color #copy-hex-btn');
const hexCode = document
  .querySelector('#tiny-bite-random-color #hex-code');

// functions
const getRandomColor = () => {
  const HEX_CODE_CHARACTERS = [
    'A','B','C','D','E','F',
    '0','1','2','3','4','5','6','7','8','9',
  ];
  let color = '#';
  while (color.length <= 6) {
    color = color + HEX_CODE_CHARACTERS[Math.floor(Math.random() * HEX_CODE_CHARACTERS.length)];
  }
  return color;
};

const renderRandomColor = () => {
  const randomColor = getRandomColor();
  hexCode.innerHTML = randomColor;
  randomColorGrid.style.backgroundColor = randomColor;
};

const copyHexCodeToClipboard = () => {
  const hexColorCode = hexCode.innerHTML;
  navigator.clipboard.writeText(hexColorCode);
};


// events
window !== null && window
  .addEventListener('DOMContentLoaded', () => {
    renderRandomColor();
  });

refreshColorBtn !== null && refreshColorBtn
  .addEventListener('click', () => {
    renderRandomColor();
  });

copyHexBtn !== null && copyHexBtn
  .addEventListener('click', () => {
    copyHexCodeToClipboard();
  });