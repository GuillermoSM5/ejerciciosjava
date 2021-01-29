var car = {
     brand: 'Nissan',
     model: 'versa',
     year: '2020'
}



var arr=(obj)=>{
  var key = Object.keys(obj)
  var arr = [];

  for(var i=0;i<key.length;i++){
    arr.push([key[i],obj[key[i]]]);
  }
  
  return arr;
}

var array = arr(car);


 var arrayToObject=(array)=>{
   
   var obj = {};

   for(var i=0 ;i<array.length;i++){
       
    obj[array[i][0]] = array[i][1];

   }

   console.log(obj);
      

 } 

 arrayToObject(array);