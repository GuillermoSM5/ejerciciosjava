
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
Serie(100);


