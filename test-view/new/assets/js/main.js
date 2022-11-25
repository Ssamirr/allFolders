$(document).ready(function () {

    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    // .................for-product-detail-page..........................
    var product_right_side = document.getElementById("productt-right-sidee");
    if (product_right_side) {
        var sticky2 = product_right_side.offsetTop;
        console.log(window.pageYOffset);
        console.log(sticky2)
    }

    var prevScrollpos = window.pageYOffset;

    function myFunction() {

        if (window.pageYOffset > sticky && !document.querySelector('.header-category-menu').classList.contains('header-category-menu-show')) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
        var currentScrollPos = window.pageYOffset;
        if (document.querySelector('.mobile-create-product')) {
            if (prevScrollpos < currentScrollPos) {
                document.querySelector('.mobile-create-product').classList.add('mobile-create-product-none');
            }
            else {
                document.querySelector('.mobile-create-product').classList.remove('mobile-create-product-none');
            }
        }


        prevScrollpos = currentScrollPos;

    }


    $('#owl-carousel-first').owlCarousel({
        loop: true,
        margin: 16,
        nav: true,
        items: 2,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            650: {
                items: 2,
            },
            768: {
                items: 1,
                nav: true,
            },
            1201: {
                items: 2,
            },
        }
    });

    $('#owl-carousel-select-category').owlCarousel({
        loop: false,
        margin: 16,
        nav: true,
        items: 8,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            400: {
                items: 3,
            },
            530: {
                items: 4,
            },
            660: {
                items: 5,
            },
            768: {
                items: 6,
            },
            1025: {
                items: 7,
            },
            1201: {
                items: 8,
                nav: true,
            },
        }
    });

    $('#owl-carousel-free-give').owlCarousel({
        loop: false,
        margin: 16,
        nav: true,
        items: 4,
        autoplay: false,
        autoplayTimeout: 10000,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1201: {
                items: 4,
            },
        }
    });




    document.querySelectorAll('.owl-prev').forEach(function (e) {
        e.querySelector('span').innerHTML = `<svg style="transform: rotate(180deg);" width="24" height="24" viewBox="0 0 24 24"><path fill="#333" d="M15.635 12.022l-7.58-7.26.69-.723 8.335 7.982-8.334 7.995-.692-.722z"></path></svg>`

    })
    document.querySelectorAll('.owl-next').forEach(function (e) {
        e.querySelector('span').innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24"><path fill="#333" d="M15.635 12.022l-7.58-7.26.69-.723 8.335 7.982-8.334 7.995-.692-.722z"></path></svg>`
    })

    document.querySelectorAll('.second-ul-category').forEach(function (e) {
        $(e).css({
            'width': ($(".first-ul-category").width() + 'px'),
            'right': ('-' + ($(".first-ul-category").width() + 1) + 'px')
        });
    })

    document.querySelectorAll('.third-ul-category').forEach(function (e) {
        $(e).css({
            'width': ($(".first-ul-category").width() + 'px'),
            'left': ($(".first-ul-category").width() + 'px')
        });
    })

    document.querySelectorAll('.fourth-ul-category').forEach(function (e) {
        $(e).css({
            'width': ($(".first-ul-category").width() + 'px'),
            'right': ('-' + $(".first-ul-category").width() * 3 + 'px')
        });
    })

    if ($(window).width() < 1265) {

    }

    document.querySelector('.category-show').addEventListener('click', function () {
        if (document.querySelector('.header-category-menu').classList.contains('header-category-menu-show')) {
            document.querySelector('.header-category-menu').classList.remove('header-category-menu-show');
            document.querySelector('.desktop-header').querySelector('.x-1').classList.remove('xx-1');
            document.querySelector('.desktop-header').querySelector('.x-2').classList.remove('xx-2');
            document.querySelector('.desktop-header').querySelector('.x-3').classList.remove('xx-3');
            document.querySelector('.desktop-header').querySelector('.x-4').classList.remove('xx-4');
        }
        else {
            document.querySelector('.header-category-menu').classList.add('header-category-menu-show');
            document.querySelector('.desktop-header').querySelector('.x-1').classList.add('xx-1');
            document.querySelector('.desktop-header').querySelector('.x-2').classList.add('xx-2');
            document.querySelector('.desktop-header').querySelector('.x-3').classList.add('xx-3');
            document.querySelector('.desktop-header').querySelector('.x-4').classList.add('xx-4');

            document.querySelectorAll('.second-ul-category').forEach(function (e) {
                e.classList.add('d-none');
                e.classList.remove('d-block');
            })

            document.querySelector('.second-ul-category').classList.add('d-block')
            document.querySelector('.second-ul-category').classList.remove('d-none')

            document.querySelector('.list-first-category').classList.add('part-category-active');
            document.querySelector('.list-second-category').classList.add('part-category-li-active')

        }

    })

    function category_detail(x) {
        document.querySelectorAll('.list-first-category').forEach(function (elem) {
            elem.classList.remove('part-category-active');
        })
        x.closest('.list-first-category').classList.add('part-category-active');
        document.querySelectorAll('.second-ul-category').forEach(function (e) {
            e.classList.add('d-none');
            e.classList.remove('d-block');
        })

        x.closest('.list-first-category').querySelector('.second-ul-category').classList.add('d-block');
        x.closest('.list-first-category').querySelector('.second-ul-category').classList.remove('d-none');
        document.querySelectorAll('.list-second-category').forEach(function (e) {
            e.classList.remove('part-category-li-active');
        })
        x.closest('.list-first-category').querySelector('.second-ul-category').querySelector('.list-second-category').classList.add('part-category-li-active');

        document.querySelectorAll('.third-ul-category').forEach(function (e) {
            e.classList.remove('d-block');
            e.classList.add('d-none');
        })
        x.closest('.list-first-category').querySelector('.second-ul-category').querySelector('.third-ul-category').classList.add('d-block');
        x.closest('.list-first-category').querySelector('.second-ul-category').querySelector('.third-ul-category').classList.remove('d-none');

        document.querySelectorAll('.fourth-ul-category').forEach(function (e) {
            e.classList.add('d-none');
            e.classList.remove('d-block');
        })
        x.closest('.list-first-category').querySelector('.fourth-ul-category').classList.add('d-block');
        x.closest('.list-first-category').querySelector('.fourth-ul-category').classList.remove('d-none');
    }



    document.querySelectorAll('.list-first-category-a').forEach(function (e) {
        e.onmouseover = function () { category_detail(this) }
    })

    function category_detail_second_list(x) {

        document.querySelectorAll('.list-first-category').forEach(function (e) {

            e.classList.remove('part-category-active');
        })
        x.closest('.list-first-category').classList.add('part-category-active');

        document.querySelectorAll('.list-second-category').forEach(function (e) {
            e.classList.remove('part-category-li-active');
        })
        x.closest('.list-second-category').classList.add('part-category-li-active');

        document.querySelectorAll('.third-ul-category').forEach(function (e) {
            e.classList.add('d-none');
            e.classList.remove('d-block');
        })
        x.closest('.list-second-category').querySelector('.third-ul-category').classList.add('d-block');
        x.closest('.list-second-category').querySelector('.third-ul-category').classList.remove('d-none');

    }

    document.querySelectorAll('.list-second-category-a').forEach(function (e) {
        e.onmouseover = function () { category_detail_second_list(this) }
    })

    document.querySelector('.mobile-menu-icon').addEventListener('click', function () {
        document.querySelector('.mobile-menu-list').classList.add('mobile-menu-list-show');
        document.querySelector('html').classList.add('html-overflow-hidden');
    })

    document.querySelector('.mobile-exit-icon').addEventListener('click', function () {
        document.querySelector('.mobile-menu-list').classList.remove('mobile-menu-list-show');
        document.querySelector('html').classList.remove('html-overflow-hidden');
    })

    document.querySelectorAll('.first-list-link').forEach(function (e) {
        e.addEventListener('click', function () {
            console.log('2')
            e.closest('.ul-menu-list-first').querySelector('.mobile-menu-second-list').classList.add('mobile-menu-second-list-show');
            document.querySelector('html').classList.add('html-overflow-hidden');
        })
    })




    document.querySelectorAll('.mobile-left-icon').forEach(function (e) {
        e.addEventListener('click', function () {
            console.log(this.closest('.mobile-menu-second-list'))
            this.closest('.mobile-menu-second-list').classList.remove('mobile-menu-second-list-show');
            document.querySelector('html').classList.remove('html-overflow-hidden');
        })
    })


    var linkjoin_header_user = document.querySelector('.linkjoin-header-user');
    if (linkjoin_header_user) {
        linkjoin_header_user.addEventListener('click', function () {
            event.stopPropagation();
            if (document.querySelector('.header-personal-list-menu').classList.contains('header-personal-list-menu-show')) {
                document.querySelector('.header-personal-list-menu').classList.remove('header-personal-list-menu-show');
            } else {
                document.querySelector('.header-personal-list-menu').classList.add('header-personal-list-menu-show');
            }

        })
    }

    var header_personal_list_menu = document.querySelector('.header-personal-list-menu');
    if (header_personal_list_menu) {
        header_personal_list_menu.addEventListener('click', function () {
            event.stopPropagation();
        })
    }

    document.querySelector('body').addEventListener('click', function () {
        if (linkjoin_header_user) {
            if (document.querySelector('.header-personal-list-menu').classList.contains('header-personal-list-menu-show')) {
                document.querySelector('.header-personal-list-menu').classList.remove('header-personal-list-menu-show');
            }
        }
    })

    var mobile_user_img = document.querySelector('.mobile-user-progile-img');
    if (mobile_user_img) {
        mobile_user_img.querySelector('a').addEventListener('click', function () {
            document.querySelector('.mobile-personal-menu-list').classList.add('mobile-personal-menu-list-show');
            document.querySelector('html').classList.add('html-overflow-hidden');
        })
    }

    var mobile_exit_icon_personal = document.querySelector('.mobile-exit-icon-personal');
    if (mobile_exit_icon_personal) {
        mobile_exit_icon_personal.addEventListener('click', function () {
            document.querySelector('.mobile-personal-menu-list').classList.remove('mobile-personal-menu-list-show');
            document.querySelector('html').classList.remove('html-overflow-hidden');
        })
    }






})

