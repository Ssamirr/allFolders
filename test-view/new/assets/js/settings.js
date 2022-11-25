$(document).ready(function () {
    var user_profile_img_change = document.querySelector('.user-profile-img-change');
    if (user_profile_img_change) {
        user_profile_img_change.addEventListener('click', function () {
            user_profile_img_change.querySelector('input').click();
        })
        user_profile_img_change.querySelector('input').addEventListener('change', function () {
            let element = user_profile_img_change.querySelector('img');
            let choosed_file = user_profile_img_change.querySelector('input').files[0];
            if (choosed_file) {
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    element.setAttribute('src', reader.result);
                })
                reader.readAsDataURL(choosed_file)
            }
        })
    }


    var sold_active_advertisements = document.querySelectorAll('.list-sold-active-advertisements');
    if(sold_active_advertisements){
        sold_active_advertisements.forEach(function(element){
            element.addEventListener('click',function(){
                sold_active_advertisements.forEach(function(e){
                    e.classList.remove('selected-header-advertisement');
                })
                element.classList.add('selected-header-advertisement');
            })

    })
    }

    var list_purchases_sales_orders = document.querySelectorAll('.list-purchases-sales-orders');
    if(list_purchases_sales_orders){
        list_purchases_sales_orders.forEach(function(element){
            element.addEventListener('click',function(){
                list_purchases_sales_orders.forEach(function(e){
                    e.classList.remove('selected-header-advertisement');
                })
                element.classList.add('selected-header-advertisement');
            })

    })
    }





})