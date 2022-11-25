var rod=prompt("Rod ile mesafe teyin edin");

if(isNaN(rod)){
    alert("Yalniz eded daxil ede bilersiniz");
    throw new Error("Yalniz eded daxil ede bilersiniz");
}
rod=parseInt(rod);
var metr= rod*5.0292;
var furlong=rod*0.025;
var mil=rod*319.99;
var foot=rod*16.5;
var deqiqe=rod *0.06;

document.write("Metr ile " + metr +'<br>');
document.write("Furlong ile " + furlong +'<br>');
document.write("Mil ile " + mil +'<br>');
document.write("Feet ile " + foot +'<br>');
document.write("Deqiqe ile " + deqiqe +'<br>');
