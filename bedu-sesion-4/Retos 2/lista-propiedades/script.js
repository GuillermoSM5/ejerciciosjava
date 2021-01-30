var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];

var pluck=(list,propiedad)=>{

  var array=[];

  for(var i = 0;i<list.length;i++){
         
    array.push(list[i][propiedad]);

  }

  console.log(array);

}

pluck(singers,'name');