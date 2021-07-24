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

$('.modal-content__close, .modal__overlay').on('click', function(){
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

}); //end ready