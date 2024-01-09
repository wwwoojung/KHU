$(function () {
    const VISUAL_SLIDE = new Swiper('.MainVisual .visual_slide', {
        loop: true,
        effect: "fade",
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
})