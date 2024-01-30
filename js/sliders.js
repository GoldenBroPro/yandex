var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    formatFractionCurrent: function (number) {
      return (number);
    },
    formatFractionTotal: function (number) {
      return (number);
    },
    renderFraction: function (currentClass, total) {
      return '<span class="' + currentClass + '"></span>' + '/' +
        '<span class="' + total + '"></span>';
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20,
      lazy: true,
    },
    730: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
      lazy: true,
    },
    1054: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 21,
      lazy: true,
    },
  },
});


var evolutionSwiper = new Swiper(".evolutionSwiper", {
 
  breakpoints: {
    150: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 31,
      pagination: {
        el: ".evolution-swiper-pagination",
      }, navigation: {
        nextEl: ".evolution-swiper-button-next",
        prevEl: ".evolution-swiper-button-prev",
      },
      lazy: true,
    },
    550: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 31,
      pagination: {
        el: ".evolution-swiper-pagination",
      }, navigation: {
        nextEl: ".evolution-swiper-button-next",
        prevEl: ".evolution-swiper-button-prev",
      },
      lazy: true,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      pagination: {
        el: ".evolution-swiper-pagination",
      }, navigation: {
        nextEl: ".evolution-swiper-button-next",
        prevEl: ".evolution-swiper-button-prev",
      },
      lazy: true,
    },
  },
});

$(function () {
  $('.marquee').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});