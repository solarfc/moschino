"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));
document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {
  setTimeout(function () {
    document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5';
    document.querySelector('html').style.overflowY = 'scroll';
  }, 1500);
  /*
      slow scroll
   */

  $('.catalog__block-title a').on('click', function () {
    var href = $(this).attr('href');
    $('root, html').animate({
      scrollTop: $(href).offset().top
    }, 800);
  });
  /*
      increase date
   */

  var today = new Date(),
      tomorrow = new Date(),
      day,
      month,
      year,
      i = 3,
      period = document.querySelectorAll('p.period output');
  tomorrow.setDate(today.getDate() + i);
  day = tomorrow.getDate() > 9 ? tomorrow.getDate() : "0".concat(tomorrow.getDate());
  month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : "0".concat(tomorrow.getMonth() + 1);
  year = tomorrow.getFullYear();

  for (var _i = 0; _i < period.length; _i++) {
    period[_i].innerHTML = "".concat(day, ".").concat(month, ".").concat(year.toString().slice(2));
  }

  document.querySelector('.catalog__block ul li p output').innerHTML = "".concat(year, " - ").concat(year + 1);
  document.querySelector('.footer p output').innerHTML = year;
  /*
      loop fancybox
   */

  $.fancybox.defaults.loop = true;
  /*
      description slider
   */

  $('.description__content-slider').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 3
      }
    }
  });
  /*
      gallery slider on mobile
   */

  $('.gallery__content-mobile').owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    autoHeight: true
  });
  /*
      change size & color & photo
   */

  var bootsColors = document.querySelectorAll('.catalog__block.boots .color figure span'),
      bootsActiveColor = document.querySelector('.catalog__block.boots .color p output'),
      bootsSize = document.querySelectorAll('.catalog__block.boots .size figure p'),
      bootsActiveSize = document.querySelector('.catalog__block.boots .size p output'),
      bootsBigImg = document.querySelector('.catalog__block.boots img.boot'),
      bootsImg = document.querySelector('.catalog__block.boots .catalog__block-img'),
      bootsLinks = document.querySelectorAll('.catalog__block.boots .catalog__block-img a'),
      bootsSmallImg = document.querySelectorAll('.catalog__block.boots .catalog__block-img a img'),
      sneakersColors = document.querySelectorAll('.catalog__block.sneakers .color figure span'),
      sneakersActiveColor = document.querySelector('.catalog__block.sneakers .color p output'),
      sneakersSize = document.querySelectorAll('.catalog__block.sneakers .size figure p'),
      sneakersActiveSize = document.querySelector('.catalog__block.sneakers .size p output'),
      sneakersBigImg = document.querySelector('.catalog__block.sneakers img.boot'),
      sneakersImg = document.querySelector('.catalog__block.sneakers .catalog__block-img'),
      sneakersLinks = document.querySelectorAll('.catalog__block.sneakers .catalog__block-img a'),
      sneakersSmallImg = document.querySelectorAll('.catalog__block.sneakers .catalog__block-img a img'),
      changeSize = function changeSize(model, size) {
    var _loop = function _loop(_i2) {
      var _loop2 = function _loop2(j) {
        model[j].addEventListener('click', function () {
          var activeSize = model[j].dataset.size;
          size.style.opacity = '0';
          setTimeout(function () {
            size.innerHTML = "<span>".concat(activeSize.slice(0, 2), "</span>").concat(activeSize.slice(2));
          }, 500);
          setTimeout(function () {
            size.style.opacity = '1';
          }, 550);

          model[_i2].classList.remove('active');

          model[j].classList.add('active');
        });
      };

      for (var j = 0; j < model.length; j++) {
        _loop2(j);
      }
    };

    for (var _i2 = 0; _i2 < model.length; _i2++) {
      _loop(_i2);
    }
  },
      changeColor = function changeColor(color, activeColor, bigImg, block, link, smallImg) {
    var _loop3 = function _loop3(_i3) {
      var _loop4 = function _loop4(j) {
        color[j].addEventListener('click', function () {
          if (color[j].classList.contains('active')) {
            color[_i3].classList.remove('active');

            color[j].classList.add('active');
          } else {
            var activeClass = color[j].className;
            var active = color[j].dataset.color;
            var activeModel = color[j].dataset.model;

            color[_i3].classList.remove('active');

            color[j].classList.add('active');
            activeColor.style.opacity = '0';
            bigImg.style.opacity = '0';
            block.style.opacity = '0';
            setTimeout(function () {
              activeColor.innerHTML = active;
              bigImg.src = "img/catalog/".concat(activeModel, "/big.png");
              bigImg.className = "boot ".concat(activeClass);

              for (var _i4 = 0; _i4 < link.length; _i4++) {
                link[_i4].href = "img/catalog/".concat(activeModel, "/").concat(_i4 + 1, ".jpg");
                smallImg[_i4].src = "img/catalog/".concat(activeModel, "/").concat(_i4 + 1, ".jpg");
              }
            }, 500);
            setTimeout(function () {
              activeColor.style.opacity = '1';
              bigImg.style.opacity = '1';
              block.style.opacity = '1';
            }, 550);
          }
        });
      };

      for (var j = 0; j < color.length; j++) {
        _loop4(j);
      }
    };

    for (var _i3 = 0; _i3 < color.length; _i3++) {
      _loop3(_i3);
    }
  };

  changeSize(bootsSize, bootsActiveSize);
  changeSize(sneakersSize, sneakersActiveSize);
  changeColor(bootsColors, bootsActiveColor, bootsBigImg, bootsImg, bootsLinks, bootsSmallImg);
  changeColor(sneakersColors, sneakersActiveColor, sneakersBigImg, sneakersImg, sneakersLinks, sneakersSmallImg);
  $('.review__content-block').owlCarousel({
    items: 2,
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      }
    }
  });
  /*
      political
   */

  var bodyFilter = document.querySelector('.body__filter'),
      political = document.querySelector('.political'),
      feedback = document.querySelector('.feedback'),
      politicalOpen = document.querySelector('p.politic'),
      feedbackOpen = document.querySelector('p.feed'),
      politicalClose = document.querySelector('img.close'),
      feedbackClose = document.querySelector('span.close'),
      formTitle = document.querySelector('.feedback p'),
      inputValue = document.querySelector('.feedback input'),
      textareaValue = document.querySelector('.feedback textarea'),
      form = document.querySelector('.feedback form'),
      changeForm = function changeForm() {
    inputValue.value = '';
    textareaValue.value = '';

    for (var _i5 = 0; _i5 < form.children.length; _i5++) {
      form.children[_i5].style.opacity = '1';
    }

    formTitle.style.opacity = '0';
  },
      open = function open(block) {
    bodyFilter.style.cssText = 'background: rgba(0, 0, 0, .8); z-index: 9999';
    block.style.cssText = 'transform: translate(-50%, -50%) rotateX(0deg); z-index: 99999; opacity: 1';
    document.querySelector('html').style.overflowY = 'hidden';
  },
      close = function close(block) {
    bodyFilter.style.cssText = 'background: rgba(0, 0, 0, 0); z-index: -5';
    block.style.cssText = 'transform: translate(-50%, -50%) rotateX(-90deg); z-index: -5; opacity: 0';
    document.querySelector('html').style.overflowY = 'scroll';
    setTimeout(changeForm, 500);
  };

  inputValue.addEventListener('change', function () {
    inputValue.value;
  });
  textareaValue.addEventListener('change', function () {
    textareaValue.value;
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputValue.value !== '' && textareaValue.value !== '') {
      for (var _i6 = 0; _i6 < form.children.length; _i6++) {
        form.children[_i6].style.opacity = '0';
      }

      formTitle.style.opacity = '1';
    }
  });
  politicalOpen.addEventListener('click', function () {
    open(political);
  });
  feedbackOpen.addEventListener('click', function () {
    open(feedback);
  });
  bodyFilter.addEventListener('click', function () {
    close(political);
  });
  bodyFilter.addEventListener('click', function () {
    close(feedback);
  });
  politicalClose.addEventListener('click', function () {
    close(political);
  });
  feedbackClose.addEventListener('click', function () {
    close(feedback);
  });

  var toggleBucket = function toggleBucket() {
    var bucket = document.querySelector('a.bucket'),
        topOfWindow = window.pageYOffset + innerHeight,
        catalogBlockTopPosition = document.querySelector('.catalog').offsetTop,
        reviewBlockTopPosition = document.querySelector('.review').offsetTop,
        footerTopPosition = document.querySelector('.footer').offsetTop;

    if (topOfWindow > catalogBlockTopPosition && topOfWindow < reviewBlockTopPosition || topOfWindow > footerTopPosition) {
      bucket.style.opacity = '0';
      bucket.style.zIndex = '-5';
    } else {
      bucket.style.opacity = '1';
      bucket.style.zIndex = '999';
    }
  };

  if (/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
    var href = $('#mobile-order').offset().top - innerHeight;
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: href
      }, 800);
    });
    window.addEventListener('scroll', function () {
      toggleBucket();
    });
    window.addEventListener('resize', function () {
      toggleBucket();
    });
  } else {
    var _href = $('#catalog').offset().top;
    $('.to-order a, a.bucket').on('click', function () {
      $('html, body').animate({
        scrollTop: _href
      }, 800);
    });
  }
};