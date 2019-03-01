'use strict';

//Global Variable - stores contents from local Storage
var needs_list = [];

//Function -- render a form to the needs list page

var render_list = function(){
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

    target.appendChild(need_ul_el);
  }
};


//https://stackoverflow.com/questions/15089857/sending-html-emails-with-javascript

//function thast sends an email about the offers the user is willing to take.
function sendMail(){//eslint-disable-line
  var mailBody = document.getElementById('summary').innerHTML;
  mailBody = mailBody.replace(/<[\d\w\/="\-\s]*>/gm, ' ');//eslint-disable-line
  window.location="mailto:needs.offers.projects@gmail.com?subject=Offer for Processing &body="+mailBody;//eslint-disable-line
}

render_list();
