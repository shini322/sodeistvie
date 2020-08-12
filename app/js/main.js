// $('.hero__slider').slick({
//     dots: true,
//     nextArrow: '<button class="arrows-slider arrows-slider__right"></button>',
//     prevArrow: '<button class="arrows-slider arrows-slider__left"></button>'
// });
    


// $('.services__slider-text').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     asNavFor: '.services__slider-block'
//   });
//   $('.services__slider-block').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.services__slider-text',
//     dots: false,
//     centerMode: true,
//     focusOnSelect: true,
//     fade: true,
//     nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
//     prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>'
//   });

var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});


    