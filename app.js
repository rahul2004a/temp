const btn = document.querySelector("button");
const body = document.querySelector("body");
const color = ['red','blue','green','blue','red','voilet'];

body.style.backgroundColor= 'red';

btn.addEventListener('click',changeB)

function changeB(){
    const cindex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[cindex];
}