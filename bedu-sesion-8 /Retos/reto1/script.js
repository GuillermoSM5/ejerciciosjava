function up(){
    px =px+8;
    globo.style.fontSize = px + 'px'; 
    return px;
}
function down(){
    px=px-8;
    globo.style.fontSize = px + 'px';
    return px;
}
function boom(globo,px){
    globo.textContent='boom' ;
    alert('El globo se rompio')
    globo.style.fontSize ='20px'
    globo.textContent='🎈';
   return px = 20;
}
function inflar(e,globo){
   
    e.preventDefault();
    if(e.key=='ArrowUp'){       //Detectando la flecha hacia arriba
       px= up();  //creando variable de control 
       if(px>90){
         px = boom(globo,px);
          };
    }
    if(e.key=='ArrowDown'){
       px= down(px);
    }
}

var globo = document.getElementById('ballon_p')
var px = 20;
window.addEventListener('keydown',(e)=> inflar(e,globo));



