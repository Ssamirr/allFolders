$(document).ready(function () {



    $('.parallax-header-1 ').parallax({
        // positionX: "center",
        // positionY: '-80',
        naturalWidth: '1300',
        naturalHeight: '800',
        speed: "0.7"
    });

    $('.parallax-header-2 ').parallax({
        // positionX: "center",
        // positionY: '-80',
        // naturalWidth: '1500',
        // naturalHeight: '1500',
        speed: "0.7"
    });


    var configObject = {
        sourceUrl: 'https://www.youtube.com/embed/j77wT96jHCI',
        triggerElement: "#demo2",
        progressCallback: function () {
            console.log("Callback Invoked.");
        }
    };
    var videoBuild = new YoutubeOverlayModule(configObject);
    videoBuild.activateDeployment();

    $(window).load(function () {
        if ($(window).width() < 1200) {
            console.log('sasa')
            $('.parallax-window').parallax({
                positionX: "center",
                positionY: '-80',
                naturalWidth: '1500',
                naturalHeight: '1500',
                speed: "0.9"
            });
        }
        else {
            $('.parallax-window').parallax({
                positionX: "center",
                positionY: '-80',
                naturalWidth: '800',
                naturalHeight: '500',
                // naturalWidth:'1000',
                speed: "0.9"
            });
        }
    })
    $(window).resize(function () {
        if ($(window).width() < 1200) {
            console.log('sa')
            $('.parallax-window').parallax({
                positionX: "center",
                positionY: '-80',
                naturalWidth: '500',
                naturalHeight: '400',
                speed: "0.9"
            });
        }
        else {
            $('.parallax-window').parallax({
                positionX: "center",
                positionY: '-80',
                naturalWidth: '800',
                naturalHeight: '500',
                // naturalWidth:'1000',
                speed: "0.9"
            });
        }
    })

    $('.parallax-window-book').parallax({
        positionX: "center",
        positionY: '-110',
        // naturalWidth: '1500',
        // naturalHeight: '1500',
        speed: "0.9"
    });

    $('.parallax-window-service').parallax({
        positionX: "center",
        positionY: '-100',
        naturalWidth: '350',
        naturalHeight: '80',
        speed: "0.9"
    });
    document.querySelector('.hamburger').addEventListener('click', function () {
        console.log('aa')
        document.querySelector('.inhamburger').classList.toggle('show');
    })
    document.querySelector('.hamburger-x').addEventListener('click', function () {
        document.querySelector('.inhamburger').classList.toggle('show');
    })
    $('.hero').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: !0,
        // cssEase: 'linear',
        // slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 8000,
        draggable: false,
        arrows: true,
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1,
        //             infinite: true
        //         }
        //     },
        //     {
        //         breakpoint: 768,
        //         settings: {
        //             draggable: true,
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 1,
        //             draggable: true,
        //             slidesToScroll: 1
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             draggable: true,
        //             slidesToScroll: 1
        //         }
        //     }

        // ]
    });

    $('.slick-arrow').text('');
    let arrow = `<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 36 36" style="fill: rgb(255, 255, 255); transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 1px; font-weight: 400; font-size: 14px; stroke-dashoffset: 0px; stroke-dasharray: 0px; stroke-width: 0px; stroke: rgba(255, 255, 255, 0);"><path d="M18 6l-2.12 2.12 8.38 8.38H6v3h18.26l-8.38 8.38L18 30l12-12z" style="fill: rgb(255, 255, 255); transition: none 0s ease 0s; text-align: inherit; line-height: 27px; border-width: 0px; margin: 0px; padding: 0px; letter-spacing: 1px; font-weight: 400; font-size: 14px; stroke-dashoffset: 0px; stroke-dasharray: 0px; stroke-width: 0px; stroke: rgba(255, 255, 255, 0);"></path></svg>`;
    $('.slick-arrow').append(arrow);

    // let img1 = $('.parallax-mirror').eq(4).find('img')[0];
    // console.log(img1);

    function firstSlider() {
        $('.parallax-mirror').eq(4).css('opacity', '0');
        // $(img1).css('transform', 'scale(2)');
        // $('.parallax-mirror').eq(4).css('width', '1500');
        // $('.parallax-mirror').eq(4).css('visibilty', 'hidden');
        $('.parallax-mirror').eq(3).css('opacity', '0');
        $('.parallax-mirror').eq(4).animate({ opacity: "1", }, 3000, 'linear');
        // $('.parallax-mirror').eq(4).animate({visibilty: "visible"}, 0, 'linear');
        // $(img1).animate({ transform: "scale(1)" }, 1000, 'linear');
        // $('.parallax-mirror').eq(4).animate({width: "1311px"}, 0, 'linear');
        // $('.parallax-mirror').eq(4).css('visibilty', 'hidden');
        // $('.parallax-mirror').eq(4).transition({
        //     $( this ).fadeTo( "slow", )
        // })
    }
    firstSlider();

    function secondSlider() {
        $('.parallax-mirror').eq(4).css('opacity', '0');
        // $('.parallax-mirror').eq(3).css('visibilty', 'hidden');
        $('.parallax-mirror').eq(3).css('opacity', '0');
        $('.parallax-mirror').eq(3).animate({ opacity: "1" }, 3000, 'linear');
        // $('.parallax-mirror').eq(3).animate({visibilty: "visible"}, 0, 'linear');

    }



    $("#slick-slide-control01").click(function () {
        secondSlider();
    })
    $("#slick-slide-control00").click(function () {
        firstSlider();
    })
    $('.slick-arrow').click(function () {
        if ($('.parallax-mirror').eq(4).css('opacity') == 1) {
            secondSlider();
        }
        else {
            firstSlider();
        }
    })




})