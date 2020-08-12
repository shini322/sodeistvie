$('.hero__slider').slick({
    dots: true,
    nextArrow: '<button class="arrows-slider arrows-slider__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left"></button>'
});
    


$('.services__slider-text').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.services__slider'
  });
  $('.services__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.services__slider-text',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    fade: true,
    nextArrow: '<button class="arrows-slider arrows-slider__right services-arrows services-arrows__right"></button>',
    prevArrow: '<button class="arrows-slider arrows-slider__left services-arrows services-arrows__left"></button>'
  });

    