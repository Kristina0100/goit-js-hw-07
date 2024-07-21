const inputField = document.querySelector('#name-input');
const spanName = document.querySelector('#name-output');

const onFieldInput = () => {
    const inputValue = inputField.value.trim();
    spanName.textContent = inputValue === '' ? 'Anonymous' : inputValue;
};

inputField.addEventListener('input', onFieldInput);


/* =============
STYLES
================ */

inputField.style.borderRadius = '4px';
inputField.style.border = '1px solid #808080';
inputField.style.marginBottom = '16px';
inputField.style.marginLeft = '24px';
inputField.style.color = '#2E2F42';
inputField.style.fontSize = '16px';
inputField.style.lineHeight = '1.5';
inputField.style.letterSpacing = '0.64px';
inputField.style.padding = '8px 16px';
inputField.style.width = '360px';
inputField.style.height = '40px';


const heading = document.querySelector('h1');

heading.style.margin = '0 24px';
heading.style.color = '#2E2F42';
heading.style.fontSize = '24px';
heading.style.fontWeight = '600';
heading.style.lineHeight = '1.3'; 
heading.style.letterSpacing = '0.96px';


const body = document.querySelector('body');
body.style.backgroundColor = '#ffffff';