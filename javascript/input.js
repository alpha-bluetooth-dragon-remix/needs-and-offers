'use strict';
//Global variable -- stores needs information form by form in an array
var need_detail = [];

//Constructor Function  -- creates a need form
var Need_form = function(contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
};



//Function - creates a form and sends it to storage when the submit button is pushed
var submit_button_handler = function(event){
  //clears the button
  event.preventDefault();
  //clears the global array
  //need_detail = [];
  //brings the contents in storage and moves to global array
  // var storage_stringy_needs = localStorage.getItem('all_needs');
  // need_detail = JSON.parse(storage_stringy_needs);

  //assigns variable names to all the content that came in with the form
  var contact_name = event.target.nameInput.value;
  var email = event.target.emailInput.value;
  var need_input = event.target.description.value;

  //creates an instance of the Need_form object send the contents to the global array
  var newNeed = new Need_form(contact_name, email, need_input);
  need_detail.push(newNeed);

  //call the function that stringifies the contents of the array and sends those contents to storage
  needs_storage();
};

//Function -- stringify the contents of the array and send to local storage
var needs_storage = function(){
  var stringy_needs = JSON.stringify(need_detail); //saving product data
  localStorage.setItem('all_needs', stringy_needs);
};

//Listener -- activate on mouse click
//attaches what we are doing to the element that includes the id "entry-form".
var entryForm = document.getElementById('entry-form');

//add an event listener to activate on a mouse click
entryForm.addEventListener('submit', submit_button_handler);



/*STRETCH GOALS:
PHP third party email
add category into constructor function as stretch goal
Stretch goal: https://www.freecontactform.com/email_form.php
Init function that holds all the form stuff
*/

