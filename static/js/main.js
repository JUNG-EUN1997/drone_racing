'use strict'


new Swiper('.js-news_swiper', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
})

let schedule_swiper_view = 3
if (window.screen.width <= 768) {
    schedule_swiper_view = 2
}

const swiper = new Swiper('.js-schedule_swiper', {
    slidesPerView: schedule_swiper_view,
    spaceBetween: 30,
    autoplay: true, // 자동 재생 여부
    loop: true
})


$('.swiper-slide').hover(function () {
    swiper.autoplay.stop();
}, function () {
    swiper.autoplay.start();
});

function openNav() {
    document.querySelector(".js-menu_content").classList.add("open");
}

function closeNav() {
    document.querySelector(".js-menu_content").classList.remove("open");
}

const dDay = "10/6/2023"
    var end = new Date(dDay);

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {
            clearInterval(timer);
            document.querySelector(".js-dday").classList.add("none")
            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        hours = hours<10 ? "0" + String(hours) : String(hours)
        minutes = minutes<10 ? "0" + String(minutes) : String(minutes)
        seconds = seconds<10 ? "0" + String(seconds) : String(seconds)


        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
    }

    function CountDownTimer(dt){
        end = new Date(dt);
        
        _second = 1000;
        _minute = _second * 60;
        _hour = _minute * 60;
        _day = _hour * 24;
        showRemaining()
        timer = setInterval(showRemaining, 1000);
    }
    CountDownTimer(dDay)