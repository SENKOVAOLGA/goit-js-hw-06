const formEl = document.getElementById("validation-input");
const inputEl = Number(formEl.dataset.length);
//console.log(inputEl);
formEl.addEventListener("blur", onBlur);
function onBlur(e) {
    console.log (e.currentTarget.value.length)
    if (Number(e.currentTarget.value.length) === Number(inputEl)) {
       // console.log(Number(e.currentTarget.value.length) === inputEl)
        formEl.classList.add("valid")
        formEl.classList.remove("invalid")
    
    } else {
            formEl.classList.add("invalid")
            formEl.classList.remove("valid")
}
}
