const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
let anonymus = "Anonymous";
outputEl.textContent = anonymus;
inputEl.addEventListener('input', inputText)
function inputText(event){
    
    outputEl.textContent = event.target.value || anonymus;
};