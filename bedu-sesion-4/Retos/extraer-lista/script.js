var singers = [
      {name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
      {name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
      {name: 'Kurt Cobain', band: 'Nirvana', born: 1967},
      {name: 'Chris Cornell', band: 'Soundgarden', born: 1964},
]
   
function search(arreglo,propiedad){
    
   var res = [];
    console.log(arreglo.length);

    for(var i=0; i<arreglo.length;i++){ 
   
      res.push(arreglo[i][propiedad]);
    }
    
   return res;
}
console.log(search(singers,'band'));

singers.pop();
