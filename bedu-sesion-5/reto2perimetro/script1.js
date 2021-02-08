/*var Cuadrado = function(a){
     this.a = a;
}

Cuadrado.prototype.area = function(){
    console.log(this.a**2);
}

var cuadrado  = new Cuadrado(5);
cuadrado.area();*/

/*var Vec = function(x,y){
    this.x = x ; 
    this.y = y ;
}

Vec.prototype.plus = function(vec){
    return  new Vec (this.x+vec.x, this.y + vec.y) 
}
Vec.prototype.minus = function(vec){
    return new Vec(this.x-vec.x , this.y-vec.y)
}

Vec.prototype.length = function(){
    var res = this.x**2 + this.y**2; 
    return `${Math.sqrt(res)}`; 
}
var vec1 = new Vec(1,2);
var vec2 = new Vec(2,3);

console.log(vec1.plus(vec2));
console.log(vec1.minus(vec2));
console.log(vec1.length());*/

var Group = function(){
    this.num = [];
}
Group.prototype.has = function(element){
 return this.num.includes(element);
}

Group.prototype.add = function(element){
    if(!this.has(element))
    {
        this.num.push(element);
    } 

}

Group.from = function(array){
      var a = new Group;
      var NewArray = array.forEach(element => a.add(element));    
      return a; 
}

Group.from([1,2,3,4,4,5,5])
