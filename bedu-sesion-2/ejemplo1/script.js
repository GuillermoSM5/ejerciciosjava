var time = 12;
var greeting ;

if (time < 12){
    greeting = 'Good Morning';
}
else if (time < 20){
    greeting = 'Good Afternoon'; 
}
else if (time >= 20 && time < 24){
    greeting = 'Good evening';
}
else if (time > 24){
    greeting = 'Usted ingreso una hora equivocada';
}
console.log(greeting);