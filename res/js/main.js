const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");

const left = document.getElementById("left");
const right = document.getElementById("right");
const bottom = document.getElementById("bottom");
const topovak = document.getElementById("top");
const headline = document.getElementById("headline");

let x = 10;
let y = 10;

const move = () => {
    first.style.top = x + "px";
    first.style.left = y + "px";
    second.style.top = x + "px";
    second.style.left = y + "px";
    third.style.top = x + "px";
    third.style.left = y + "px";
    fourth.style.top = x + "px";
    fourth.style.left = y + "px";
}
topovak.onmouseover = () => {
    y-=20;
    move();
    changeButton();
    headline.style.display = "none";
}
left.onmouseover = () => {
    x-=20;
    move();
    changeButton();
    headline.style.display = "none";
}
right.onmouseover = () => {
    x+=20;
    move();
    changeButton();
    headline.style.display = "none";
}
bottom.onmouseover = () => {
    y+=20;
    move();
    changeButton();
    headline.style.display = "none";
}
const changeButton = () => {
    let r = randomNumber(0,255);
    let g = randomNumber(0,255);
    let b = randomNumber(0,255);
    topovak.style.backgroundColor = `rgb(${r},${g},${b})`;
    left.style.backgroundColor = `rgb(${r},${g},${b})`;
    right.style.backgroundColor = `rgb(${r},${g},${b})`;
    bottom.style.backgroundColor = `rgb(${r},${g},${b})`;
}

const randomNumber = (maximum, minimum) => {
    let myNum = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum; 
    return myNum;
}

console.log(randomNumber(0,255));

const changeColor = () => {
    let r = randomNumber(0,255);
    let g = randomNumber(0,255);
    let b = randomNumber(0,255);
    first.style.backgroundColor = `rgb(${r},${g},${b})`;
    second.style.backgroundColor = `rgb(${r},${g},${b})`;
    third.style.backgroundColor = `rgb(${r},${g},${b})`;
    fourth.style.backgroundColor = `rgb(${r},${g},${b})`;
}
first.onclick = () => {
    changeColor();
    clearInterval(interval);
}
second.onclick = () => {
    changeColor();
    clearInterval(interval);
}
third.onclick = () => {
    changeColor();
    clearInterval(interval);
}
fourth.onclick = () => {
    changeColor();
    clearInterval(interval);
}

const interval = setInterval(() => {
    changeColor();
},1000);