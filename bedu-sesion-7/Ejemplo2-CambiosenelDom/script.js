var paragraphs = document.body.getElementsByTagName('p')

console.log(paragraphs);
 for (var key in paragraphs){
  console.log(paragraphs[key].outerHTML);
}
var clonenode = paragraphs[1].cloneNode(); 
clonenode.textContent = 'prueba';
//document.body.insertBefore(clonenode,null);
document.body.appendChild(clonenode);
console.log(clonenode.nodeName);
//setTimeout(() => {clonenode.remove(); }, 2000);

var h1 = document.createElement('h1');
console.log(h1)
var text = document.createTextNode('Modificando el DOM');
h1.appendChild(text);

document.body.insertBefore(h1,paragraphs[0])
//h1.textContent = 'holasss'

//document.body.appendChild(h1);