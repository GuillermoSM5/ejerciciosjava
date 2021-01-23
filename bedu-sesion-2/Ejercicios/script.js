
// conversion de libras a kilogramos-------------------------------------
// function librasKilogramos(libras){
   
//     return  libras*0.453592; 

// }
// console.log(librasKilogramos(33.3));
//------------------------------------------------------------------------
//conversion de kilometros a Millas-------------------------------------
// function kilometrosMillas(kilometros){

//     return kilometros*0.621371;

// }
//--------------------------------------------------------------------------
//Encontrar el numero mayor------------------------------------------------
// var numero = [1,6,8,4,2,7,10,3,5];
// var numeroMayor=0;

// for(var i=0;i<numero.length;i++){
//     numero[i]>numeroMayor?numeroMayor = numero[i]:numeroMayor;      
// }
// console.log(numeroMayor);
//--------------------------------------------------------------------------
// Devuelve numeros pares---------------------------------------------------
// var numero = [1,6,8,4,2,7,10,3,5];
// for(var i=0;i<numero.length;i++){
//        numero[i]%2==0?console.log(`el numero ${numero[i]} es par`):console.log(`el numero ${numero[i]} es impar`);      
//     }
//---------------------------------------------------------------------------
// imprime matriz-------------------------------------------------------------
for(var i = 1;i<=5;i++){
   var renglon = '';
  for (var k= 1;k<=5;k++)
  {
    renglon += ` ${k*i} `;
  }
  console.log(renglon);
}
//-----------------------------------------------------------------------------

 