var swiper = new Swiper(".s-1Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});

var swiper = new Swiper(".s-2Swiper", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
     autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      }
});