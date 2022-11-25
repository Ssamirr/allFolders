$(document).ready(function () {


    $('#lightSlider').lightSlider({
        gallery: true,
        item: 1,
        thumbItem: 9,
        slideMargin: 0,
        speed: 500,
        auto: false,
        loop: true,
        autoWidth: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    autoWidth: false,
                }
            }
        ],
        onSliderLoad: function () {
            $('#image-gallery').removeClass('cS-hidden');
        }
    });

    document.querySelector('.lSNext').innerHTML = `<span><svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#333" d="M15.635 12.022l-7.58-7.26.69-.723 8.335 7.982-8.334 7.995-.692-.722z"></path></svg></span>`;
    document.querySelector('.lSPrev').innerHTML = `<span><svg width="24px" height="24px" viewBox="0 0 24 24"><path fill="#333" d="M15.635 12.022l-7.58-7.26.69-.723 8.335 7.982-8.334 7.995-.692-.722z"></path></svg></span>`;

    // document.querySelectorAll('.lslide.h-100').forEach(function(e){
    //     e.setAttribute('data-fancybox','gallery');
    // })

    document.querySelectorAll('.lightslider-img').forEach(function (e) {
        e.addEventListener('click', function () {
            let image_name = e.getAttribute('image-name');
            let product_images = document.querySelector('.product-images');
            product_images.querySelectorAll('img').forEach(function (element) {
                let element_attr = element.getAttribute('image-name');
                if (image_name == element_attr) {
                    element.click();
                }
            })
        })
    })

    document.querySelectorAll('.product-owner-showw-number').forEach(function(e){
        e.addEventListener('click',function(){
            e.classList.remove('product-owner-showw-number-show');
            e.closest('.product-owner-number').querySelector('.product-owner-hidden-number').classList.add('product-owner-hidden-number-show');
        })
    })


})