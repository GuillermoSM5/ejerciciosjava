// window.addEventListener('keypress' ,()=>{
//   console.log('hello World')
// })
// var button = document.getElementById('boton');
// var one = function(){
//      alert('Click Boton');
//      button.removeEventListener('click',one);

// }
// button.addEventListener('click',one)
var title = document.getElementById('title');
var redButton = document.getElementById('red');
var blueButton = document.getElementById('blue');
var blackButton = document.getElementById('black'); 

redButton.addEventListener('click',()=>title.style = 'color: red;')
blueButton.addEventListener('click',()=>title.style = 'color: blue;')
blackButton.addEventListener('click',()=>title.style = 'color: black;')