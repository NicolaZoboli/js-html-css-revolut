$(document).ready(function() {
  $('.parent-dropdown').hover(function() {
    $(this).children('.dropdown').show();
  },
  function() {
    $(this).children('.dropdown').hide();
  });

$('.show-hamburger-dropdown').click(function() {
  $(this).parents('#main-nav').next('#hamburger-dropdown').show(),
  $(this).hide();
  $('#main-nav').hide();
  $('#jumbo').hide();
  $('main').removeClass('padding-generale');
  });

$('.hide-hamburger-dropdown').click(function() {
  $(this).parents('#hamburger-dropdown').hide(),
  $(this).parents('#hamburger-dropdown').prev('#main-nav').children('.show-hamburger-dropdown').show();
  $('#main-nav').show();
  $('#jumbo').show();
  $('main').addClass('padding-generale');
  });
});

$(window).resize(function(){
  if ($('header').width() > 767){
         $('#hamburger-dropdown').hide();
         $('#main-nav').show();
         $('#jumbo').show();
         $('main').addClass('padding-generale');
  } else if ($('header').width() < 767) {
    $('.show-hamburger-dropdown').show();
  }
});
