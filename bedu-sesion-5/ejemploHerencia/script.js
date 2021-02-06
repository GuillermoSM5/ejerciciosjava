var Person = function(name){

  this.name = name;
}
 var Developer = function(name, skiils,yearsOfExperience ){
   Person.call(this,name);
   this.skiils= skiils;
   this.yearsOfExperience=yearsOfExperience;
 }

var dev = new Developer('GUillermo', 'JavaScript', 2)

console.log(dev);


