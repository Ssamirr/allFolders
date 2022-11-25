var my_favourite_clubs=["Bayern Munich","Dortmund","Shalke","Leipzig"];
var club=prompt("Write your favourite football club:");
var say=0;
var yes="YES";
var no="NO";
var answer="YES";
say=parseInt(say);
for(var i=0;i<my_favourite_clubs.length;i++){
    if(club==my_favourite_clubs[i]){
        alert("“YEAH I LOVE THEM!”.");
        say++;
        break;
    }
    
}
if(say==0){
    alert("“Nah. They’re pretty lame.”");
    while(answer==yes){
   var answer=prompt("Can I write my favourite club? (YES/NO)");
   if(answer==yes){
       prompt("Write");
   }
   else{
       alert("Thank you");
       break;
   }
}
   
}
