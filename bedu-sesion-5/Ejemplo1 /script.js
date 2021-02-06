var Person = function(name,birthYear,job){

  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

var guillermo = new Person('Guillermo',1991,'Developer');

var fery = new Person('Fery',1992,'Arquitecta')

console.log(guillermo);
console.log(fery);