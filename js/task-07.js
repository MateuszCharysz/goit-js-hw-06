'use strict';
//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const fontControl = document.querySelector('#font-size-control');
const fontOutput = document.querySelector('#text');

log(fontControl.valueAsNumber);

//callback/functions
const sizeChange = Event =>
  (fontOutput.style.fontSize = `${fontControl.valueAsNumber}px`);

//Events
fontControl.addEventListener('input', sizeChange);
