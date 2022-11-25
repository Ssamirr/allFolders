var richter=prompt("Richter ededini daxil edin: ");
if(isNaN(richter)){
    alert("Yalniz eded daxil ede bilersiniz");
    throw new Error("Yalniz eded daxil ede bilersiniz");
}
richter=parseInt(richter);
var coil=10*(1.5*richter+4.8);
var tnt=coil/(4.184*10*6);
document.write("Coil ile: "+coil+'<br>');
document.write("TNT ile :"+tnt);