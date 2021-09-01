'use strict';
//llamamos a los elementos de HTML con los que vamos a trabajar:
const check = document.querySelector ('.js_button');
const userNumber = document.querySelector ('.js_userNumber');
const clue = document.querySelector ('.js_clue');
const counter = document.querySelector ('.js_counter');
const randomNumber = getRandomNumber( 100) ;
console.log (randomNumber);

//3.a Definimos la función random:
function getRandomNumber( max ) {
    return Math.ceil (Math.random()*max);
}

//3.Definimos updateCheck:
function updateCheck(){
    if (userNumber.value <1 || userNumber.value>100){
        clue.innerHTML = 'El ńumero ha de estar entre 1 y 100';
    }else if(parseInt(userNumber.value) === randomNumber){
        clue.innerHTML = 'Has ganado campeona!!!';
    }else if (userNumber.value>randomNumber){
        clue.innerHTML = 'Demasiado Alto';
    }else if (userNumber.value < randomNumber){
        clue.innerHTML = 'Demasiado Bajo';
    }
}
//4.Definimos updateAttemps: 
let cont = 0;
function updateAttemps() {
    cont++;
    counter.innerHTML = `Número de intentos: ${cont}`;
}
//2.Creamos la función manejadora del evento:
function handleUpdateCheck(){
    updateCheck ();
    updateAttemps (); 
}
//1.Creamos el evento:
check.addEventListener('click', handleUpdateCheck);