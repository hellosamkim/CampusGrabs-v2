$(function(){
  hide_fadein('#welcome-wrapper');
  animate_css_animations();
  typesentence_search();
  hidden_for_animate('.logo');
  hidden_for_animate('.login form');
  setTimeout('typesentence()', 1000);

});

typesentence = function() {
  return $('#sentences').typed({
    strings: ['I want to buy a long board', 'I want to buy a laptop', 'I want to buy a textbook', 'I want to sell my homecoming tickets', 'Enter keyword here...'],
    typeSpeed: 110,
    backDelay: 3000,
    backSpeed: 30,
    contentType: 'html',
    resetCallback: function() {
      newTyped();
    }
  });
};

function hide_fadein(e) {
  $(e).css({'opacity':0}).animate({'opacity':1})
};

function hidden_for_animate(e) {
  $(e).css({'visibility': 'hidden'});
};

function animate_css_animations() {
  setTimeout("$('.logo').addClass('animated bounceInDown')", 500);
  setTimeout("$('.get-started').addClass('animated pulse infinite')", 1500);
  $('.login h3').hover(function() {
    $('.login form').addClass('animated slideInUp');
  });
};

function typesentence_search() {
  $('#search-sentences').fadeOut();
  $('#welcome-sentences')
    .on('click', function(){
      $('#search-sentences').fadeIn();
      $('#search-sentences input').focus();
      $('#welcome-sentences > #sentences').fadeOut();
    })
};

// Action for mouseclick outside of search-sentence
$(document).mouseup(function (e)
{
  if (!$("#search-sentences").is(e.target)
    && $("#search-sentences").has(e.target).length === 0)
  {
    $("#search-sentences").fadeOut();
    $("#welcome-sentences > #sentences").fadeIn();
  }
});