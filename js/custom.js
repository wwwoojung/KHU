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
            $('#Header').addClass('on');
        } else {
            $('#Header .header_wrap').removeClass('on');
            $('#Header').removeClass('on');
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


    $('#Header .header_wrap .gnb>ul>li>a').on('click', function (e) {
        e.preventDefault();
        const IDX = $(this).parent().index();

        if ($('#Header .header_wrap .gnb').hasClass('on')) {
            $('#Header .header_wrap .gnb .depth2').eq(IDX).slideToggle();
        } else {
            return
        }
    })

    $('#Header .header_wrap .gnb .depth2>li>a').on('click', function (e) {
        e.preventDefault();
        const LEN = $(this).parent().length;
        const PR_IDX = $(this).parent().parent().parent().index();
        const IDX = $(this).parent().index();
        console.log(LEN);
        console.log(PR_IDX);
        console.log(IDX);
        if ($('#Header .header_wrap .gnb').hasClass('on')) {
            $('#Header .header_wrap .gnb .depth3').eq(PR_IDX).slideToggle();
        }
    })


    $('#Header').on('wheel touchmove', function (e) {
        if ($('#Header .header_wrap .gnb').hasClass('on')) {
            e.preventDefault();
        }
    })
})