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
//var factorial = function fac(number) {
  //return number < 2 ? 1 : number * fac(number - 1)
  //}
  //console.log(factorial(2));