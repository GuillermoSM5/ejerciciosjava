
function retiro(age){
    var diaRetiro = 65 - calcularAge(age);
    
    console.log(`Tu naciste en ${age} tienes ${calcularAge(age)} años y te faltan ${diaRetiro} años para descansar`)
}


function calcularAge(date){
 
    return 2020 - date;
}


retiro(1991);