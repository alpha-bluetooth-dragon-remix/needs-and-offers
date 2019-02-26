'use strict';

//Note: I am guessing we will need to restructure this a little, since we need
//to pull everything from localStorage. 

//Global Variable - stores contents from local Storage
var needs_list = [];

//Function -- render a form to the needs list page
var render_list = function(){
  //brings the contents in storage and moves to global array
  var storage_stringy_needs = localStorage.getItem('all_needs');
  needs_list = JSON.parse(storage_stringy_needs);
  //loops through array record by record and renders content to page
  for (var i = 0; i < needs_list.length; i++) {
    var target = document.getElementById('needListItems');
    var need_element = document.createElement('ul');
    var need_name = document.createElement('li');
    var need_email = document.createElement('li');
    var need_description = document.createElement('li');

    //li for name
    need_name.textContent = needs_list[i].contact_name;
    need_element.appendChild(need_name);
    //li for email
    need_email.textContent = (needs_list[i].email);
    need_element.appendChild(need_email);
    //li for description
    need_description.textContent = (needs_list[i].need_input);
    need_element.appendChild(need_description);
    target.appendChild(need_element);
  }
};

//Is it a bad idea to just enter three in the screen and then have them sit in local memory?
//Guessing we could get rid of all code below. I know that is probably a nightmare for Tammy and Aliya, since
//you spent a long time on this code. It looks great, I'm just not sure how to use it with the local storage.
var Needs_form = function (contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
};

// Hard code 3 example Need objects
var tammy = new Needs_form ('Tammy', 'tammy@gmail.com', 'Short term housing near Seattle Center.');

var visitor_austin = new Needs_form ('Visitor from Austin', 'aliya@gmail.com', 'Tour of Shoreline');

var demi = new Needs_form ('Demi the Dog', 'demi@the-best-dog.com', 'Nothing; she\'s perfect' );

// Rendering function to make objects show up. Push to array.
var target = document.getElementById('needListItems');
var static_ul_el = document.createElement('ul');

var element_a_need = document.createElement('li');
element_a_need.textContent = `need : ${tammy.need_input}`;
static_ul_el.appendChild(element_a_need);
var element_a_name = document.createElement('li');
element_a_name.textContent = `name : ${tammy.contact_name}`;
static_ul_el.appendChild(element_a_name);
var element_a_email = document.createElement('li');
element_a_email.textContent = `email: ${tammy.email}`;
static_ul_el.appendChild(element_a_email);


var element_b_need = document.createElement('li');
element_b_need.textContent = `need : ${visitor_austin.need_input}`;
static_ul_el.appendChild(element_b_need);
var element_b_name = document.createElement('li');
element_b_name.textContent = `name : ${visitor_austin.contact_name}`;
static_ul_el.appendChild(element_b_name);
var element_b_email = document.createElement('li');
element_b_email.textContent = `name : ${visitor_austin.email}`;
static_ul_el.appendChild(element_b_email);


var element_c_need = document.createElement('li');
element_c_need.textContent = `need : ${demi.need_input}`;
static_ul_el.appendChild(element_c_need);
var element_c_name = document.createElement('li');
element_b_name.textContent = `name : ${demi.contact_name}`;
static_ul_el.appendChild(element_c_name);
var element_c_email = document.createElement('li');
element_b_email.textContent = `email : ${demi.email}`;
static_ul_el.appendChild(element_c_email);

//Append example objects to needListItems


target.appendChild(static_ul_el);

render_list();
