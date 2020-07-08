$(document).ready(function() {
  $('.parent-dropdown').hover(function() {
    $(this).children('.dropdown').show();
  },
  function() {
    $(this).children('.dropdown').hide();
  });

$('.show-hamburger-dropdown').click(function() {
  $(this).next('#hamburger-dropdown').show(),
  $(this).hide();
  });

$('.hide-hamburger-dropdown').click(function() {
  $(this).parents('#hamburger-dropdown').hide(),
  $(this).parents('#hamburger-dropdown').prev('.show-hamburger-dropdown').show();
  });
});
