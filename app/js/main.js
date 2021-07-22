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
$('head').append('<style>.noscroll .top-menu{padding-right: '+getScrollBarWidth()+'px;}</style>');


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




}); //end ready