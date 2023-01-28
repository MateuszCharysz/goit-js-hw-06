'use strict';
// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
// Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs nową wartością zmiennej counterValue.

//help
const log = console.log;
let counterValue = 0;
//DOM elements
const counterDisplay = document.querySelector('#value');
log(counterDisplay);

const counterDiv = document.querySelector('#counter');
log(counterDiv);
const counterDivArr = counterDiv.children;
log(counterDivArr);
const btnDec = counterDivArr[0];
log(btnDec);
const btnInc = counterDivArr[2];
log(btnInc);

//SECOND WAY OF DOM TARGETING
// const btnPlus = document.querySelector('button[data-action="decrement"]');
// log(btnPlus);
// const btnMinus = document.querySelector('button[data-action="increment"]');

//callbacks
const display = () => (counterDisplay.innerHTML = counterValue);
const increment = Event => {
  counterValue++;
  log(counterValue);
  return display();
};
const decrement = Event => {
  counterValue = counterValue - 1;
  log(counterValue);
  return display();
};

// Event listeners
btnDec.addEventListener('click', decrement);
btnInc.addEventListener('click', increment);
