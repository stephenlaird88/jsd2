// Elements
// ------------------------------------------
var date      = document.querySelector('.date');
var games     = document.querySelector('.games');
var recordTemplate = document.querySelector('#record-template');
var dateTemplate = document.querySelector('#date-template');

// Templates
// ------------------------------------------

var template = Handlebars.compile(dateTemplate.innerHTML);
var html = template(mockdata);
date.innerHTML = html;

var template = Handlebars.compile(recordTemplate.innerHTML);
var html = template(mockdata);
games.innerHTML = html;


