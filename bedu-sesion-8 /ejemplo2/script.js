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
var input = document.getElementById('text');

input.addEventListener('input',(element)=>{ title.textContent = element.target.value;
                                                console.log(element)})