'use strict';
const categoriesList = document.getElementById('categories');
// console.log(categoriesList);
const categoryNumberSelector = categoriesList.querySelectorAll('li.item');
// console.log(categoryNumberSelector);
// console.log(categoryNumberSelector.childrenNodes); //undefined - childrenNodes zwraca wartości TYLKO dla pojedynczego elementu, a nie dla grupy
// const catNumSelArray = [...categoryNumberSelector];
// console.log(catNumSelArray) // zwraca jako prawdziwy array
// console.log(catNumSelArray[0]) // zwraca wartość li.item ze wszystkimi pozostałymi elementami we wnętrzu
// console.log(catNumSelArray[0].childNodes); // tworzy pseudoarray dla wszystkich elementów w POJEDYNECZEJ wartości li.item
// console.log(categoryNumberSelector[0].childNodes) // również tworzy psudoarray tak sam jak z prawdziwego array

// const categoryNames = document.querySelectorAll('h2');
// console.log(categoryNames); // zwraca tylko nagłówki bez tekstu.
// console.log(categoryNames.textContent); // zwraca undefinded - musi mieć pojedyncze elementy.
// console.log(categoryNames[0].textContent); //zwraca tekst pojedynczego nagłówka

const numberOfCategories = () => {
  let number = categoryNumberSelector.length;
  let messege = `Number of categories: ${number}`;
  return messege;
};

const namesAndElements = () => {
  const catNumSelArray = [...categoryNumberSelector];
  let messegeOne = "";
  let messegeTwo = "";
  catNumSelArray.forEach(listItem => {
    let listItemArray = [...listItem.childNodes];
    // console.log(listItemArray);
    listItemArray.forEach((simpleElements) => {
      // console.log(typeof simpleElements)
      if (simpleElements.localName == 'h2') {
        // console.log(simpleElements.textContent);
        messegeOne = `Category: ${simpleElements.textContent}`
      } else if (simpleElements.localName == 'ul') {
      //  console.log(simpleElements.children.length);
        messegeTwo = `Elements: ${simpleElements.children.length}`;
      };
    })
    console.log(messegeOne)
    console.log(messegeTwo);
  });
};

numberOfCategories();
namesAndElements();
