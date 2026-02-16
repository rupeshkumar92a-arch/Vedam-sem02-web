const center = document.querySelector(".center");
const decrement = document.querySelector(".button1");
const reset = document.querySelector(".button2");
const increment = document.querySelector(".button3");

let count = parseInt(center.innerText);

increment.addEventListener("click", () => {
    count = count + 1;
    center.innerText = count;
});

decrement.addEventListener("click", () => {
    count = count - 1;
    center.innerText = count;
});

reset.addEventListener("click", () => {
    count = 0;
    center.innerText = count;
});