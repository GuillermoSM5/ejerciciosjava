var Vector = function(x,y){

  this.x=x;
  this.y=y;
   
};
Vector.prototype.plus=function(vec){ //Declarando un metodo parala clase de Vector
 return `${this.x+vec.x} , ${this.y + vec.y}`//Calculando la suma de vectores 
}

Vector.prototype.minus=function(vec){//Declarando un metodo parala clase de Vector
  return `${this.x-vec.x} , ${this.y-vec.y}`//Calculando la resta de vectores
}
Vector.prototype.lengt=function(){//Declarando un metodo parala clase de Vector
  var res = this.x**2 + this.y**2; //Calculando la suma de los componentes al cuadrado 
  return `${Math.sqrt(res)}`; //regresando la rais de la variables res
}
var vec1= new Vector(1,2); //creando dos nuevos objetos 
var vec2= new Vector(2,3);

console.log(vec1.plus(vec2)); //Imprimiendo datos 
console.log(vec1.minus(vec2));
console.log(vec1.lengt());
