'use strict';
const categoryNumberSelector = document.querySelectorAll('li.item');
const category = document.querySelectorAll(".item")
const categoryNames = document.querySelectorAll('h2');

const numberOfCategories = () => {
  let number = categoryNumberSelector.length;
  let messege = `Number of categories: ${number}`;
  return console.log(messege);
};



const namesAndElements = () => {
    {[...categoryNumberSelector]}

};

numberOfCategories();
