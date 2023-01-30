$("document").ready(function(){ 

    const slide = new Swiper(".main.swiper-slide", {
        autoplay:{
        delay: 1000
    },
    loop:true,
    // 무한으로 도는 효과
    slidesPerView:1,
    spaceBetween:6,
    centeredSlides:true,


    pagination:{
        el: ".swiper-pagination",
        type: "progressbar"
    },


    breakpoints:{
        480: {slidesPerView: 1},
        768: {slidesPerView: 1},
        1024: {slidesPerView: 1},
        1400: {slidesPerView: 1}
    },
    })





















})//jq