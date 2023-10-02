const formEl = document.querySelector(".login-form");
formEl.addEventListener('submit',formSubmit)
function formSubmit(e) {
    e.preventDefault()

    const { email, password } = e.currentTarget.elements
    console.log(email.value)
    console.log(password.value)
    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data);
    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені');
    };

}