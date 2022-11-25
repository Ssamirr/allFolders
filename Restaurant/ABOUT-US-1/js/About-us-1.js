$(document).ready(function () {
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
                // positionY: '-80',
                // naturalWidth: '1000',
                // naturalHeight: '700',
                naturalWidth: '100',
                naturalHeight: '500',
                speed: "0.9",
                androidFix: false,
                iosFix: false,
            });
        }
        else {
            $('.parallax-window').parallax({
                positionX: "center",
                positionY: '-80',
                naturalWidth: '800',
                naturalHeight: '500',
                // naturalWidth:'1000',
                speed: "0.9",
                androidFix: false,
                iosFix: false,
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
                speed: "0.3",
                androidFix: false,
                iosFix: false,
            });
        }
        else {
            $('.parallax-window').parallax({
                positionX: "center",
                positionY: '-80',
                naturalWidth: '800',
                naturalHeight: '500',
                // naturalWidth:'1000',
                speed: "0.9",
                androidFix: false,
                iosFix: false,
            });
        }
    })

    $('.parallax-window-book').parallax({
        // positionX: "center",
        // positionY: '-80',
        // naturalWidth: '1500',
        // naturalHeight: '1500',
        speed: "0.9"
    });
    document.querySelector('.hamburger').addEventListener('click', function () {
        console.log('aa')
        document.querySelector('.inhamburger').classList.toggle('show');
    })
    document.querySelector('.hamburger-x').addEventListener('click', function () {
        document.querySelector('.inhamburger').classList.toggle('show');
    })
})