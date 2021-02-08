var singers = [
  { name: 'Steven Tyler', band: 'Aerosmith', born: 1948 },
  { name: 'Karen Carpenter', band: 'The Carpenters', born: 1950 },
  { name: 'Kurt Cobain', band: 'Nirvana', born: 1967 },
  { name: 'Chris Cornell', band: 'Soundgarden', born: 1964 },
];
function pluck(list, propertyName) {
     var lista = list.map(list => {return list[propertyName]});
     console.log(lista);
}

pluck(singers,'born');