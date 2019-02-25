'use strict';

var need_detail = [];
/*
Function that accepts the name, email, need
    form
Have need function separate from name and email function
    a contact
    a need
Constructor function -- will create new Needs_form object and render new objects to bank page with each submit
*/
var Need_form = function(contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
  need_detail.push(this);
};

Need_form.prototype.render = function(){
    var target = document.getElementById('needListItems');
    var need_element = document.createElement('ul');
    var need_name = document.createElement('li');
    var need_email = document.createElement('li');
    var need_description = document.createElement('li');

    //access storage and load anything that is there
    //need_detail
    var i = need_detail.length -1;
    //li for name
    need_name.textContent = need_detail[i].name;
    need_element.appendChild(need_name);
    target.appendChild(need_element);
    //li for email
    need_email.textContent = (need_detail[i].email);
    need_element.appendChild(need_email);
    target.appendChild(need_element);
    //li for description
    need_description.textContent = (need_detail[i].need_input);
    need_element.appendChild(need_description);
    target.appendChild(need_element);
};

//function that is called when the submit button is pushed
var submit_button_handler = function(event){
  event.preventDefault();
    
  //Assigns variable names to all the content that came in with the form.
  var contact_name = event.target.nameInput.value;
  var email = event.target.emailInput.value;
  var need_input = event.target.description.value;

  //creates an instance of the Need_form object
  var newNeed = new Need_form(contact_name, email, need_input);
  //need_detail.push(newNeed);

  console.log(need_detail);
  //newNeed.render();
};

//EXTERNAL CODE
//add an event listener to activate on a mouse click
document.getElementById('entry_form').addEventListener('submit', handle_need_submit);

/*
add category into constructor function as stretch goal



link to get submit button to lead you to offers bank page
STORAGE
    json localStorage thing, Stringify here, parse on bank page
Stretch goal: PHP third party email.
    Stretch goal: https://www.freecontactform.com/email_form.php
Init function that holds all the form stuff


// in case we need stringy storage
//var stringy_needs = JSON.stringify(need_detail); //saving product data
//localStorage.setItem('all_products', stringy_needs);
//console.log('products data saved to local storage');