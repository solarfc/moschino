let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

window.onload = function () {

    /*
        increase date
     */

    let today = new Date(),
        tomorrow = new Date(),
        day,
        month,
        year,
        i = 3,
        period = document.querySelectorAll('p.period output');

    tomorrow.setDate(today.getDate() + i);
    day = tomorrow.getDate() > 9 ? tomorrow.getDate() : `0${tomorrow.getDate()}`;
    month = tomorrow.getMonth() + 1 > 9 ? tomorrow.getMonth() + 1 : `0${tomorrow.getMonth() + 1}`;
    year = tomorrow.getFullYear();

    for (let i = 0; i < period.length; i++) {
        period[i].innerHTML = `${day}.${month}.${year.toString().slice(2)}`;
    }

    for(let i = 0; i < document.querySelectorAll('p.year output').length; i++) {
        document.querySelectorAll('p.year output')[i].innerHTML = year;
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
            1200 : {
                items: 3
            }
        }
    });

    const bootsColors = document.querySelectorAll('.catalog__block.boots .color figure span'),
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
        changeSize = (model, size) => {
            for(let i = 0; i < model.length; i++) {
                for(let j = 0; j < model.length; j++) {
                    model[j].addEventListener('click', () => {
                        let activeSize = model[j].dataset.size;
                        size.style.opacity = '0';
                        setTimeout(() => {
                            size.innerHTML = `<span>${activeSize.slice(0, 2)}</span>${activeSize.slice(2)}`;
                        }, 500);
                        setTimeout(() => {
                            size.style.opacity = '1'
                        }, 550);
                        model[i].classList.remove('active');
                        model[j].classList.add('active');
                    });
                }
            }
        },
        changeColor = (color, activeColor, bigImg, block, link, smallImg) => {
            for(let i = 0; i < color.length; i++) {
                for(let j = 0; j < color.length; j++) {
                    color[j].addEventListener('click', () => {
                        if(color[j].classList.contains('active')) {
                            color[i].classList.remove('active');
                            color[j].classList.add('active');
                        } else {
                            let active = color[j].dataset.color;
                            let activeModel = color[j].dataset.model;
                            color[i].classList.remove('active');
                            color[j].classList.add('active');
                            activeColor.style.opacity = '0';
                            bigImg.style.opacity = '0';
                            block.style.opacity = '0'
                            setTimeout(() => {
                                activeColor.innerHTML = active;
                                bigImg.src = `img/catalog/${activeModel}/big.png`;
                                for(let i = 0; i < link.length; i++) {
                                    link[i].href = `img/catalog/${activeModel}/${i + 1}.jpg`;
                                    smallImg[i].src = `img/catalog/${activeModel}/${i + 1}.jpg`;
                                }
                            }, 500);
                            setTimeout(() => {
                                activeColor.style.opacity = '1';
                                bigImg.style.opacity = '1';
                                block.style.opacity = '1';
                            }, 550);
                        }
                    })
                }
            }
        }

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

    let bodyFilter = document.querySelector('.body__filter'),
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
    bodyFilter.addEventListener('click', closePolitical);

    // $('.description__content-slider').owlCarousel({
    //     // // items: 3,
    //     // loop: true,
    //     // nav: true,
    //     // navText: ['<div class="prev-arrow"></div>, <div class="next-arrow"></div>']
    // })
    // /*
    //     change href on mobile
    //  */
    //
    if(/iPhone|Android/i.test(navigator.userAgent)){
        document.querySelector('.gallery__content-block').classList.add('owl-carousel');
        $('.gallery__content-block').owlCarousel({
            items: 1,
            loop: true,
            autoHeight:true
        })
    }
};
