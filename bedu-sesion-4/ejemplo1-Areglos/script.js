function Multiplicacion(numeros){

   var  nuevoArreglo = [];
   
   for(var i = 0;i<numeros.length;i++ ){
      
      nuevoArreglo.push(numeros[i]*2);
   }
     return nuevoArreglo;
}

var numeros = [1,2,3,4,5];

console.log(Multiplicacion(numeros));


