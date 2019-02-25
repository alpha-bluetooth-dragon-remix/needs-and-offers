'use strict';


/*
Take data that was parsed and add it to local storage

*/

var Needs_form = function (contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
};

// Hard code 3 example Need objects
var tammy = new Needs_form ('Tammy', 'tammy@aol.com', 'Code 301 answer key.');

var visitor_austin = new Needs_form ('Visitor from Austin', 'aliya@gmail.com', 'Tour of Shoreline');

var bunny = new Needs_form ('Bugs Bunny', 'bugs@bunny.net', 'carrots. lots and lots of carrots.' );

// Rendering function to make objects show up. Push to array.
var target = document.getElementById('needListItems');

var element_a_need = document.createElement('h3');
element_a_need.textContent = `need : ${tammy.need_input}`;
var element_a_name = document.createElement('h5');
element_a_name.textContent = `name : ${tammy.contact_name}`;
var element_a_email = document.createElement('h5');
element_a_email.textContent = `email: ${tammy.email}`;


var element_b_need = document.createElement('h3');
element_b_need.textContent = `need : ${visitor_austin.need_input}`;
var element_b_name = document.createElement('h5');
element_b_name.textContent = `name : ${visitor_austin.contact_name}`;
var element_b_email = document.createElement('h5');
element_b_email.textContent = `name : ${visitor_austin.email}`;

var element_c_need = document.createElement('h3');
element_c_need.textContent = `need : ${bunny.need_input}`;
var element_c_name = document.createElement('h5');
element_b_name.textContent = `name : ${bunny.contact_name}`;
var element_c_email = document.createElement('h5');
element_b_email.textContent = `name : ${bunny.email}`;

//Append example objects to needListItems
target.appendChild(element_a_need);
target.appendChild(element_a_name);
target.appendChild(element_a_email);

target.appendChild(element_b_need);
target.appendChild(element_b_name);
target.appendChild(element_b_email);

target.appendChild(element_c_need);
target.appendChild(element_c_name);
target.appendChild(element_c_email);

// from here, take the objects from local storage, parse them, add to their own array and append to page
