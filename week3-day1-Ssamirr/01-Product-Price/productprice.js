var malin_adi="name";
    var malin_qiymeti="price";
    var malin_chekisi="weight";
    var endirim="sale";

alert("Welcome");
prompt("Enter " + malin_adi);
var price=prompt("Enter " + malin_qiymeti);
if(isNaN(price)){
    alert("Yalniz eded daxil ede bilersiniz");
    throw new Error("Yalniz eded daxil ede bilersiniz");
}
var weight=prompt("Enter " + malin_chekisi);
if(isNaN(weight)){
    alert("Yalniz eded daxil ede bilersiniz");
    throw new Error("Yalniz eded daxil ede bilersiniz");
}
var sale=prompt("Enter " + endirim);
if(isNaN(sale)){
    alert("Yalniz eded daxil ede bilersiniz");
    throw new Error("Yalniz eded daxil ede bilersiniz");
}
 
 price=parseInt(price);
 weight=parseInt(weight);
 sale=parseInt(sale);

 var summary= price*weight-(sale*price*weight/100);
document.write("Son Mebleg " + summary);