$(document).ready(function() {

  // fa apparire e sparire il menu dropdown della navbar del main quando in hover
  $('.parent-dropdown').hover(function() {
    $(this).children('.dropdown').show();
  },
  function() {
    $(this).children('.dropdown').hide();
  });

  // al click del pulsante ad hamburger fa apparire la navbar quando si è in visuale smartphone
  $('.show-hamburger-dropdown').click(function() {
    $(this).parents('#main-nav').next('#hamburger-dropdown').show(),
    $(this).hide();
    $('#main-nav').hide();
    $('#jumbo').hide();
    $('main').removeClass('padding-generale');
    });

    // al click del pulsante ad x fa sparire la navbar quando si è in visuale smartphone
  $('.hide-hamburger-dropdown').click(function() {
    $(this).parents('#hamburger-dropdown').hide(),
    $(this).parents('#hamburger-dropdown').prev('#main-nav').children('.show-hamburger-dropdown').show();
    $('#main-nav').show();
    $('#jumbo').show();
    $('main').addClass('padding-generale');
    });

    $('.parent-dropdown-hamburger').click(function() {
      // al click su i singoli li della navbar del dropdown ad hamburger fa apparire o sparire i sottoelementi
      $(this).children('.child-dropdown-hamburger').slideToggle();
      // cambia la freccia da down a up e viceversa
      $(this).find('.arrow').toggleClass('fa-chevron-down fa-chevron-up');
    });




});

// al resize dello schermo spariscono o appaiono alcuni elementi
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
