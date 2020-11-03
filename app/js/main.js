"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
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

  for (var _i2 = 0; _i2 < document.querySelectorAll('p.year output').length; _i2++) {
    document.querySelectorAll('p.year output')[_i2].innerHTML = year;
  }
  /*
      loop fancybox
   */


  $.fancybox.defaults.loop = true;
  $('.description__content-slider').owlCarousel({
    loop: true,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1200: {
        items: 3
      }
    }
  });

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
    var _loop = function _loop(_i3) {
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

          model[_i3].classList.remove('active');

          model[j].classList.add('active');
        });
      };

      for (var j = 0; j < model.length; j++) {
        _loop2(j);
      }
    };

    for (var _i3 = 0; _i3 < model.length; _i3++) {
      _loop(_i3);
    }
  },
      changeColor = function changeColor(color, activeColor, bigImg, block, link, smallImg) {
    var _loop3 = function _loop3(_i4) {
      var _loop4 = function _loop4(j) {
        color[j].addEventListener('click', function () {
          if (color[j].classList.contains('active')) {
            color[_i4].classList.remove('active');

            color[j].classList.add('active');
          } else {
            var active = color[j].dataset.color;
            var activeModel = color[j].dataset.model;

            color[_i4].classList.remove('active');

            color[j].classList.add('active');
            activeColor.style.opacity = '0';
            bigImg.style.opacity = '0';
            block.style.opacity = '0';
            setTimeout(function () {
              activeColor.innerHTML = active;
              bigImg.src = "img/catalog/".concat(activeModel, "/big.png");

              for (var _i5 = 0; _i5 < link.length; _i5++) {
                link[_i5].href = "img/catalog/".concat(activeModel, "/").concat(_i5 + 1, ".jpg");
                smallImg[_i5].src = "img/catalog/".concat(activeModel, "/").concat(_i5 + 1, ".jpg");
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

    for (var _i4 = 0; _i4 < color.length; _i4++) {
      _loop3(_i4);
    }
  };

  changeSize(bootsSize, bootsActiveSize);
  changeSize(sneakersSize, sneakersActiveSize);
  changeColor(bootsColors, bootsActiveColor, bootsBigImg, bootsImg, bootsLinks, bootsSmallImg);
  changeColor(sneakersColors, sneakersActiveColor, sneakersBigImg, sneakersImg, sneakersLinks, sneakersSmallImg);
  $('.review__content-block').owlCarousel({
    items: 2,
    loop: true,
    nav: true
  });
  /*
      political
   */

  var bodyFilter = document.querySelector('.body__filter'),
      politicalOpen = document.querySelector('p.politic'),
      political = document.querySelector('.political'),
      politicalClose = document.querySelector('img.close'),
      closePolitical = function closePolitical() {
    document.querySelector('html').style.overflowY = 'scroll';
    bodyFilter.style.zIndex = '-5';
    bodyFilter.style.background = 'rgba(0, 0, 0, 0)';
    political.style.cssText = "transform: translate(-50%, -50%) rotateX(-90deg);\n        z-index: -5;";
  };

  politicalOpen.addEventListener('click', function () {
    document.querySelector('html').style.overflowY = 'hidden';
    bodyFilter.style.zIndex = '999';
    bodyFilter.style.background = 'rgba(0, 0, 0, 0.8)';
    political.style.cssText = "transform: translate(-50%, -50%) rotateX(0deg);\n        z-index: 9999;";
  });
  politicalClose.addEventListener('click', closePolitical);
  bodyFilter.addEventListener('click', closePolitical); // $('.description__content-slider').owlCarousel({
  //     // // items: 3,
  //     // loop: true,
  //     // nav: true,
  //     // navText: ['<div class="prev-arrow"></div>, <div class="next-arrow"></div>']
  // })
  // /*
  //     change href on mobile
  //  */
  //

  if (/iPhone|Android/i.test(navigator.userAgent)) {
    document.querySelector('.gallery__content-block').classList.add('owl-carousel');
    $('.gallery__content-block').owlCarousel({
      items: 1,
      loop: true,
      autoHeight: true
    });
  }
};