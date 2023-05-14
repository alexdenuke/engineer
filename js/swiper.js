const slider = document.querySelector('.swiper-category');
const slider2 = document.querySelector('.swiper-galery');

new Swiper(slider, {
    direction: 'horizontal',
    // loop: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction',
    //   clickable: true,
    // },
    // slidesPerGroup: 1,
    slidesPerView: 5,
    grabCursor: true,
  });

  new Swiper(slider2, {
    direction: 'horizontal',
    // loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // pagination: {
    //   el: '.swiper-pagination',
    //   type: 'fraction',
    //   clickable: true,
    // },
    // slidesPerGroup: 1,
    // spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      500: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      }
    }
  });
