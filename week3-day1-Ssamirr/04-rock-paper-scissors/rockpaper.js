var kagiz=1;
        var das=2;
        var qayci=3;
        var komp=Math.floor(Math.random() * 3+1);

        prompt("Zehmet olmasa adinizi daxil edin");
       var secilen=prompt("Birini secin \n" + kagiz +"-kagiz \n"  + das +"-das \n"+qayci+"-qayci");
       secilen=parseInt(secilen);
       if(isNaN(secilen)){
        alert("Yalniz eded daxil ede bilersiniz");
        throw new Error("Yalniz eded daxil ede bilersiniz");
    }
    if(secilen===kagiz || secilen===das || secilen===qayci){
        document.write("Sizin secdiyiniz: " + secilen + '<br>');
        document.write("Kompyuterin secdiyi: \n" + komp + '<br>');
            if(secilen===komp){
                document.write("Beraber");
             }
             else if(secilen===kagiz && komp===das || secilen===qayci && komp===kagiz || secilen===das && komp===qayci ){
                document.write("Qazandiniz");
            }
            else{
                document.write("Meglub oldunuz");
            }
    }

    else{
        document.write("Yanlish");
    }