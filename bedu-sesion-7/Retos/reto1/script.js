var images = document.getElementsByTagName('img');

for (var i = images.length - 1; i >= 0; i--) {
  console.log(i)
 var text = images[i].alt;
 var node = document.createElement('h4');
 node.textContent=text;
 document.body.replaceChild(node,images[i]);
}
//Preguntar por que un for ascendente no funciono y con un for 
//descendiente si 
