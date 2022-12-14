/***************************
****************************

공통 스크립트

****************************
****************************/

var $Gb = {};

(function ($) {
  'use strict';

  $(function () {
    $Gb.activeFunc().initFunc();

    if ($('#main').length) {
      $Gb.activeFunc().MainSlider();
      $Gb.activeFunc().SubSlider();
      $Gb.activeFunc().FootSlider();
    }
  });

  function $commonFunc() {
    // Web
    $Gb.Body = $('body');
    $Gb.header = $('#gnb');
    $Gb.Foot = $('footer');
    $Gb.gnbWrap = $Gb.header.find('.gnb-web');
    $Gb.menu = $Gb.gnbWrap.find('.menu');
    $Gb.depth2 = $Gb.gnbWrap.find('.depth2');
    $Gb.Dropdown = $('.dropDown');
    $Gb.mainCarousel = $('.mainCarousel');
    $Gb.subCarousel = $('.subCarousel');
    $Gb.footBnrCarousel = $('.footBnrCarousel');
    $Gb.scrollTop = document.documentElement.scrollTop;

    // Mobile
    $Gb.gnbWrap_m = $Gb.header.find('.gnb-mob');
    $Gb.menu_m = $Gb.gnbWrap_m.find('.menu');
    $Gb.dimmedAllmenu = $('<div id="dimmed_Allmenu"></div>');

    var gnbHover = function () {
        // pc Gnb
        $Gb.menu.find('> li').on({
          mouseenter: function () {
            var trgItem = $(this);

            trgItem.addClass('on');
            $Gb.menu.find('> li').not(trgItem).removeClass('on');

            if (!$Gb.menu.hasClass('active')) {
              $Gb.menu.addClass('active');
            }

            $Gb.depth2.stop().fadeIn(300);
          },
        });

        $Gb.menu.on({
          mouseleave: function () {
            $Gb.menu.find('> li').removeClass('on');

            $Gb.depth2.css('display', 'none');
            $Gb.menu.removeClass('active');
          },
        });

        $Gb.menu.find('> li > a').on({
          focusin: function () {
            var trgItem_ = $(this).closest('li');

            $Gb.menu.find('> li').removeClass('on');
            $(this).closest('li').addClass('on');

            if (!$Gb.menu.hasClass('active')) {
              $Gb.menu.addClass('active');
            }

            $Gb.depth2.stop().fadeIn(300);
          },
        });

        $(document).on('focusout', '.menu .btn-wrapper > button:last-of-type', function () {
          $Gb.menu.find('> li').removeClass('on');
          $Gb.depth2.css('display', 'none');

          $Gb.menu.removeClass('active');
        });
      },
      gnbSearchOn = function () {
        var searchLayer = $Gb.header.find('.searchArea');

        $('.gnbSearchOn').on('click', function () {
          if (searchLayer.css('display') == 'block') {
            $('.gnbSearchOn').removeClass('on');
            searchLayer.stop().slideUp(300);
          } else {
            $('.gnbSearchOn').addClass('on');
            searchLayer.stop().slideDown(300);
            searchLayer.find('input[type=text]').focus();
          }
        });
      },
      allMenu = function () {
        // mobile 전체 메뉴
        $('.menu-all').on('click', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (!$(this).hasClass('open')) {
            $(this).addClass('open');
            $Gb.gnbWrap_m.stop().animate(
              {
                right: 0,
              },
              {
                duration: 300,
                complete: function () {
                  $Gb.dimmedAllmenu.insertAfter($Gb.gnbWrap_m).stop().fadeIn(400);
                  $Gb.Body.css({
                    height: $Gb.dimmedAllmenu.height(),
                    'overflow-y': 'hidden',
                  });
                },
              }
            );
          } else {
            $(this).removeClass('open');
            $Gb.gnbWrap_m.stop().animate(
              {
                right: '-100%',
              },
              300
            );
            $Gb.Body.css({
              height: 'auto',
              'overflow-y': 'visible',
            });
            $Gb.dimmedAllmenu.stop().fadeOut(300, function () {
              $(this).remove();
            });
          }
        });

        $Gb.menu_m.find('> li > a').each(function () {
          var _trg = $(this);

          _trg.on('click', function (e) {
            var currentMenu = _trg.closest('li');

            if (_trg.next('.depth2').find('li').length) {
              e.preventDefault();
              e.stopPropagation();
            }

            if (!currentMenu.hasClass('on')) {
              currentMenu.addClass('on');
              $Gb.menu_m.find('> li').not(currentMenu).removeClass('on');
              if (currentMenu.find('li').length) {
                currentMenu.find('.depth2').stop().slideDown(300);
              }
              $Gb.menu_m.find('> li').not(currentMenu).find('.depth2').stop().slideUp(300);
            } else {
              currentMenu.removeClass('on');
              currentMenu.find('.depth2').stop().slideUp(300);
            }
          });
        });
      },
      MainSlider = function () {
        // 메인 슬라이드
        $Gb.mainCarousel.slick({
          dots: true,
          dotsClass: 'dots-item',
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          adaptiveHeight: true,
          arrows: false,
          centerMode: true,
          centerPadding: 0,
        });

        //슬라이드 일시정지 버튼
        var playController = $('.main-section-01 .playController');

        playController.append('<button class="btn-controller pause"><em class="hidden_txt">일시정지</em></button>');
        playController.append('<button class="btn-controller play"><em class="hidden_txt">재생하기</em></button>');

        playController.each(function () {
          var btnController = $(this).find('.btn-controller');

          btnController.on('click', function () {
            if ($(this).hasClass('pause')) {
              $Gb.mainCarousel.slick('slickPause');
              console.log('메인 슬라이드 일시정지');
            } else {
              $Gb.mainCarousel.slick('slickPlay');
              console.log('메인 슬라이드 재생');
            }
          });
        });
      },
      SubSlider = function () {
        // 중단 배너 슬라이드
        $Gb.subCarousel.slick({
          dots: true,
          dotsClass: 'dots-item',
          infinite: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,
          adaptiveHeight: true,
          arrows: false,
          centerMode: true,
          centerPadding: 0,
        });
        //슬라이드 일시정지 버튼
        var playController = $('.main-section-03 .playController');

        playController.append('<button class="btn-controller pause"><em class="hidden_txt">일시정지</em></button>');
        playController.append('<button class="btn-controller play"><em class="hidden_txt">재생하기</em></button>');

        playController.each(function () {
          var btnController = $(this).find('.btn-controller');

          btnController.on('click', function () {
            if ($(this).hasClass('pause')) {
              $Gb.subCarousel.slick('slickPause');
              console.log('서브 배너 슬라이드 일시정지');
            } else {
              $Gb.subCarousel.slick('slickPlay');
              console.log('서브 배너 슬라이드 재생');
            }
          });
        });
      },
      FootSlider = function () {
        // 하단 슬라이드
        $Gb.footBnrCarousel.slick({
          dots: false,
          infinite: true,
          speed: 400,
          slidesToShow: 4,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 4000,

          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 561,
              settings: {
                slidesToShow: 1,
              },
            },
          ],
        });

        //슬라이드 일시정지 버튼
        var playController = $('.family-site .playController');

        playController.append('<button class="btn-controller pause"><em class="hidden_txt">일시정지</em></button>');
        playController.append('<button class="btn-controller play"><em class="hidden_txt">재생하기</em></button>');

        playController.each(function () {
          var btnController = $(this).find('.btn-controller');

          btnController.on('click', function () {
            if ($(this).hasClass('pause')) {
              $Gb.footBnrCarousel.slick('slickPause');
              console.log('foot 배너 슬라이드 일시정지');
            } else {
              $Gb.footBnrCarousel.slick('slickPlay');
              console.log('foot 배너 슬라이드 재생');
            }
          });
        });
      },
      initFunc = function () {
        gnbHover();
        allMenu();
        gnbSearchOn();
      };

    return {
      initFunc: initFunc,
      MainSlider: MainSlider,
      SubSlider: SubSlider,
      FootSlider: FootSlider,
    };
  }

  $Gb.activeFunc = function () {
    var $activeFunc = new $commonFunc();

    return $activeFunc;
  };

  $(window).on({
    scroll: function () {
      $Gb.scrollTop = document.documentElement.scrollTop;

      if ($Gb.scrollTop > 0) {
        $('#gnb').addClass('fixed');
      } else {
        $('#gnb').removeClass('fixed');
      }
    },
  });
})(jQuery);
