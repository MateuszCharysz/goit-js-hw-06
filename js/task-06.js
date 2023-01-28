'use strict';
//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const input = document.querySelector('#validation-input');
log(input);
const inputLength = input.value;
log(typeof input.getAttribute('data-length'));

//callback
const inputlengthVal = () => {
  // log(input.value);
  const inputStr = input.value;
  // log(typeof inputStr.length)
  const inputLength = inputStr.length;
  // log(inputLength === input.getAttribute('data-length'));
  const inputVal = parseInt(input.getAttribute('data-length'));
  // log(inputLength === inputVal)
  if (inputLength === inputVal) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid'); //not necessary - cascade at work
  }
};

//Event
input.addEventListener('blur', inputlengthVal);
