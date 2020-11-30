$(function(){

//모바일 메뉴
$('#mNav > .ham').click(function(e){
    e.preventDefault();
    $('#mNav > .ham').toggleClass("active");
    $('.mNav_menu').toggleClass('active');
    $('.mNav_bg').fadeToggle();
});

$('.mNav_bg').click(function(){
    $('#mNav > .ham').removeClass("active");
    $('.mNav_menu').removeClass('active');
    $('.mNav_bg').fadeOut();
});

$(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header').addClass('active')
    }
    else {
      $('header').removeClass('active')
    }    
  });


//배너 이미지 슬라이드
var mySwiper = new Swiper('.swiper-container', {
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    },
    autoplay: {
    delay: 5000,
    },
    });

     //영화차트 이미지 슬라이드
     var swiper = new Swiper('.swiper-container2',{
     slidesPerView: 4,
     spaceBetween: 24,
     mousewheel: {
     invert: true,
     },
     keyboard: {
     enabled: true,
     onlyInViewport: false,
     },
     autoplay: {
     delay: 5000,
     },
     breakpoints: {
     600: {
     slidesPerView: 1.4,
     spaceBetween: 24
     },
     768: {
     slidesPerView: 2,
     spaceBetween: 24
     },
     960: {
     slidesPerView: 3,
     spaceBetween: 24
     }
     }
     });

    //영화차트 탭메뉴
    var movBtn = $('.movie_title > ul > li');
    var movCont = $(".movie_chart > div");

    movCont.hide().eq(0).show();

    movBtn.click(function(e){
      e.preventDefault();
      var target = $(this);
      var index = target.index();
      console.log(index);

      movBtn.removeClass('active');
      target.addClass('active');
      movCont.hide();
      movCont.eq(index).fadeIn();
    });

    //공지사항 탭 메뉴

    var tabMenu = $('.notice');


    tabMenu.find('ul > li > ul').hide();
    tabMenu.find('li.active > ul').show();

    function tabList(e) {
       e.preventDefault();
       var target = $(this);
       target.next().show().parent('li').addClass('active').siblings('li').removeClass('active').find('ul').hide();
    }

    tabMenu.find('ul > li >a').click(tabList).focus(tabList);
});