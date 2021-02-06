var numPrimo; 
 for(var i=2; i<=100;i++){
     var numPrimo=true;
     for(let j=3;j<i;j++ )
     {
       if(i%j==0){
            numPrimo=false;
       }

     }
     if(numPrimo){
     console.log(i);
     }
 }
