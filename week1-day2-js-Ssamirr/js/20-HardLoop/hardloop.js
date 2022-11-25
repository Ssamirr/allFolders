var myFarm = ["chickens", "pigs", "cows", "horses", "ostriches"];

for(var i=0;i<myFarm.length;i++){
    console.log(myFarm[i]);

if(myFarm[i].startsWith("c") || myFarm[i].startsWith("o")){
    alert("Starts with 'c' or 'o'!");
}
}