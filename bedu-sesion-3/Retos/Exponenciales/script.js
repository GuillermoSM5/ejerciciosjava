
function exponencial(base,exponente){
     var resultado = base;
      for(var i=2;i<=exponente ;i++){
         resultado = resultado * base
      }  
     console.log(resultado);
}

exponencial(3,2);