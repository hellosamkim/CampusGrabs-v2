$(function () {
  animate_css_animations();
  typesentence_search();
  $(document.body).css({'opacity':0}).animate({'opacity':1})
  setTimeout('typesentence()', 1000);
  fixed_nav();
});

typesentence = function () {
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

function hidden_for_animate (e) {
  $(e).css({'visibility': 'hidden'});
};

function animate_css_animations () {
  hidden_for_animate('.logo');
  hidden_for_animate('.login form');
  setTimeout("$('.logo').addClass('animated bounceInDown')", 500);
  setTimeout("$('.logo').removeClass('bounceInDown')", 1600);
  setTimeout("$('.get-started').addClass('animated pulse infinite')", 1500);
  $('.login h3').hover(function () {
    $('.login form').addClass('animated slideInUp');
  });
  addRemoveAnimate('.logo', 'tada');

  function addRemoveAnimate(e, animation) {
    $(e).mouseenter(function (){
      $(e).addClass("animated " + animation);
      setTimeout(function () {
        $(e).removeClass(animation);
      }, 1600);
    });
  };
};

function typesentence_search () {
  $('#search-sentences').fadeOut();
  $('#welcome-sentences')
    .on('click', function (){
      $('#search-sentences').fadeIn();
      $('#search-sentences input').focus();
      $('#welcome-sentences > #sentences').fadeOut();
    })
};

function fixed_nav () {
  var e = $('.top-nav .links');
  var clss = "nav-link-scrolled";

  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      e.addClass(clss);
    } else {
      e.removeClass(clss);
    }
  });
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