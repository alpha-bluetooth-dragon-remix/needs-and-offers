'use strict';
alert('need bank js is linked');

/*
Take data that was parsed and add it to local storage

*/

var Needs_form = function (contact_name, email, need_input){
  this.contact_name = contact_name;
  this.email = email;
  this.need_input = need_input;
};

// Hard code 3 example Need objects
var tammy = new Needs_form ('Tammy', 'tammy@aol.com', 'Code 301 answer key.')

var visitor_austin = new Needs_form ('Visitor from Austin', 'aliya@gmail.com', 'Tour of Shoreline')

var bunny = new Needs_form ('Bugs Bunny', 'bugs@bunny.net', 'carrots. lots and lots of carrots.' )

// Rendering function to make objects show up. Push to array.
var target = document.getElementById('needListItems');

var elementA = document.createElement('h3');
elementA.textContent = tammy;
static_needs.push(elementA);

var elementB = document.createElement('h3');
elementB.textContent = visitor_austin;
static_needs.push(elementB);

var elementC = document.createElement('h3');
elementC.textContent = bunny;
static_needs.push(elementC);

//Append example objects to needListItems
target.appendChild(elementA);
target.appendChild(elementB);
target.appendChild(elementC);

// Add hard-coded needs into a static_needs array
var static_needs = [];
for (var i = 0; i < static_needs.length; i++) {
  var h3_el = document.createElement('h3');
  h3_el.textContent = Needs_form.static_needs[i].need_input;
  target.appendChild(h3_el);
}
