let counterValue = 0;
const incr = document.querySelector("button[data-action='increment']");
const decr = document.querySelector("button[data-action='decrement']");
const value = document.querySelector("#value");

function increment(evr){
    counterValue += 1;
    value.textContent = counterValue;
}

function decrement(evr){
    counterValue -= 1;
    value.textContent = counterValue;
}

incr.addEventListener("click", increment);
decr.addEventListener("click", decrement);
