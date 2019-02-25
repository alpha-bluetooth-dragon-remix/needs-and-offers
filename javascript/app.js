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
}
//function that is called when the mouse is clicked
var handle_need_submit = function (submit){
    submit.preventDefault();
    
    //Assigns variable names to all the content that came in with the form.
    var name = submit.target.nameInput.value;
    var email = submit.target.emailInput.value;
    var need_input = submit.target.description.value;

//creates an instance of the newStore object
    var newNeed = new Need_form(contact_name, email, need_input);

    newNeed.render();
    console.log(new_detail);
 
// function for storage


//EXTERNAL CODE
//add an event listener to activate on a mouse click
entry_form.addEventListener('submit', handle_need_submit);

/*
add category into constructor function as stretch goal

submit button event listener
    addEventListener('click', submit)
submit button event handler
    var submit_button_handler = function (){
        put the code in to make the button work
    }

link to get submit button to lead you to offers bank page
STORAGE
    json localStorage thing, Stringify here, parse on bank page
Stretch goal: PHP third party email.
    Stretch goal: https://www.freecontactform.com/email_form.php
Init function that holds all the form stuff

*/
alert('app js is linked');
