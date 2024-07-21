function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const body = document.querySelector('body');
const changeColorBtn = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

const onBtnClick = () => {
  const randomColor = getRandomHexColor();

  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
};

changeColorBtn.addEventListener('click', onBtnClick);


/* =============
STYLES
================ */

const widget = document.querySelector('.widget');

widget.style.display = 'inline-flex';
widget.style.padding = '100px 88px';
widget.style.flexDirection = 'column';
widget.style.alignItems = 'flex-start';


const widgetText = widget.querySelector('p');

widgetText.style.color = '#2E2F42';
widgetText.style.lineHeight = '1.5'; 
widgetText.style.letterSpacing = '0.64px';
widgetText.style.marginBottom = '16px';
 

changeColorBtn.style.display = 'flex';
changeColorBtn.style.padding = '8px 16px';
changeColorBtn.style.justifyContent = 'center';
changeColorBtn.style.alignItems = 'center';
changeColorBtn.style.borderRadius = '8px';
changeColorBtn.style.border = 'none';
changeColorBtn.style.background = '#4E75FF';
changeColorBtn.style.color = '#ffffff';
changeColorBtn.style.fontSize = '16px';
changeColorBtn.style.fontWeight = '500';
changeColorBtn.style.lineHeight = '1.5'; 
changeColorBtn.style.letterSpacing = '0.64px';

