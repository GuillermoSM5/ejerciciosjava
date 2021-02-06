var input = 12345;

var inputStr = input.toString();

console.log(inputStr);

var array = Array.from(inputStr);

var numArray = array.map(element => {return Number(element)});
console.log(numArray);

var suma = numArray.reduce((a,b)=> a+b);
console.log(suma);