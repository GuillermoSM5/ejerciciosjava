function compact(array) {
 return  array.filter((number)=>!!number == true) 
}
var array = [0, 1, false, 2, '', 3];
var compactedArray = compact(array);

console.log(compactedArray)// [1, 2, 3]

