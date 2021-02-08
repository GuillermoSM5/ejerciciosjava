// tarea sesion 4

/*
  Crear una función ~pluck~ que recibe un arreglo de objetos y el
  nombre de una propiedad en /string/, y regresa un arreglo con las
  propiedades correspondientes de todos los objetos en la lista.
*/

var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

function pluck(list, propertyName) {
  let result = Array(list.length);

  for (let i = 0; i < list.length; i++) {
    result[i] = list[i][propertyName];
  }

  return result;
}

// ejemplo de constructor function
function Pixel(x, y) {
  this.x = x;
  this.y = y;
}

function Pixel(x, y) {
  this.x = x;
  this.y = y;

  this.clone = function() {
    return new Pixel(this.x, this.y);
  }
}

// ejemplo con prototype
function Pixel(x, y) {
  this.x = x;
  this.y = y;
}

Pixel.prototype.clone = function () {
  return new Pixel(this.x, this.y);
}

Pixel.prototype.distance = function (p) {
  // p is a Pixel
  return Math.sqrt(Math.pow((p.y - this.y), 2) + Math.pow((p.x - this.x), 2))
}

// lo mismo que lo anterior
function Pixel(x, y) {
  this.x = x;
  this.y = y;
}

Pixel.prototype = {
  // muy importante no olvidar volver a definir
  // el apuntador a la funcion constructora
  constructor: Pixel,
  clone() {
    return new Pixel(this.x, this.y);
  },
  distance(p) {
    // return Math.sqrt....
  }
}

// clases en ES6
class Pixel {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  clone() {
    return new Pixel(this.x, this.y);
  }

  distance(p) {
    // return Math...
  }
}

// asignar el prototype de un objeto a otro
var point = {x: 100, y: 200};
var childPoint = {}

//  Lectura recomendada: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

function Pixel(x, y) {
  this.x = x;
  this.y = y;
}

Pixel.prototype.asArray = function() {
  return [this.x, this.y];
}

Pixel.prototype.asString = function() {
  return "x: " + this.x + " y: " + this.y;
}

Pixel.prototype.distance = function(p) {
  return Math.sqrt(Math.pow((p.x - this.x), 2) + Math.pow((p.y - this.y), 2))
}

function Pixel3D(x, y, z) {
  Pixel.call(this, x, y);
  this.z = z;
}

// si quisieramos crear el siguiente objeto
var john = {
  name: "John",
  birthYear: 1990,
  job: "JavaScript Developer"
}

var Person = function(name, birthYear, job) {
  this.name = name;
  this.birthYear = birthYear;
  this.job = job;
}

var john = new Person('John', 1990, 'Developer');

// lo que hace new seria algo como lo siguiente
var john = {};

function personConstructor(ref, name, birthYear, job) {
  ref.name = name;
  ref.birthYear = birthYear;
  ref.job = job;

  return ref;
}

john = personConstructor(john, "John", 1990, "Developer");

// ejemplo 1 function constructor
var Square = function(size) {
  this.size = size;
  this.area = function() {
    return Math.pow(this.size, 2);
  }
}

// recordemos que area esta definida directamente en el constructor
//  por lo que todas las instancias de Square van a tener una copia
// de la funcion. Para evitar eso se usa el prototype
var Square = function(size) {
  this.size = size;
}

Square.prototype.area = function() {
  return Math.pow(this.size, 2);
}

/*
    Crear un /function constructor/ llamado ~Vec~ el cual representa
    un vector en dos dimensiones. Recibe dos parámetros ~x~ y ~y~,
    ambos valores numéricos que deben ser las propiedades del objeto.

    Agregar los siguientes métodos al ~prototype~:

    - ~plus~ recibe una instancia de ~Vec~ y retorna una nueva
      instancia con la suma de ambos vectores.
    - ~minus~ recibe una instancia de ~Vec~ y retorna una nueva
      instancia con la resta de ambos vectores.
    - ~length~ retorna la longitud del vector, es decir la distancia
      del punto ~x,y~ desde el origen ~0,0~.

*/

var Vec = function(x, y) {
  this.x = x;
  this.y = y;
}

Vec.prototype.plus = function(z) {
  return new Vec(this.x + z.x, this.y + z.y);
}

Vec.prototype.minus = function(z) {
  return new Vec(this.x - z.x, this.y - z.y);
}

Vec.prototype.length = function(z) {
  return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
}

// ejemplo de herencia
var Person = function(name) {
  this.name = name;
}

var Teacher = function(name, subject) {
  Person.call(this, name);
  this.subject = subject;
}

/*
    Crear un constructor /function constructor/ ~Group~. Este objeto
    servirá para guardar grupos de números. 

    Agregar los siguientes métodos:

    1. ~has~ regresa un booleano indicando si el valor pasado como
       argumento forma parte del grupo.
    2. ~add~ agrega un nuevo valor al grupo sólo si no existe.
    3. ~from~ método estático que recibe un arreglo y regresa un nuevo
       grupo (una nueva instancia de ~Group~) con todos los elementos
       del arreglo.

Documentación de métodos estáticos:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static

Para agregar un método estático utilizando la sintaxis similar a la
utilizada con ~prototype~, hay que declarar el método directamente en
la "clase" ~Group~. Es decir Group.from = function()...
*/

var Group = function() {
  this.members = [];
}

Group.prototype.has = function(x) {
  return this.members.includes(x);
}

Group.prototype.add = function(x) {
  if (!this.has(x)) {
    this.members.push(x);
  }
}

Group.from = function(source) {
  let g = new Group();
  for (let i = 0; i < source.length; i++) {
    g.add(source[i]);
  }

  return g;
}
