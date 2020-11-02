"use strict";

var myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log("width ".concat(myWidth, " \n height ").concat(myHeight));

window.onload = function () {
  $.fancybox.defaults.loop = true;
  $('.description__content-slider').owlCarousel({
    loop: true,
    nav: true
  });
  $('.review__content-block').owlCarousel({
    items: 2,
    loop: true,
    nav: true
  }); // $('.description__content-slider').owlCarousel({
  //     // // items: 3,
  //     // loop: true,
  //     // nav: true,
  //     // navText: ['<div class="prev-arrow"></div>, <div class="next-arrow"></div>']
  // })
  // /*
  //     change href on mobile
  //  */
  //
  // if(/iPhone|iPod|Android/i.test(navigator.userAgent)){
  //     document.querySelector('a.grande').href = '#formgrande';
  //     document.querySelector('a.lake').href = '#formlake';
  //     document.querySelector('a.lou').href = '#formlou';
  // }
};