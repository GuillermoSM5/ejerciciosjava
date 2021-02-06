var car = {             //objeto inmutable 
  brand: 'Nissan',
  model: 'Sentra',
  year: 2020
}

function addColor(car) {  //agregando la propiedad color 
 car.color='Black'    

 return car;
}

console.log(car);

var newCar = addColor(car);  //creando un nuevo objeto para no mutar car

console.log(newCar);

console.log(car===newCar);//las dos variables apuntan al mismo objeto 