var gallon=prompt("Gallon");
if(isNaN(gallon)){
    alert("Yalniz eded daxil ede bilersiniz");
    throw new Error("Yalniz eded daxil ede bilersiniz");
}
gallon=parseInt(gallon);
    var benzin= gallon*3.7854;
    var barel=gallon*0.05;
    var CO2=gallon*20;
    var etanol=gallon*115000/75700;
    var dollar=gallon*4;

    document.write("Benzin: " + benzin + '<br>');
    document.write("Barel :" + barel + '<br>');
    document.write("CO2 :" + CO2 + '<br>');
    document.write("Etanol :"+ etanol + '<br>');
    document.write("Dollar :" + dollar + '<br>');