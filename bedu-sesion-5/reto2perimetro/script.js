var Triangle = function(a,b,c){
  this.a = a;
  this.b = b;
  this.c = c;
}

Triangle.prototype.perimeter = function(){
 
  return console.log(`${this.a + this.b + this.c}`);

}
 var Triangulo = new Triangle(1,2,3);
console.log(Triangulo);
Triangulo.perimeter();