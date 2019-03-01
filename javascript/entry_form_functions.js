'use strict';
//Listener -- activate on mouse click
//attaches what we are doing to the element that includes the id "entry-form".
var entryForm = document.getElementById('entry-form');
console.log('entryForm value:'+ entryForm);
//add an event listener to activate on a mouse click
//added eslint-disable because submit_button_handler isn't called on this page
entryForm.addEventListener('submit', submit_button_handler);// eslint-disable-line
