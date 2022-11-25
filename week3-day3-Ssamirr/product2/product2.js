var card=document.getElementsByClassName("card");
for(var i=0;i<card.length;i++){
    card[i].addEventListener('click',function(){
        var card_body_parent = this.closest('.card');
        var card_img = card_body_parent.getElementsByClassName("shekil")[0];
        var card_img_src = card_img.getAttribute('src');
        var card_name=card_body_parent.getElementsByClassName("cardname")[0].innerHTML;
        var card_lb=card_body_parent.getElementsByClassName("cardlb")[0].innerHTML;
        var card_price=card_body_parent.getElementsByClassName("cardmoney")[0].innerHTML;
        card_price=parseInt(card_price.replace('$',''));
        
        

        // document.getElementById('card-img').setAttribute('src',card_img_src) ;
        document.getElementById('card-img').innerHTML=`<img style="width:90px;height:90px;display:flex;margin:8px 0px;border:1px solid rgb(234, 234, 234);" src="${card_img_src}">`;
        document.getElementById('name-input').value= card_name;
        document.getElementById('unit-input').value=card_lb;
        document.getElementById('price-input').value=card_price;
    });
};