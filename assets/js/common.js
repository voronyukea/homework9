$('.slider').slick({
dots: true,
infinite: true,
speed: 300,
fade: true,
cssEase: 'linear',
  nextArrow: '<button type="button" class="slider-scroll slider-scroll__left"><i class="fas fa-chevron-left"></i></button>',
  prevArrow: '<button type="button" class="slider-scroll slider-scroll__right"><i class="fas fa-chevron-right"></i></button>'
});

$('.recent__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  fade: true,
  arrows: false,
  cssEase: 'linear'
});
