'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const btnChange = document.querySelector('.change-color');
log(btnChange);
const colorDisplay = document.querySelector('.color');

//callback/functions
const colorChange = () => {
  document.body.style.backgroundColor = `${getRandomHexColor()}`;
  colorDisplay.innerHTML = document.body.style.backgroundColor;
};

//Event
btnChange.addEventListener('click', colorChange);
