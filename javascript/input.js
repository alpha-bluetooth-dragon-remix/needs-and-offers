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
  console.log('heeey');
  var stringy_needs = JSON.stringify(need_detail); //saving product data
  if (localStorage.getItem('all_needs'))//I think this needs to === or > something, not just live here without anything else
  {
    var input_storage = JSON.parse(localStorage.getItem('all_needs'));
    need_detail.push(input_storage);
    var stringy_needs_two = JSON.stringify(need_detail); //saving product data
    localStorage.setItem('all_needs', stringy_needs_two);
    console.log(input_storage);
    //input_storage.JSON.parse(stringy_needs);
  } else{
    localStorage.setItem('all_needs', stringy_needs);//array gets completely overwritten here, doesn't translate to next page when navigating without tabs
    console.log('something worked');
  }
};

//Listener -- activate on mouse click
//attaches what we are doing to the element that includes the id "entry-form".
var entryForm = document.getElementById('entry-form');
console.log('entryForm value:'+ entryForm);
//add an event listener to activate on a mouse click
entryForm.addEventListener('submit', submit_button_handler);



/*STRETCH GOALS:
add category into constructor function as stretch goal
Init function that holds all the form stuff
*/

