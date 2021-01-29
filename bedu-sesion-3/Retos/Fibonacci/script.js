
function Serie(top){
   var na = 1;
   var ns = 0;
   var resultado = 0;
   for(var i=0;i<=top;i++){
            resultado = na + ns;
            na=ns;
            ns=resultado;
            if(resultado>top){
               return ;
            }
           console.log(resultado);
   }
}
Serie(10);

// function fibonacci(num) {
//    if (num <= 1) return 1;
 
//    return fibonacci(num - 1) + fibonacci(num - 2);
//  }
 
//  function fibonacciSequence(limit) {
//    if(limit < 1) return console.log('Limit must be greater than 0');
 
//    for(var i = 0; i < limit; i++ ) {
//      console.log( fibonacci(i) );
//    }
//  }

// fibonacciSequence(10)