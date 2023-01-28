'use strict';
//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

//callbacks
const displayInput = Event => {
  if (input.value === '') {
    output.innerHTML = 'Anonymous';
  } else {
    output.textContent = Event.currentTarget.value;
  }
};

// const displayInput = Event => (output.textContent = Event.currentTarget.value);
// const displayDefault = Event => {
//   if (output.textContent === '') return (output.innerHTML = 'Anonymous');
// };

//Events
input.addEventListener('input', displayInput);

//SECOND SOLUTION

// const displayInput = Event => (output.textContent = Event.currentTarget.value);
// const displayDefault = Event => {
//   if (output.textContent === '') return (output.innerHTML = 'Anonymous');
// };

//Events
// input.addEventListener('input', displayInput);
// input.addEventListener('blur', displayDefault);
