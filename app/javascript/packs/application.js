/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

console.log('Hello World from Webpacker')

import 'shared/_arrows-up-and-down';

import 'fullpage.js';
// import 'motion-ui';

$('#icon-dropdown').click(function(){
    $('#list-dropdown').slideToggle();
});

$(document).ready(function() {
  setTimeout(function() {
    $('.flash').slideUp()
  }, 10000)
})
