'use strict';

//Note: I am guessing we will need to restructure this a little, since we need
//to pull everything from localStorage. 

//Global Variable - stores contents from local Storage
var needs_list = [];

//Function -- render a form to the needs list page
// ALIYA WILL ENTER CODE HERE







//Is it a bad idea to just enter three in the screen and then have them sit in local memory?
//Guessing we could get rid of all code below. I know that is probably a nightmare for Tammy and Aliya, since
//you spent a long time on this code. It looks great, I'm just not sure how to use it with the local storage.
var Needs_form = function (contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
};

// Hard code 3 example Need objects
var visitor_austin = new Needs_form ('Visitor from Austin', 'aliya@gmail.com', 'Tour of Shoreline');

var demi = new Needs_form ('Demi the Dog', 'demi@the-best-dog.com', 'Nothing; she\'s perfect' );

var Tammy = new Needs_form ('Tammy', 'tammy@gmail.com', 'Short term housing near Seattle Center');

Needs_form.prototype.render_li = function() {
  var target = document.getElementById('needListItems');

  var ul_el = document.createElement('ul');

  var li_el = document.createElement('li');
  li_el.textContent = `need : ${this.need_input}`;
  ul_el.appendChild(li_el);

  var li_el = document.createElement('li');
  li_el.textContent = `name : ${this.contact_name}`;
  ul_el.appendChild(li_el);

  var li_el = document.createElement('li');
  li_el.textContent = `email : ${this.email}`;
  ul_el.appendChild(li_el);

  target.appendChild(ul_el);

};


Tammy.render_li();
visitor_austin.render_li();
demi.render_li();

render_list();
