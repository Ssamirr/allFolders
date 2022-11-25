var buttons = document.querySelectorAll('.card');

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (event) {
    var card_body_parent = event.target.closest('.card');
    var target_element = event.target;

    if (target_element.closest('.kart') != null) {
      var card_title = card_body_parent.getElementsByClassName("card-title")[0].innerHTML;
      var card_pc = card_body_parent.getElementsByClassName("card-text")[0].innerHTML;
      var card_price = card_body_parent.getElementsByClassName("card-money")[0].innerHTML;
      var card_img = card_body_parent.getElementsByClassName("card-img-top")[0];
      var card_img_src = card_img.getAttribute('src');
      var count = 1;
      card_price = parseFloat(card_price.replace('$', ''));
      var sum = card_price;
      sum = parseFloat(sum).toFixed(2);
      var added_product = document.querySelector(`[product_title1="${card_title}"]`);

      var all_sum;
      all_sum = parseFloat(all_sum).toFixed(2);
      all_sum = parseFloat(document.querySelector('.all-sum').textContent);
      all_sum = parseFloat(all_sum + card_price).toFixed(2);
      all_sum = parseFloat(all_sum).toFixed(2);

      // if (!target_element.closest('.kart').classList.contains('d-flex')) {

      // }

      // if (added_product) {
      //     count = parseFloat(added_product.querySelector('.products-count').textContent);
      //     // count = parseFloat(added_product.querySelector('.products-count2').textContent);
      //     count++;

      //     sum = card_price * count;

      //     sum = parseFloat(sum).toFixed(2);
      //     added_product.querySelectorAll('.products-count').forEach((Element) => {
      //       Element.innerHTML = count;
      //     })
      //     added_product.querySelectorAll('.products-money').forEach((Element) => {
      //       Element.innerHTML = sum;
      //     })
      //     // added_product.querySelector('.products-count2').innerHTML = count;
      //   return false;
      // }

      document.getElementsByClassName('elmnt4')[0].classList.add('d-none');

      if (!target_element.closest('.kart').classList.contains('d-flex')) {

        document.querySelectorAll('.all-sum').forEach((Element) => {
          Element.innerHTML = all_sum;
        })

        let card_products = document.querySelector('#card_products');
        let card_group_div1 = document.createElement('div');
        card_group_div1.classList.add('card');
        card_group_div1.style.maxWidth = "540px";
        card_group_div1.setAttribute("product_title", card_title);
        card_group_div1.setAttribute("product_title1", card_title);


        let card_group_div2 = document.createElement('div');
        card_group_div2.classList.add('row', 'no-gutters');



        let card_group_col4 = document.createElement('div');
        card_group_col4.classList.add('col-md-4', 'jsleft');

        let card_group_inc_dec = document.createElement('div');
        card_group_inc_dec.classList.add('js-inc-dec')
        let card_group_increase = document.createElement('div');
        card_group_increase.classList.add('increase');
        card_group_increase.style.color = "#77798c";
        card_group_increase.innerText = '+';
        let card_group_count = document.createElement('div');
        card_group_count.classList.add('products-count', 'style-count');
        card_group_count.innerText = count;
        let card_group_decrease = document.createElement('div');
        card_group_decrease.classList.add('decrease');
        card_group_decrease.style.color = "#77798c";
        card_group_decrease.innerText = "-";
        card_group_inc_dec.appendChild(card_group_increase);
        card_group_inc_dec.appendChild(card_group_count);
        card_group_inc_dec.appendChild(card_group_decrease);



        let card_group_div3 = document.createElement('div');
        let card_group_img = document.createElement('img');
        card_group_img.classList.add('card-img', 'js-img-style');
        card_group_img.setAttribute('src', card_img_src);
        card_group_div3.appendChild(card_group_img);

        card_group_col4.appendChild(card_group_inc_dec);
        card_group_col4.appendChild(card_group_div3);

        let card_group_col8 = document.createElement('div');
        card_group_col8.classList.add('col-md-8');

        let card_group_card_body = document.createElement('div');
        card_group_card_body.classList.add('card-body', 'js-card-body');

        let card_group_card_title = document.createElement('h5');
        card_group_card_title.classList.add('card-title', 'js-tittle');
        card_group_card_title.innerText = card_title;

        let card_group_div4 = document.createElement('div');
        card_group_div4.classList.add('js-price-line');
        let card_group_price = document.createElement('p');
        card_group_price.classList.add('card-text', 'js-text');
        card_group_price.innerText = `$ ${card_price}`;
        card_group_div4.appendChild(card_group_price);


        let card_group_div5 = document.createElement('div');
        card_group_div5.classList.add('js-div5');
        let card_group_sign_money = document.createElement('p');
        card_group_sign_money.classList.add('dollar');
        card_group_sign_money.innerText = '$';
        let card_group_sum = document.createElement('p');
        card_group_sum.classList.add('products-money');
        card_group_sum.innerText = sum;
        let card_group_exit = document.createElement('span');
        card_group_exit.style.marginLeft = "20px";
        card_group_exit.innerHTML = `<svg class="elmnt3 backet2 js-exit" xmlns="http://www.w3.org/2000/svg" width="10.003" height="10" viewBox="0 0 10.003 10">
      <path data-name="_ionicons_svg_ios-close (5)" d="M166.686,165.55l3.573-3.573a.837.837,0,0,0-1.184-1.184l-3.573,3.573-3.573-3.573a.837.837,0,1,0-1.184,1.184l3.573,3.573-3.573,3.573a.837.837,0,0,0,1.184,1.184l3.573-3.573,3.573,3.573a.837.837,0,0,0,1.184-1.184Z" transform="translate(-160.5 -160.55)" fill="currentColor"></path>
  </svg>`


        card_group_div5.appendChild(card_group_sign_money);
        card_group_div5.appendChild(card_group_sum);
        card_group_div5.appendChild(card_group_exit);
        card_group_div4.appendChild(card_group_div5);

        let card_group_div6 = document.createElement('div');
        card_group_div6.classList.add('d-flex', 'js-money');
        let card_group_count2 = document.createElement('span');
        card_group_count2.classList.add('products-count', 'mr-1');
        card_group_count2.innerText = count;
        let card_group_card_money = document.createElement('span');
        card_group_card_money.classList.add('card-money');
        card_group_card_money.innerText = `X ${card_pc}`;
        card_group_div6.appendChild(card_group_count2);
        card_group_div6.appendChild(card_group_card_money);

        card_group_card_body.appendChild(card_group_card_title);
        card_group_card_body.appendChild(card_group_div4);
        card_group_card_body.appendChild(card_group_div6);

        card_group_col8.appendChild(card_group_card_body);

        card_group_div2.appendChild(card_group_col4);
        card_group_div2.appendChild(card_group_col8);

        card_group_div1.appendChild(card_group_div2);

        card_products.appendChild(card_group_div1);



        function addItem(x) {
          let parent = document.querySelectorAll(`[product_title="${card_title}"]`);
          let parent_plus_buttons = x.closest('.card');
          let product_count = parseInt(parent_plus_buttons.querySelector('.products-count').textContent);
          let product_allsum = parseFloat(document.querySelector('.all-sum').textContent);
          product_count++;
          sum = product_count * card_price;
          // console.log(sum);
          product_allsum = parseFloat(product_allsum + card_price).toFixed(2);

          parent.forEach((parent_element) => {
            document.querySelectorAll('.all-sum').forEach((element) => {
              element.innerHTML = product_allsum;
            })
          })
          parent.forEach((parent_element) => {
            parent_element.querySelectorAll('.products-count').forEach((element) => {
              element.innerHTML = product_count;
            })
          })

          parent.forEach((parent_element) => {
            parent_element.querySelectorAll('.products-money').forEach((element) => {
              element.innerHTML = sum;
            })
          })
        }


        // azaldir
        function removeItem(x) {
          let parent = document.querySelectorAll(`[product_title="${card_title}"]`)
          // let parent_minus_buttons = x.closest('.card');
          let product_count = parseInt(parent[0].querySelector('.products-count').textContent);
          let product_allsum = parseFloat(document.querySelector('.all-sum').textContent);
          // let product_item = parseInt(document.querySelector('.backet-item').textContent);
          product_count--;
          sum = product_count * card_price;
          product_allsum = parseFloat(product_allsum - card_price).toFixed(2);

          if (product_count == 0) {
            itemRemove(this);
          }
          else {
            parent.forEach((parent_element) => {
              document.querySelectorAll('.all-sum').forEach((element) => {
                element.innerHTML = product_allsum;
              })
            })
            parent.forEach((parent_element) => {
              parent_element.querySelectorAll('.products-money').forEach((element) => {
                element.innerHTML = sum;
              })
            })
            parent.forEach((parent_element) => {
              parent_element.querySelectorAll('.products-count').forEach((element) => {
                element.innerHTML = product_count;
              })
            })
          }
        }

        // silir
        function itemRemove(x) {
          let exit_button = document.querySelectorAll(`[product_title="${card_title}"]`)[0];
          let product_count = parseInt(exit_button.querySelector('.products-count').textContent);
          let product_allsum = parseFloat(document.querySelector('.all-sum').textContent);
          let product_sum = parseFloat(exit_button.querySelector('.products-money').textContent);
          let product_cardprice = exit_button.querySelector('.card-text').innerHTML;
          product_cardprice = parseFloat(product_cardprice.replace('$', ''));
          let product_item = parseInt(document.querySelector('.backet-item').textContent);
          product_allsum = parseFloat(product_allsum - product_sum).toFixed(2);
          product_count = parseInt(product_count);
          console.log(product_allsum);
          product_item--;
          exit_button.remove();
          document.querySelectorAll('.backet-item').forEach((items) => {
            items.innerHTML = product_item;
          })
          exit_button.querySelectorAll('.products-money').forEach((element) => {
            element.innerHTML = product_sum;
          })
          exit_button.querySelectorAll('.products-count').forEach((element) => {
            element.innerHTML = product_count;
          })
          document.querySelectorAll('.all-sum').forEach((element) => {
            element.innerHTML = product_allsum;
          })
        }

        card_group_increase.addEventListener('click', function () {
          addItem(this);
        })

        card_group_decrease.addEventListener('click', function () {
          removeItem(this);
          let exit_button = this.closest('.card');
          let product_count = parseInt(exit_button.querySelector('.products-count').textContent);
          if (product_count == 0) {
            itemRemove(this);
          }
        })

        card_group_exit.addEventListener('click', function () {
          itemRemove(this);
        })


        let change_kart = this.querySelector('.kart');
        let kart_minus = card_group_decrease.cloneNode(true);
        change_kart.classList.add('d-flex');
        change_kart.innerHTML = '';
        // kart_minus.innerText = '-';
        // let jcount = parseFloat(document.querySelector('.products-count').textContent);
        let kart_number = card_group_count.cloneNode(true);
        // kart_number.innerText = jcount;
        let kart_plus = card_group_increase.cloneNode(true);
        // kart_plus.innerText = '+';
        change_kart.appendChild(kart_minus);
        change_kart.appendChild(kart_number);
        change_kart.appendChild(kart_plus);

        kart_plus.addEventListener('click', function () {
          addItem(this);
        })
        kart_minus.addEventListener('click', function () {
          removeItem(this);
        })
      }

      // CHANGING BASKET ITEMS COUNT
      var es = document.getElementById('card_products').children;
      document.querySelectorAll('.backet-item').forEach((items) => {
        items.innerHTML = es.length;
      })
    }
    else {
      document.querySelector('#cardbutton').click();
      let card_img_top = this.querySelector('.card-img-top').getAttribute('src');
      document.querySelector('.product-image').setAttribute('src', card_img_top);
      document.querySelectorAll('.subproduct-image').forEach((element) => {
        element.setAttribute('src', card_img_top);
        let card_img_title = this.querySelector('.card-title').innerText;
        document.querySelector('.modal-title').innerText = card_img_title;
        let card_img_text = this.querySelector('.card-text').innerText;
        document.querySelector('.modal-pc').innerText = card_img_text;
        let card_img_money = this.querySelector('.card-money').innerText;
        document.querySelector('.pul').innerText = card_img_money;
      })

    }
  })

}




