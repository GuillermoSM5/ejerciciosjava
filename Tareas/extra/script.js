// Extra
/*
    Dada una cadena como la siguiente "aaabbbbbcc", crear una función
    ~group~ que regrese un arreglo agrupando valores consecutivos de
    la siguiente manera: ~[["a", 3], ["b", 4], ["c", 2]]~
*/
var group = function(cadena){
  var array= Array.from(cadena);
  var nuevoarray =[];
  var cont = 0;
  var ant ;

  for(var i=0;i<=array.length;i++){
    if (i==0)ant = array[i]; ///en la primera interacion igualamos la variable ant a la primera letra del arreglo 
    if(array[i]==ant) cont++ //cuando tengamos un elemento igual a la variable ant aumentamos 1 en el contador 
    else if(array[i] != ant){  
    nuevoarray.push([ant,cont])//cuando sea diferetne de ant primero ingresamos en nuestro nuevo arrreglo  lso datos que tenemos en nuestras variables 
     cont = 1; //ponemos el contador en 1 ya que ya estamos en la primera iteracion de una letra diferente 
     ant = array[i]//igualamos noistra variable de control al valor que tenemos en la iteracion 
    } 
  }  
  
  return nuevoarray;
}

var cadena = 'aaabbbbccca';
console.log(group(cadena));

