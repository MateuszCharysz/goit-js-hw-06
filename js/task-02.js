'use strict'
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// elem.classList.add(cls);
const ingredientsList = document.getElementById('ingredients');
// console.log(ingredientsList)
// document.createElement();
// item; class

const makeIngredientsList = () => {
  let listElementArr = [];
  ingredients.forEach(ingredient => {
    // console.log(ingredient)
    const listElement = document.createElement('li');
    // console.log(listElement);
    listElement.textContent = ingredient; //adds content
    listElement.classList.add('item'); //adds class
    listElementArr.push(listElement);
    // ingredientsList.append(listElement);
  });
  // console.log(listElementArr)
  ingredientsList.append(...listElementArr);
};

makeIngredientsList();
