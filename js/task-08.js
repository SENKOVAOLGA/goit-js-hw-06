const formEl = document.querySelector(".login-form");
formEl.addEventListener('submit', formSubmit);

function formSubmit(e) {
    e.preventDefault();

    const emailInput = e.currentTarget.elements.email;
    const passwordInput = e.currentTarget.elements.password;

    const email = emailInput.value;
    const password = passwordInput.value;

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені');
        return; // Прерываем выполнение функции, так как поля не заполнены
    }

    const formData = {
        email: email,
        password: password,
    };

    console.log(formData);

}    