function Promedio(numeros){
   var suma = 0;
   
    for(var i= 0;i<numeros.length;i++ ){
       suma += numeros[i];
    }
   
    return suma/numeros.length;
} 

var cali = [7,8,5.8,10,9.3,6,6.5];

console.log(Promedio(cali));