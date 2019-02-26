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
  //call the function that stringifies the contents of the array and sends those contents to storage
  need_detail.push(newNeed);
  needs_storage();
};

//Function -- stringify the contents of the array and send to local storage
var needs_storage = function(){
  console.log('heeey');
  if (localStorage && localStorage.need_detail)//I think this needs to === or > something, not just live here without anything else
  {
    need_detail = JSON.parse(localStorage.getItem('all_needs'));
    console.log('input storage: ', need_detail);
   // need_detail = JSON.parse(input_storage);
    //var stringy_needs_two = JSON.stringify(need_detail); //saving product data
    //localStorage.setItem('all_needs', stringy_needs);
    console.log(need_detail);
    //input_storage.JSON.parse(stringy_needs);
  } else {
    var stringy_needs = JSON.stringify(need_detail);
    localStorage.setItem('all_needs', stringy_needs);//array gets completely overwritten here, doesn't translate to next page when navigating without tabs
    console.log('something worked');
  }
};


/*STRETCH GOALS:
add category into constructor function as stretch goal
Init function that holds all the form stuff
*/

