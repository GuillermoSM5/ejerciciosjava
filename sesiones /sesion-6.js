// programa que multiplica por 2 todos los numeros de un arreglo.
// prograamcion estructurada
var numbers = [1, 2, 3, 4, 5];
var doubles = [];

for (var i = 0; i < numbers.length; i++) {
  doubles.push(numbers[i] * 2);
}

// el mismo programa pero en programacion funcional
var numbers = [1, 2, 3, 4, 5];

var doubles = numbers.map(function(number) {
  return number * 2;
});

// pura o impura

// pure function
function degToRad(theta) {
  return (theta * (Math.PI * 2)) / 360;
}

// impure function
function degToRad(theta) {
  console.log("Vamos a convertir a radianes");
  return (theta * (Math.PI * 2)) / 360;
}

// impure function
var theta = 300;
function degToRad() {
  return (theta * (Math.PI * 2)) / 360;
}

// de impure function a pure function
var x = {
  name: "x",
  times: 0
}

function increment(x) {
  ++x.times;
  return x;
}

var y = increment(x);

// convertirla a pura
function increment(x) {
  return Object.assign({}, x, {times: x.times + 1})
}

// funciones mutables vs inmutables
var car = {
  brand: 'Nissan',
  model: 'Sentra',
  year: 2020
}

function addColor(car) {
  car.color = "Black";
  return car;
}

console.log('Before calling addColor()', car);

var sameCar = addColor(car);

console.log('After calling addColor()', car);
console.log('After calling addColor()', sameCar);

// para que addColor sea inmutable
function addColor(car) {
  var newCar = Object.assign({}, car, {
    color: "Black"
  });

  return newCar;
}

// otro ejemplo
var cart = [
  {
    item: 'Laptop',
    quantity: 1
  }
]

function addItemToCart(item, quantity) {
  cart.push({
    item: item,
    quantity: quantity
  })
}

// inmutable
function addItemToCart(cart, item, quantity) {
  var newCart = cart.map(function(element) {
    return element;
  });

  newCart.push({
    item: item,
    quantity: quantity
  })

  return newCart;
}

// un ultimo ejemplo
// sumar todos los digitos de un numero entero. Ejemplo:
// Entrada: 12345
// Salida: 1 + 2 + 3 + 4 + 5 = 15

// paso 1: descomponer el entero en sus digitos
var number = 12345;
// var string = number.toString();
// var array = string.split('');

// paso 2: encadenar las funciones anteriores (composicion)
var array = number.toString().split('');

// paso 3: convertir los strings (digitos) a numeros:
var arrayOfNumbers = array.map(Number);

// paso 4:
var sum = arrayOfNumbers.reduce(function(a, b) {
  console.log(a, b);
  return a + b;
}, 0);

// paso 5: composicion

// arrow functions

// function expression
function (a){
  return a + 100;
}

// para convertir a arrow function

// paso 1: eliminar la palabra "function"

(a) => {
  return a + 100;
}

// paso 2: eliminar brackets y la palabra "return" porque esta implicito
(a) => a + 100;

// paso 3: eliminar parentesis de argumentos
a => a + 100;

// paso 3.1: cuando tenemos multiples argumentos o NO argumentos, se necesitan parentesis otra vez
() => 42;
(a,b) => a + b;

// paso 3.2: cuando tenemos mulitples lineas, regresan los brackets y el return
(a,b) => {
  let meaningOfLife = 42;
  return a + b + meaningOfLife;
}

// para named functions
let foo = a => a + 100;

// reto 1

/*
    Crear una función ~flatten~ que recibe un arreglo de arreglos y
    retorna un nuevo arreglo con todos los elementos del arreglo
    original.

entrada: [[1, 2], [3, 4, 5], [6]]
salida: [1, 2, 3, 4< 5, 6]
*/

// reto 2

/*
    Crear una función ~compact~ que recibe un arreglo y retorna un
    nuevo arreglo sin incluir los valores que sean falsy.

entrada: [1, true, "hello", false, ""]
salida: [1, true, "hello"]
*/

// reto 3
/*
    Crear una función de alto orden ~loop~ que será similar a un
    ~for~. Recibe ~value~, una función ~test~, una función ~update~ y
    una función ~body~. En cada iteración se debe ejecutar la función
    ~test~ y terminar el ciclo si la función retorna ~false~. Después
    se ejecuta la función ~body~ dándole como argumento el ~value~
    actual. Por último se ejecuta la función ~update~ para crear un
    nuevo valor y se repite el proceso.

Pista: usar composicion.
*/

// Extra
/*
    Dada una cadena como la siguiente "aaabbbbbcc", crear una función
    ~group~ que regrese un arreglo agrupando valores consecutivos de
    la siguiente manera: ~[["a", 3], ["b", 4], ["c", 2]]~
*/
