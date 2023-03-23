'use strict'


new Swiper('.js-news_swiper', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
})

new Swiper('.js-schedule_swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true, // 자동 재생 여부
    loop: true
})

new Swiper('.js-partners_swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: true, // 자동 재생 여부
    loop: true
})