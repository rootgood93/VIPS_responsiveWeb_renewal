$(function () {

    let $winWidth
    $(window).resize(function () {
        $winWidth = $(window).width()
        console.log($winWidth)
    })


    // 텍스트 컬러 변경 기능
    $(window).scroll(function () {

        // side_nav 도트 변경 기능
        let ht = $(window).height();
        let scTop = $(window).scrollTop();

        console.log(ht)
        console.log(scTop)

        let secLength = $('section').length
        // for (let i = 0; i < 7; i++) {
        for (let i = 0; i < secLength; i++) {
            if (scTop >= ht * i && scTop < ht * (i + 1)) {
                $('.side_nav a').removeClass('on')
                $('.side_nav a').eq(i).addClass('on')
            }
        }
    })

    $('a').click(function () {
        let id = $(this).attr('href')
        console.log(id)
        let target = $(id).offset().top
        $('html, body').animate({
            scrollTop: target
        }, 1000)
    })


    // pc버전 스크롤시 한 섹션씩 이동
    if (matchMedia("screen and (min-width: 769px)").matches) {
        // console.log("pc");

        // 마우스 스크롤 했을때 한 섹션씩 움직이는 것
        let elm = $('section');

        // for each랑 같음 each
        $(elm).each(function (index) {

            // 개별적으로 Wheel 이벤트 적용
            // $(this).on("mousewheel DomMousewheel", function (e) {
            $(this).on("mousewheel", function (e) {
                e.preventDefault();
                let E = e.originalEvent
                console.log(E)
                let delta = 0;
                if (event.wheelDelta) {
                    delta = event.wheelDelta;
                }
                let moveTop = $(window).scrollTop();
                let elmSelecter = $(elm).eq(index);
                // 마우스휠을 위에서 아래로
                if (delta < 0) {
                    if ($(elmSelecter).next('section') != undefined) {
                        // try catch 예외어처리 오류가있으면 하단 처리하고 없으면 catch부분 실행
                        try {
                            moveTop = $(elmSelecter).next('section').offset().top;
                        } catch (e) {}
                    }
                    // 마우스휠을 아래에서 위로
                } else {
                    if ($(elmSelecter).prev('section') != undefined) {
                        try {
                            moveTop = $(elmSelecter).prev('section').offset().top;
                        } catch (e) {}
                    }
                }
                // 화면 이동 0.8초(800)
                $("html,body").stop().animate({
                    scrollTop: moveTop + 'px'
                }, 800);
            });

        });

    }


    // 모바일 버전의 사이트 맵 열기 및 닫기
    $('.open').click(function () {
        $('header').addClass('on')
        $(this).hide()
        $('.close').show()
        $('.gnb_box nav').show()
    })

    $('.close').click(function () {
        $('header').removeClass('on')
        $(this).hide()
        $('.open').show()
        $('.gnb_box nav').hide()
    })


    // 모바일 버전의 서브메뉴 열기 및 닫기
    $('.gnb>li>a').click(function (e) {
        e.preventDefault()
    })
    $('.gnb>li').click(function () {
        $('.gnb li').removeClass('on')
        $(this).addClass('on')

    })



    // $('.gnb>li').click(function () {
    //     if ($(this).attr('class') != 'on') {
    //         $('.gnb>li').removeClass('on')
    //         $(this).addClass('on')
    //         $('.sub').slideUp()
    //         $(this).find('.sub').slideToggle()

    //     } else {
    //         $(this).find('.sub').slideToggle()
    //         $('.gnb>li').removeClass('on')
    //     }
    // })





})