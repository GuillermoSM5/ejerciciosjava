 function createButton(nodo){ 
   for (var i = 1;i<nodo.length;i++){
    var button=document.createElement('button'); 
    nodo[0].insertBefore(button,nodo[1]);
    button.textContent=nodo[i].getAttribute('data-tabname');
   }
 }
function nav_tab(divs,buttons){
    
    buttons[0].addEventListener('click',()=>{
        buttons[0].style.color='orange';
        buttons[1].style.color='black';
        buttons[2].style.color='black';
        divs[1].style.display='block';
        divs[2].style.display='none';
        divs[3].style.display='none';
       });  
    buttons[1].addEventListener('click',()=>{
        buttons[0].style.color='black';
        buttons[1].style.color='orange';
        buttons[2].style.color='black';
        divs[2].style.display='block';
        divs[1].style.display='none';
        divs[3].style.display='none';
       }); 
       buttons[2].addEventListener('click',()=>{
        buttons[0].style.color='black';
        buttons[1].style.color='black';
        buttons[2].style.color='orange';
        divs[3].style.display='block';
        divs[2].style.display='none';
        divs[1].style.display='none';
       }); 
       
}
function createTabs(divs){
    createButton(divs);
    var buttons=document.getElementsByTagName('button');
    console.log(divs);
    var div1 = divs[1];
    
    nav_tab(divs,buttons);
       
}

var divs = document.getElementsByTagName('div');
createTabs(divs);