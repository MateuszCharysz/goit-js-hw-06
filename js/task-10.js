'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const btnCreate = document.querySelector('[data-create]');
const btnDestr = document.querySelector('[data-destroy');
log(btnCreate);
const boxContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
// log(input)
const divs = boxContainer.querySelectorAll('div');
// log(divs);

// log(input.valueAsNumber);

//callback/functions
const createBoxes = amount => {
  amount = input.valueAsNumber;
  log(amount);
  const arr = Array(amount);
  log(arr);
  let pxDim = 30;
  let finalMarkup =""
  arr.forEach((div, index) => {pxDim += 10 * index;
    let bgColor = getRandomHexColor()
    let markup = `<div style="background-color:${bgColor}; width:${pxDim}px; height:${pxDim}px"></div>`
    finalMarkup = `${finalMarkup}+${markup}`
  });
  return boxContainer.insertAdjacentHTML('beforeend', finalMarkup)
};
const boxDestr = Event => {
  const divs = boxContainer.querySelectorAll('div');
  for (const div of divs) {
    div.remove();
  }
};

//Event
btnCreate.addEventListener('click', createBoxes);
btnDestr.addEventListener('click', log(input.valueAsNumber));
