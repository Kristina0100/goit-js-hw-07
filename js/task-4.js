const loginForm = document.querySelector('.login-form');

const onFormSubmit = event => {
    event.preventDefault();

    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    if (email === '' || password === '') {
        alert('All form fields must be filled in');
        return;
    };

    const formInfo = { email, password };
    console.log(formInfo);
    
    loginForm.reset();
};

loginForm.addEventListener('submit', onFormSubmit);


/* =============
STYLES
================ */

loginForm.style.display = 'inline-flex';
loginForm.style.flexDirection = 'column';
loginForm.style.alignItems = 'flex-start';
loginForm.style.padding = '24px';


const labelEl = document.querySelectorAll('label');

labelEl.forEach(label => {
    label.style.display = 'flex';
    label.style.flexDirection = 'column';
    label.style.alignItems = 'flex-start';
    label.style.gap = '8px';
    label.style.marginTop = '8px';
    label.style.color = '#2E2F42';
    label.style.lineHeight = '1.5'; 
    label.style.letterSpacing = '0.64px';
});


const inputEl = document.querySelectorAll('input');

inputEl.forEach(input => {
    input.style.borderRadius = '4px';
    input.style.border = '1px solid #808080';
    input.style.width = '360px';
    input.style.height = '40px';
    input.style.flexShrink = '0';
    input.style.padding = '8px 16px';
});


const btnSubmit = document.querySelector('button');

btnSubmit.style.display = 'flex';
btnSubmit.style.justifyContent = 'center';
btnSubmit.style.alignItems = 'center';
btnSubmit.style.gap = '10px';
btnSubmit.style.padding = '8px 16px';
btnSubmit.style.border = 'none';
btnSubmit.style.marginTop = '16px';
btnSubmit.style.borderRadius = '8px';
btnSubmit.style.backgroundColor = '#4E75FF';
btnSubmit.style.color = '#ffffff';
btnSubmit.style.fontSize = '16px';
btnSubmit.style.lineHeight = '1.5'; 
btnSubmit.style.letterSpacing = '0.64px';

const body = document.querySelector('body');
body.style.backgroundColor = '#ffffff';