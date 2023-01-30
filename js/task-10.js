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
// log(btnCreate);
const boxContainer = document.querySelector('#boxes');
const input = document.querySelector('input');
// log(input)
boxContainer.style.display = "flex"
boxContainer.style.flexWrap = "wrap"
// log(divs);

// log(input.valueAsNumber);

//callback/functions
const createBoxes = amount => {
  amount = input.valueAsNumber;
  // log(amount);
  const arr = Array(amount);
  // log(arr);
  let pxDim = 30;
  let arrBoxesMarkup =[]
  for (let i = 0; i < arr.length; i++) {
    pxDim += 10 * i;
    let markup = `<div style="background-color:${getRandomHexColor()}; width:${pxDim}px; height:${pxDim}px"></div>`;
    arrBoxesMarkup.push(markup)
  };
  return boxContainer.insertAdjacentHTML('beforeend', arrBoxesMarkup.join(""));
};
const boxDestr = () => {
  const divs = boxContainer.querySelectorAll('div');
  // log(divs)
  for (const div of divs) {
    div.remove();
  }
};

//Event
btnCreate.addEventListener('click', createBoxes);
btnDestr.addEventListener('click', boxDestr);
