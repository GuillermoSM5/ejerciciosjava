var boton =document.getElementById('open_modal');
var modal = document.getElementById('modal');
var x  = document.getElementById('cerrar');
var image =document.getElementById('modal-image');
console.log(image);
console.log(boton);
boton.addEventListener('click',()=> {modal.style.display='block';
                   image.src = "https://picsum.photos/300/200";
                  });
x.addEventListener('click',()=>modal.style.display='none');

