'use strict';
//FIRST SOLUTION
//help
const log = console.log;

//DOM elements
const form = document.querySelector('.login-form');
// log(form);

//callback/functions
const handleSubmit = Event => {
  Event.preventDefault();
  const {
    elements: { email, password },
  } = Event.currentTarget;
  let loginData = {};
//   log(email);
//   log(password);
  if (email.value === '' || password.value === '') {
    alert('Please fill in all fields');
  } else {
    loginData.email = email.value;
    loginData.password = password.value;
    log(loginData);
    form.reset();
  }
};

//Event
form.addEventListener('submit', handleSubmit);
