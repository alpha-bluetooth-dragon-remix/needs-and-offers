'use strict';

//Global Variable - stores contents from local Storage
var needs_list = [];

//Function -- render a form to the needs list page

var render_list = function () {
  //brings the contents in storage and moves to global array
  var storage_stringy_needs = localStorage.getItem('all_needs');
  needs_list = JSON.parse(storage_stringy_needs);
  var target = document.getElementById('needListItems');
  //loops through array record by record and renders content to page
  for (var i = 0; i < needs_list.length; i++) {
    var need_ul_el = document.createElement('ul');
    need_ul_el.getAttribute('data-draggable');
    need_ul_el.setAttribute('data-draggable', 'false');
    var need_li_el = document.createElement('li');
    //li for name
    need_li_el.textContent = needs_list[i].contact_name;
    need_ul_el.appendChild(need_li_el);

    //li for email
    need_li_el = document.createElement('li');
    need_li_el.textContent = (needs_list[i].email);
    need_ul_el.appendChild(need_li_el);

    //li for description
    need_li_el = document.createElement('li');
    need_li_el.textContent = (needs_list[i].need_input);
    need_ul_el.appendChild(need_li_el);

    // need_li_el = document.createElement('li');
    // need_li_el.textContent = 'Select this need: ';
    // need_ul_el.appendChild(need_li_el);

    //adds checkbox with each new item

    // var checkbox_el = document.createElement('INPUT');
    // checkbox_el.value = needs_list[i].email;
    // checkbox_el.setAttribute('type', 'checkbox');
    // checkbox_el.setAttribute('class', 'checkbox');
    // need_ul_el.appendChild(checkbox_el);

    target.appendChild(need_ul_el);
  }
};
render_list();

/*
var boxes_checked = [];
when a box is checked, boxes_checked.push(entire checked object)
*/

var move_note = function (event) {
  console.log(event);
  var target = document.getElementById('summary');
  if (event.target.checked === true) {
    //for (var j = 0; j < needs_list.length; j++) {
    var need_ul_el = document.createElement('ul');
    var need_li_el = document.createElement('li');
    //li for name
    need_li_el.textContent = needs_list[event.target.value].contact_name;
    need_ul_el.appendChild(need_li_el);

    //li for email
    need_li_el = document.createElement('li');
    need_li_el.textContent = (needs_list[event.target.value].email);
    need_ul_el.appendChild(need_li_el);

    //li for description
    need_li_el = document.createElement('li');
    need_li_el.textContent = (needs_list[event.target.value].need_input);
    need_ul_el.appendChild(need_li_el);

    target.appendChild(need_ul_el);
  }
};

var process_checkbox = document.getElementById('needListItems');
process_checkbox.addEventListener('click', move_note);

//var checkbox_el_listener = document.getElementsByTagName('input');
//checkbox_el.addEventListener('checked', checkbox_el_listener);

render_list();

//document.getElementById('fillNeeds').addEventListener('click', function_name);

//we need it to only render the value of the checked box
//checkbox_el.checked counter
/*function function_name(){
  var summary_target = document.getElementById('summary');
  var check_boxes_els = document.getElementsByClassName('checkbox');
  var thank_you = 'Thank you for fulfilling some community needs!';
  var thanks_h1_el = document.createElement('h1');
  thanks_h1_el.textContent = thank_you;
  summary_target.appendChild(thanks_h1_el);

  console.log('checked: ', check_boxes_els);
// function that grabs checks
// when render_list item.checked === true, it only prints when every checkbox is true
//for (var j = 0; j < checkbox_el.length; j++){
//   if(checkbox_el.checked === true){
//     alert('you have checked a box');
//   } else{
//     alert('you did this wrong');
//   }