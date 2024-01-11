$(function () {
    const VISUAL_SLIDE = new Swiper('.MainVisual .visual_slide', {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })

    $(window).on('scroll', function () {
        const SCT = $(window).scrollTop();

        if (SCT > 0) {
            $('#Header .header_wrap').addClass('on');
        } else {
            $('#Header .header_wrap').removeClass('on');
        }
    })

    $('.MainVisual .slide_dots .pause').on('click', function () {
        $(this).toggleClass('on');
        if ($(this).hasClass('on')) {
            VISUAL_SLIDE.autoplay.stop();
        } else {
            VISUAL_SLIDE.autoplay.start();
        }
    })

    $('.MainNotice .tab_menu>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();

        $('.MainNotice .tab_menu>li').removeClass('on');
        $('.MainNotice .tab_menu>li').eq(IDX).addClass('on');

        $('.MainNotice .tab_con .content').removeClass('on');
        $('.MainNotice .tab_con .content').eq(IDX).addClass('on');
    })

    $('.m_open .hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('#Header .gnb').toggleClass('on');
    })
})