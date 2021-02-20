function createNode(type,child){
  var node  = document.createElement(type);
 
  if(typeof(child) === 'string'){
    var text = document.createTextNode(child);
    node.appendChild(text);

  }else{
     node.appendChild(child);
  }

  return node;
}

var h1 = createNode('footer', createNode('strong', "- Karl Popper"));
console.log(h1.outerHTML)
// document.body.insertBefore(createNode('p','Hellow World'),null);
document.getElementById('quote').appendChild(h1);
//console.log(createNode('p','Hellow World'));
var link = document.getElementById('link');
console.log(link);
link.href = 'www.google.com'


