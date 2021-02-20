function fila(){
  var fila = document.createElement('tr');
  var tabla=document.getElementById('tabla');
  return tabla.appendChild(fila);
}
function columna(obj){
  var row = fila();
  for(var key in obj ) {
    var colum = document.createElement('td')
    console.log(key);
    if(key=='height'){
      colum.textContent=obj[key];
      colum.style.textAlign ='right';
    }
    else colum.textContent=obj[key];
    row.appendChild(colum)   
   }; 
}
function headRow(obj){
  var row = fila();
  for(var key in obj ) {
    var colum = document.createElement('th')
    colum.textContent=key;
    row.appendChild(colum)   
   }; 
}
function createTable(array){
  tabla = document.createElement('table');
  tabla.id ='tabla'
  tabla.className = 'tablas'
  div = document.getElementById('mountains')
  div.appendChild(tabla);
  headRow(array[0]);             //no importa el objeto que mandemos soloe s para sacar el nombre de las propiedades            
  array.forEach(element => {     //recorriendo arreglo     
         columna(element);
  });
}

var data = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];
 
createTable(data);



