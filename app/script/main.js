let myWidth = window.innerWidth,
    myHeight = window.innerHeight;
console.log(`width ${myWidth} \n height ${myHeight}`);

document.querySelector('html').style.overflowY = 'hidden';

window.onload = function () {

    setTimeout(() => {
        document.querySelector('.loader').style.cssText = 'opacity: 0; z-index: -5';
        document.querySelector('html').style.overflowY = 'scroll';
    }, 1500);

    /*
        slow scroll
     */

    $('.catalog__block-title a').on('click', function () {
        let href = $(this).attr('href');
        $('root, html').animate({scrollTop: $(href).offset().top}, 800);
    });

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
            1200 : {
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
        autoHeight:true
    });

    /*
        change size & color & photo
     */

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
                            let activeClass = color[j].className;
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
                                bigImg.className = `boot ${activeClass}`
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

    const bodyFilter = document.querySelector('.body__filter'),
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
        changeForm = () => {
            inputValue.value = '';
            textareaValue.value = '';
            for(let i = 0; i < form.children.length; i++) {
                form.children[i].style.opacity = '1';
            }
            formTitle.style.opacity = '0';
        },
        open = (block) => {
            bodyFilter.style.cssText = 'background: rgba(0, 0, 0, .8); z-index: 9999';
            block.style.cssText = 'transform: translate(-50%, -50%) rotateX(0deg); z-index: 99999';
            document.querySelector('html').style.overflowY = 'hidden';
        },
        close = (block) => {
            bodyFilter.style.cssText = 'background: rgba(0, 0, 0, 0); z-index: -5';
            block.style.cssText = 'transform: translate(-50%, -50%) rotateX(-90deg); z-index: -5';
            document.querySelector('html').style.overflowY = 'scroll';
            setTimeout(changeForm, 500);
        };

    inputValue.addEventListener('change', () => {
        inputValue.value;
    });

    textareaValue.addEventListener('change', () => {
        textareaValue.value;
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
       if(inputValue.value !== '' && textareaValue.value !== '') {
           for(let i = 0; i < form.children.length; i++) {
               form.children[i].style.opacity = '0';
           }
           formTitle.style.opacity = '1';
       }
    });

    politicalOpen.addEventListener('click', () => {
        open(political);
    });
    feedbackOpen.addEventListener('click', () => {
        open(feedback);
    });
    bodyFilter.addEventListener('click', () => {
        close(political)
    });
    bodyFilter.addEventListener('click', () => {
        close(feedback);
    });
    politicalClose.addEventListener('click', () => {
        close(political);
    });
    feedbackClose.addEventListener('click', () => {
        close(feedback);
    });

    const toggleBucket = () => {
        let bucket = document.querySelector('a.bucket'),
            topOfWindow = window.pageYOffset + innerHeight,
            catalogBlockTopPosition = document.querySelector('.catalog').offsetTop,
            reviewBlockTopPosition = document.querySelector('.review').offsetTop,
            footerLinkTopPosition = document.querySelector('.footer').offsetTop

        if(topOfWindow > catalogBlockTopPosition && topOfWindow < reviewBlockTopPosition || topOfWindow > footerLinkTopPosition) {
            bucket.style.opacity = '0';
            bucket.style.zIndex = '-5';
        } else {
            bucket.style.opacity = '1';
            bucket.style.zIndex = '999';
        }
    };

    if(/iPhone|iPod|iPad|Android/i.test(navigator.userAgent)) {
        let href = $('#mobile-order').offset().top - innerHeight;
        $('.to-order a, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
        });
        window.addEventListener('scroll', () => {
            toggleBucket();
        });
        window.addEventListener('resize', () => {
            toggleBucket();
        });
    } else {
        let href = $('#catalog').offset().top;
        $('.to-order a, a.bucket').on('click', function () {
            $('html, body').animate({scrollTop: href}, 800);
        });
    }

};
