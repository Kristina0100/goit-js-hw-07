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

