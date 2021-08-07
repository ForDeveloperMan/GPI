$(document).ready(function() {

function setNoscroll(){
	$('html').addClass('noscroll');
}
function unsetNoscroll(){
	$('html').removeClass('noscroll');
}

// $('.inpTel').mask("7 (999) 999 99 99");

function getScrollBarWidth(){
  var inner = document.createElement('p');
  inner.style.width = "100%";
  inner.style.height = "200px";

  var outer = document.createElement('div');
  outer.style.position = "absolute";
  outer.style.top = "0px";
  outer.style.left = "0px";
  outer.style.visibility = "hidden";
  outer.style.width = "200px";
  outer.style.height = "150px";
  outer.style.overflow = "hidden";
  outer.appendChild (inner);

  document.body.appendChild (outer);
  var w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var w2 = inner.offsetWidth;
  if (w1 == w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return (w1 - w2);
};

$('head').append('<style>.noscroll{margin-right: '+getScrollBarWidth()+'px;}</style>');
// $('head').append('<style>.noscroll .top-menu{padding-right: '+getScrollBarWidth()+'px;}</style>');


// jQuery(function($){
// 	$('body').mouseup(function (e){ // событие клика по веб-документу
// 		var div = $('.top-menu');
// 		if (!div.is(e.target) // если клик был не по нашему блоку
// 		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
// 				if ( $(e.target).closest('.modal').length ) {
					
// 				}else{
// 					$('.top-menu__burger').removeClass('active');
// 					$('.top-menu').removeClass('active');
// 					$('.top-menu__menu').fadeOut(400);
// 					unsetNoscroll();
// 				}
// 		}
// 	});

// });

let dropFix;

$('.links-menu__dropdownWrap').on('mouseenter', function(){
  clearTimeout(dropFix);
  $(this).find('.links-menu__dropdown').fadeIn(400);
});
$('.links-menu__dropdownWrap').on('mouseleave', function(){
  clearTimeout(dropFix);
  dropFix = setTimeout(drop, 50, $(this));
  function drop(t){
    $(t).find('.links-menu__dropdown').fadeOut(400);
  }
});

$('.btnOpen').on('click', function(){
  $($(this).data('modal')).fadeIn(400);
  setNoscroll();
  return false;
});

$('.modal-content__close, .modal__overlay, .modal_login__overlay').on('click', function(){
  $(this).closest('.modal').fadeOut(400);
  unsetNoscroll();
  return false;
});

function checkMenu(){
  if ( $(window).scrollTop() > 1 ) {
    if ( $(window).width() > 600 ) {
      $('.top-menu').addClass('top-menu_fixed');
      $('.top-menu_home').addClass('top-menu_active');
    }
  }else{
    if ( $(window).width() > 600 ) {
      $('.top-menu').removeClass('top-menu_fixed');
      $('.top-menu_home').removeClass('top-menu_active');
    }
  }
}
checkMenu();

$(window).scroll(function(){
  checkMenu();
});

$('.top-menu__btn').on('click', function(){
  $('.top-menu').find('.top-menu__btn').hide();
  $('.top-menu').find('.top-menu__close').show();
  $('.nav-menu').addClass('active');
  setNoscroll();
  return false;
});
$('.top-menu__close').on('click', function(){
  $('.top-menu').find('.top-menu__btn').show();
  $('.top-menu').find('.top-menu__close').hide();
  $('.nav-menu').removeClass('active');
  unsetNoscroll();
  return false;
});


$('.block-reviews').owlCarousel({
  items: 1,
  nav: true,
  navText: ['<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle r="23.5" transform="matrix(-1 0 0 1 24 24)" stroke="#B39013"/><path d="M28.7992 33.6004L19.1992 24.0004L28.7992 14.4004" stroke="#B39013"/></svg>', '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="24" cy="24" r="23.5" stroke="#B39013"/><path d="M19.2008 33.6004L28.8008 24.0004L19.2008 14.4004" stroke="#B39013"/></svg>'],
  dots: true,
  responsive: {
    0: {
      margin: 50,
    },
    601: {
      margin: 0,
    },
  }
});

$('.form-el__inp').on('focus', function(){
  var wrap = $(this).closest('.form-el');
  wrap.addClass('active');
});
$('.form-el__inp').on('blur', function(){
  var wrap = $(this).closest('.form-el');
  if ( $(this).val() === '' || $(this).val() === null || $(this).val() === undefined || $(this).val() === false ) {
    wrap.removeClass('active');
  }else{
    wrap.addClass('active');
  }
});


if ( $(window).width() <= 600 ) {
  $('.work-el').each(function(){
    $(this).append('<svg class="work-el__btn" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12.5" cy="12.5" r="12" stroke="#B39013"/><line class="work-el__btn-line" x1="12.5" y1="6.5" x2="12.5" y2="18.5" stroke="#B39013" stroke-linecap="round"/><line x1="18.5" y1="12.5" x2="6.5" y2="12.5" stroke="#B39013" stroke-linecap="round"/></svg>');
  });
  $('.work-el__btn').on('click', function(){
    var wrap = $(this).closest('.work-el');
    if ( wrap.hasClass('active') ) {
      wrap.removeClass('active');
      wrap.find('.work-el__text').fadeOut(200);
    }else{
      wrap.addClass('active');
      wrap.find('.work-el__text').fadeIn(200);
    }
    return false;
  });
}

$('.message-info__close').on('click', function(){
  $(this).closest('.message-info').fadeOut(400);
  return false;
});

jQuery(function($){
 $('body').mouseup(function (e){
   var div = $('.message-info');
   if (!div.is(e.target) && div.has(e.target).length === 0) {
       $('.message-info').fadeOut(400);
    }
  });
 });


$('.question-el__top').on('click', function(){
  var wrap = $(this).closest('.question-el');
  if ( wrap.hasClass('active') ) {
    wrap.removeClass('active');
    wrap.find('.question-el__body').slideUp(200);
  }else{
    wrap.addClass('active');
    wrap.find('.question-el__body').slideDown(200);
  }
  return false;
});

// $('.sec-services-page__tabs .links-menu__link').on('click', function(){
//   var wrapAll = $(this).closest('.sec-services-page__tabs');
//   var wrap = $(this).closest('.links-menu__el');
//   wrapAll.find('.links-menu__link').removeClass('active');
//   $(this).addClass('active')
//   $('.sec-services-page__content').find('.sec-services-page__content-el').hide();
//   $('.sec-services-page__content').find('.sec-services-page__content-el').eq(wrap.index()).fadeIn(400);
//   return false;
// });

$('.btn-pass-forgot').on('click', function(){
  $('.wrap-login-form__el').hide();
  $('#wrap-login-form-reset').fadeIn(400);
  return false;
});
$('.btn-pass-back').on('click', function(){
  $('.wrap-login-form__el').hide();
  $('#wrap-login-form-first').fadeIn(400);
  return false;
});

if ( $(window).width() <= 600 ) {
  $('.block-info-2').addClass('owl-carousel');
  $('.block-info-2').owlCarousel({
    items: 1,
    margin: 30,
    nav: false,
    dots: true,
  });
}


}); //end ready