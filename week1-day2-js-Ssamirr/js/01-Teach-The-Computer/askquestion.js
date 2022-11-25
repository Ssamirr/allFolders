var sual=[];
var cavab=[];
var beli="Beli";
var xeyr="Xeyr";





while(true){
   var sual2=prompt("Sual ver?");
    if (sual.indexOf(sual2.toLowerCase())==-1){
        sual.push(sual2.toLowerCase());
        alert("Bu sualin cavabi yoxdur");
        cavab.push(prompt("Cavab ver"));        
    }
    else{
        alert("Sualin cavabi var");
        document.write(cavab[sual.indexOf(sual2.toLowerCase())]);
    }
var answer=prompt("Davam etmek isteyirsen (Beli/Xeyr)");
 if(answer==xeyr){
     break;
 }
 else{
     continue;
 }
}