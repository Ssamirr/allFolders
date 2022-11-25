$(document).ready(function () {
    document.querySelectorAll('.select-options-multiselect').forEach(function (e) {
        e.addEventListener('click', function () {
            let input_multi_select = e.closest('.input-multi-select');
            if (input_multi_select.querySelector('.checkboxes-multi').classList.contains('d-block')) {
                input_multi_select.querySelector('.checkboxes-multi').classList.remove('d-block');
                input_multi_select.querySelector('.checkboxes-multi').classList.add('d-none');
                input_multi_select.querySelector('svg').style.transform = "rotate(0deg)";
            }
            else {
                input_multi_select.querySelector('.checkboxes-multi').classList.add('d-block');
                input_multi_select.querySelector('.checkboxes-multi').classList.remove('d-none');
                input_multi_select.querySelector('svg').style.transform = "rotate(180deg)";
            }
        })
    })

    document.querySelectorAll('.item-price-section').forEach(function (e) {
        e.addEventListener('click', function () {
            let min_max_input_part = e.closest('.min-max-input-part');
            if (min_max_input_part.querySelector('.min-max-input').classList.contains('d-flex')) {
                min_max_input_part.querySelector('.min-max-input').classList.remove('d-flex');
                min_max_input_part.querySelector('.min-max-input').classList.add('d-none');
                min_max_input_part.querySelector('svg').style.transform = "rotate(0deg)";
            }
            else {
                min_max_input_part.querySelector('.min-max-input').classList.remove('d-none');
                min_max_input_part.querySelector('.min-max-input').classList.add('d-flex');
                min_max_input_part.querySelector('svg').style.transform = "rotate(180deg)";
            }
        })
    })

    let mobile_category_filter = document.querySelector('.mobile-category-filter')
    if (mobile_category_filter) {
        mobile_category_filter.addEventListener('click', function () {
            document.querySelector('.mobile-category-filter-list').classList.add('mobile-category-filter-list-show');
        })
    }

    var category_filter_exit_icon = document.querySelector('.category-filter-exit-icon')
    if (category_filter_exit_icon) {
        category_filter_exit_icon.addEventListener('click', function () {
            document.querySelector('.mobile-category-filter-list').classList.remove('mobile-category-filter-list-show');
        })
    }


    document.querySelectorAll('.items-view-one').forEach(function (e) {
        e.addEventListener('click', function () {
            document.querySelectorAll('.items-view-one').forEach(function (element) {
                element.querySelector('path').style.fill = '#7092FE';
            })

            document.querySelectorAll('.all-products').forEach(function (element) {
                element.classList.add('all-products-list-view');
            })

            document.querySelectorAll('.products-widthh').forEach(function (element) {
                element.classList.add('products-widthh-margin');
                element.classList.add('products-widthh-close');
                // element.classList.remove('products-widthh-close');
                element.classList.add('products-widthh-show')
            })

            document.querySelectorAll('.items-view-four').forEach(function (element) {
                element.querySelector('path').style.fill = '#333';
            })
            document.querySelectorAll('.itemm-images').forEach(function (element) {
                element.classList.add('col-3', 'pl-0');
            })
            document.querySelectorAll('.view-list-style').forEach(function (element) {
                element.classList.add('d-flex');
            })
            document.querySelectorAll('.location-save-list-view').forEach(function (element) {
                element.classList.remove('d-none');
                element.classList.add('d-flex');
            })
            document.querySelectorAll('.item-locationn').forEach(function (element) {
                element.classList.add('d-none');
            })
            document.querySelectorAll('.productt-add-time').forEach(function (element) {
                element.classList.remove('d-none');
            })
            document.querySelectorAll('.additional-info-mobile').forEach(function (element) {
                element.classList.add('d-flex', 'flex-column', 'justify-content-between');
                element.style.paddingTop = "20px";
                element.style.paddingBottom = "20px";
            })
            document.querySelectorAll('.product-pricee').forEach(function (e) {
                e.style.paddingTop = '0px';
            })

            document.querySelectorAll('.item-for-save').forEach(function (element) {
                element.classList.add('d-none');
            })
        })
    })


    document.querySelectorAll('.items-view-four').forEach(function (e) {
        e.addEventListener('click', function () {
            document.querySelectorAll('.items-view-four').forEach(function (element) {
                element.querySelector('path').style.fill = '#7092FE';
            })

            document.querySelectorAll('.products-widthh').forEach(function (element) {
                element.classList.remove('products-widthh-margin');
                element.classList.remove('products-widthh-close');
                element.classList.remove('products-widthh-show');

                element.classList.add('products-widthh-close');
                element.classList.add('products-widthh-show');
            })

            document.querySelectorAll('.all-products').forEach(function (element) {
                element.classList.remove('all-products-list-view');
            })

            document.querySelectorAll('.items-view-one').forEach(function (element) {
                element.querySelector('path').style.fill = '#333';
            })

            document.querySelectorAll('.itemm-images').forEach(function (element) {
                element.classList.remove('col-3', 'pl-0');
            })

            document.querySelectorAll('.view-list-style').forEach(function (element) {
                element.classList.remove('d-flex');
            })

            document.querySelectorAll('.location-save-list-view').forEach(function (element) {
                element.classList.add('d-none');
                element.classList.remove('d-flex');
            })

            document.querySelectorAll('.item-locationn').forEach(function (element) {
                element.classList.remove('d-none');
            })
            document.querySelectorAll('.productt-add-time').forEach(function (element) {
                element.classList.add('d-none');
            })
            document.querySelectorAll('.additional-info-mobile').forEach(function (element) {
                element.classList.remove('d-flex', 'flex-column', 'justify-content-between');
                element.style.paddingTop = "0px";
                element.style.paddingBottom = "0px";
            })
            document.querySelectorAll('.product-pricee').forEach(function (e) {
                e.style.paddingTop = '8px';
            })

            document.querySelectorAll('.item-for-save').forEach(function (element) {
                element.classList.remove('d-none');
            })

        })
    })

})
