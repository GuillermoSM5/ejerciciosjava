function flatten(arrays) {
  let arrayT = [];
  arrays.map(array =>{arrayT.push(...array)})
  return arrayT; 
}
var arrays = [[1, 2, 3], [4, 5], [6]];
var array = flatten(arrays);

console.log(array); // [1, 2, 3, 4, 5, 6]