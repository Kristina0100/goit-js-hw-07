function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsContainer = document.querySelector('#controls');
const inputEl = controlsContainer.querySelector('input');
const createElBtn = document.querySelector('[data-create]');
const destroyElBtn = document.querySelector('[data-destroy]');
const boxesCollection = document.querySelector('#boxes');

const createBoxes = amount => {
  const boxesArr = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const boxItem = document.createElement('div');
    boxItem.style.backgroundColor = getRandomHexColor();
    boxItem.style.width = `${size}px`;
    boxItem.style.height = `${size}px`;
    boxesArr.push(boxItem);
    size += 10;
  };
  
  boxesCollection.prepend(...boxesArr);

  boxesCollection.style.display = 'flex';
  boxesCollection.style.padding = '32px';
  boxesCollection.style.flexDirection = 'row';
  boxesCollection.style.flexWrap = 'wrap';
  boxesCollection.style.gap = '44px';
};

const destroyBoxes = () => {
  boxesCollection.innerHTML = '';
};

const onCreateBtnClick = () => {
  const amount = inputEl.value;

  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  };

  inputEl.value = '';
};

const onDestroyBtnClick = () => {
  destroyBoxes();
};

createElBtn.addEventListener('click', onCreateBtnClick);
destroyElBtn.addEventListener('click', onDestroyBtnClick);


/* =============
STYLES
================ */

controlsContainer.style.display = 'flex';
controlsContainer.style.padding = '32px';
controlsContainer.style.alignItems = 'flex-start';
controlsContainer.style.gap = '16px';
controlsContainer.style.borderRadius = '8px';


const allBtns = controlsContainer.querySelectorAll('button');

allBtns.forEach( btn => {
  btn.style.display = 'flex';
  btn.style.justifyContent = 'center';
  btn.style.alignItems = 'center';
  btn.style.width = '120px';
  btn.style.padding = '8px 16px';
  btn.style.border = 'none';
  btn.style.borderRadius = '8px';
  btn.style.color = '#ffffff';
  btn.style.fontSize = '16px';
  btn.style.fontWeight = '500';
  btn.style.lineHeight = '1.5'; 
  btn.style.letterSpacing = '0.64px';
});
  
createElBtn.style.backgroundColor = '#4E75FF';
destroyElBtn.style.backgroundColor = '#FF4E4E';


inputEl.style.display = 'flex';
inputEl.style.padding =' 8px 72px';
inputEl.style.justifyContent = 'center';
inputEl.style.alignItems = 'center';
inputEl.style.borderRadius = '8px';
inputEl.style.border = '1px solid #808080';
inputEl.style.color = '#2E2F42';
inputEl.style.fontSize = '16px';
inputEl.style.fontWeight = '400';
inputEl.style.lineHeight = '1.5'; 
inputEl.style.letterSpacing = '0.64px';
