const inputField = document.querySelector('#name-input');
const spanGreeting = document.querySelector('#name-output');

const onFieldInput = () => {
    const inputValue = inputField.value.trim();
    
    spanGreeting.textContent = inputValue === '' ? 'Anonymous' : inputValue;
};

inputField.addEventListener('input', onFieldInput);

