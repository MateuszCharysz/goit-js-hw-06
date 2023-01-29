'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const btnCreate = document.querySelector('button[data-create]');
const btnDestr = document.querySelector('[data-destroy');
// log(btnCreate)
const boxContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
// log(input)
const divs = boxContainer.querySelectorAll('div');
log(divs);
//callback/functions
const createBoxes = amount => {
  let pxDim = 20;
  for (let i = 0; i < amount; i++) {
    pxDim += 10;
    let markup = `<div style="background-color:${getRandomHexColor}; width:${pxDim}px; height${pxDim}px"></div>`;
    boxContainer.insertAdjacentHTML('beforeend', markup);
  }
};
const boxDestr = Event => {
  const divs = boxContainer.querySelectorAll('div');
  for (const div of divs) {
    div.remove();
  }
};

//Event
btnCreate.addEventListener('click', createBoxes(input.valueAsNumber));
// btnDestr.addEventListener('click', boxDestr);
