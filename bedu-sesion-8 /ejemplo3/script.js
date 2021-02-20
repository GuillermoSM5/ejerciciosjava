window.addEventListener('keydown',(e)=>{
    if(e.key=='Enter'){
        document.body.style.background='lightblue';
    }
    if(e.key=='Enter' && e.ctrlKey){
        document.body.style.background='orange';
    }
})

window.addEventListener('keyup',()=>{
    document.body.style.background = '';
});