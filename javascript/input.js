'use strict';
//Global variable -- stores needs information form by form in an array
var need_detail = [];
if (localStorage && localStorage.all_needs)
{ //right now this grabs from local storage
  need_detail = JSON.parse(localStorage.getItem('all_needs'));
  console.log('input storage: ', need_detail);
  console.log(need_detail);
  //input_storage.JSON.parse(stringy_needs);
}

//Constructor Function  -- creates a need form
var Need_form = function(contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
};


//Function - creates a form and sends it to storage when the submit button is pushed
//added eslint disable because submit_button_handler is defined on a different linked page
var submit_button_handler = function(event){ // eslint-disable-line

  //assigns variable names to all the content that came in with the form
  var contact_name = event.target.nameInput.value;
  var email = event.target.emailInput.value;
  var need_input = event.target.description.value;

  //creates an instance of the Need_form object send the contents to the global array
  var newNeed = new Need_form(contact_name, email, need_input);
  //call the function that stringifies the contents of the array and sends those contents to storage
  need_detail.push(newNeed);
  localStorage.setItem('all_needs', JSON.stringify(need_detail));
  needs_storage();
};

//Function -- stringify the contents of the array and send to local storage
var needs_storage = function () {
  //grabs from localstringy needs and puts it in local storage
  var stringy_needs = JSON.stringify(need_detail);
  localStorage.setItem('all_needs', stringy_needs);//array gets completely overwritten here, doesn't translate to next page when navigating without tabs
};
