var car = {
     brand: 'Nissan',
     model: 'versa',
     year: '2020'
}

// console.log(Object.keys(car))

function conversion(car){
   var keys = Object.keys(car);
   var pairs = [];

   for(var i = 0;i<keys.length;i++){
        
         pairs.push([keys[i],car[keys[i]]]);
   }

   return pairs;
}

var arr = conversion(car);



function arrayToObject(arr){
    var obj = {};

    for(var i  = 0 ; i< arr.length; i++){
         obj[arr[i][0]] = arr[i][1];   
    }

    return obj;
}
console.log(arrayToObject(conversion(car)));