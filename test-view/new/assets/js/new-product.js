
$(document).ready(function () {
    document.querySelectorAll('.first-list-link-new-product').forEach(function (e) {
        e.addEventListener('click', function () {
            console.log('2')
            e.closest('.ul-menu-list-first-new-product').querySelector('.mobile-menu-second-list-new-product').classList.add('mobile-menu-second-new-product-list-show');
            document.querySelector('html').classList.add('html-overflow-hidden');
        })
    })


    document.querySelectorAll('.mobile-left-icon-new-product').forEach(function (e) {
        e.addEventListener('click', function () {
            this.closest('.mobile-menu-second-list-new-product').classList.remove('mobile-menu-second-new-product-list-show');
            document.querySelector('html').classList.remove('html-overflow-hidden');
        })
    })


    // ...................................additional-images.............................
    function newProductImg() {
        var product_imagee = document.createElement('div');
        product_imagee.classList.add('productt-image');
        var product_imagee_div = document.createElement('div');
        product_imagee_div.classList.add('w-100', 'h-100');
        product_imagee.appendChild(product_imagee_div);
        var product_imagee_img = document.createElement('img');
        product_imagee_img.classList.add('w-100', 'h-100');
        product_imagee_div.appendChild(product_imagee_img);
        var product_image_change_deleted = document.createElement('div');
        product_image_change_deleted.classList.add('product-image-change-delete', 'd-none');
        product_imagee_div.appendChild(product_image_change_deleted);
        var product_image_change_deleted_div = document.createElement('div');
        product_image_change_deleted_div.classList.add('d-flex', 'w-100', 'justify-content-between');
        product_image_change_deleted.appendChild(product_image_change_deleted_div);
        var product_image_changeed = document.createElement('div');
        product_image_changeed.setAttribute('title', 'Yenilə');
        product_image_changeed.classList.add('product-image-changee');
        product_image_changeed.setAttribute('onclick', 'productBackground(this)');
        product_image_change_deleted_div.appendChild(product_image_changeed);
        var product_image_changeed_icon = document.createElement('i');
        product_image_changeed_icon.classList.add('fa', 'fa-refresh');
        product_image_changeed_icon.setAttribute('aria-hidden', 'true');
        product_image_changeed.appendChild(product_image_changeed_icon);
        var product_image_deleteed = document.createElement('div');
        product_image_deleteed.setAttribute('title', 'Sil');
        product_image_deleteed.classList.add('product-image-deletee');
        product_image_deleteed.setAttribute('onclick', 'productImgDelete(this)');
        product_image_change_deleted_div.appendChild(product_image_deleteed);
        var product_image_deleteed_icon = document.createElement('i');
        product_image_deleteed_icon.classList.add('fa', 'fa-close');
        product_image_deleteed_icon.setAttribute('aria-hidden', 'true');
        product_image_deleteed.appendChild(product_image_deleteed_icon);
        var product_img_backgroundd = document.createElement('div');
        product_img_backgroundd.classList.add('product-img-background');
        product_img_backgroundd.setAttribute('onclick', 'productBackground(this)');
        product_imagee_div.appendChild(product_img_backgroundd);
        var product_img_backgroundd_icon = document.createElement('i');
        product_img_backgroundd_icon.classList.add('fas', 'fa-camera');
        product_img_backgroundd_icon.setAttribute('aria-hidden', 'true');
        product_img_backgroundd.appendChild(product_img_backgroundd_icon);
        var product_img_backgroundd_div = document.createElement('div');
        product_img_backgroundd_div.classList.add('add-imgg');
        product_img_backgroundd_div.innerHTML = 'Əlavə et';
        product_img_backgroundd.appendChild(product_img_backgroundd_div);
        var product_imagee_input = document.createElement('input');
        product_imagee_input.setAttribute('type', 'file');
        product_imagee_input.setAttribute('onchange', 'productImgChange(this)')
        product_imagee_div.appendChild(product_imagee_input);
        document.querySelector('.new-product-images').appendChild(product_imagee);
    }


    // ..............................

    document.querySelector('.add-additional-product-images').querySelector('i').addEventListener('click', function () {
        let new_productt_detaill_image_height = document.querySelector('.new-productt-detaill-image').offsetHeight;
        let new_productt_images_height = document.querySelector('.new-product-images').offsetHeight;
        document.querySelector('.new-productt-detaill-image').setAttribute('style', 'height:' + (new_productt_detaill_image_height + 120) + 'px !important');
        document.querySelector('.new-product-images').setAttribute('style', 'height:' + (new_productt_images_height + 120) + 'px !important');
        for (let i = 0; i < 4; i++) {
            newProductImg()
        }
    })

    document.querySelector('.add-additional-product-images-mobile').querySelector('i').addEventListener('click', function () {
        let new_productt_detaill_image_height = document.querySelector('.new-productt-detaill-image').offsetHeight;
        let new_productt_images_height = document.querySelector('.new-product-images').offsetHeight;
        document.querySelector('.new-productt-detaill-image').setAttribute('style', 'height:' + (new_productt_detaill_image_height + 90) + 'px !important');
        document.querySelector('.new-product-images').setAttribute('style', 'height:' + (new_productt_images_height + 90) + 'px !important');
        for (let i = 0; i < 4; i++) {
            newProductImg()
        }
    })

    document.querySelectorAll('.product-img-background').forEach(function (element) {
        element.addEventListener('click', function () {
            productBackground(element);
        })


        element.closest('.productt-image').querySelector('input').addEventListener('change', function () {
            productImgChange(this);
        })
    })



    document.querySelectorAll('.product-image-changee').forEach(function (element) {
        element.addEventListener('click', function () {
            productBackground(element);
        })
    })

    document.querySelectorAll('.product-image-deletee').forEach(function (element) {
        element.addEventListener('click', function () {
            productImgDelete(element);
        })
    })



})



function productBackground(element) {
    let parent_element = element.closest('.productt-image');
    let parent_element_input = parent_element.querySelector('input');
    parent_element_input.click();
}

function productImgChange(inputt) {
    let element = inputt.closest('.productt-image').querySelector('.product-img-background');
    console.log(inputt);
    console.log(element)
    let choosed_file = inputt.files[0];
    if (choosed_file) {
        let reader = new FileReader();
        reader.addEventListener('load', function () {
            element.closest('.productt-image').querySelector('img').setAttribute('src', reader.result);
        })
        reader.readAsDataURL(choosed_file)
        element.classList.add('d-none');
        element.closest('.productt-image').querySelector('img').classList.add('d-block');
        element.closest('.productt-image').querySelector('.product-image-change-delete').classList.remove('d-none');
    }
}

function productImgDelete(element) {
    element.closest('.productt-image').querySelector('img').setAttribute('src', '');
    element.closest('.productt-image').querySelector('img').classList.remove('d-block');
    element.closest('.productt-image').querySelector('.product-image-change-delete').classList.add('d-none');
    element.closest('.productt-image').querySelector('.product-img-background').classList.remove('d-none');
}

