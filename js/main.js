'use strict';
//llamamos a los elementos de HTML con los que vamos a trabajar:
const check = document.querySelector ('.js_button');
const userNumber = document.querySelector ('.js_userNumber');
const clue = document.querySelector ('.js_clue');
const counter = document.querySelector ('.js_counter');

//2.creamos la función manejadora del evento:
function handleUpdateCheck(){
    updateCheck ();
    updateAttemps (); 
}
//1.creamos el evento:
check.addEventListener('click', handleUpdateCheck);