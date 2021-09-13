'use strict';
//llamamos a los elementos de HTML con los que vamos a trabajar:
const checkButton = document.querySelector ('.js_button');
const userNumber = document.querySelector ('.js_userNumber');
const clueParagraph = document.querySelector ('.js_clue');
const counterParagraph = document.querySelector ('.js_counter');
const randomNumber = getRandomNumber( 100) ;
console.log (randomNumber);
const mainForm = document.querySelector ('.js_mainForm');

//5. Creamos un evento para eliminar el comportamiento por defecto del formulario:
/*function handlePreventDefault (ev){
    debugger;
    if(ev.keyCode === 13){
        ev.preventDefault ();
        return false;
    }
    
}
userNumber.addEventListener ('key', handlePreventDefault);
*/
function cancelSubmit(ev) {
    ev.preventDefault();
}
mainForm.addEventListener('submit', cancelSubmit)

//3.a Definimos la función random:
function getRandomNumber( max ) {
    return Math.ceil (Math.random()*max);
}

//3.b Definimos otra función que contendrá clue.innerHTML:
function addContentClue (text){
    clueParagraph.innerHTML = text;
}

//3.Definimos updateCheck:
function updateCheck(){

    const inputValue = parseInt (userNumber.value);
    if (inputValue <1 || inputValue>100){
        text  ('El ńumero ha de estar entre 1 y 100');
    }else if(inputValue === randomNumber){
        text ('Has ganado campeona!!!');
    }else if (inputValue>randomNumber){
        text ('Demasiado Alto');
    }else if (inputValue < randomNumber){
        text ('Demasiado Bajo');
    }
}
//4.Definimos updateAttemps: 
let cont = 0;
function updateAttemps() {
    cont++;
    counterParagraph.innerHTML = `Número de intentos: ${cont}`;
}
//2.Creamos la función manejadora del evento:
function handleUpdateCheck(){
    updateCheck ();
    updateAttemps (); 
}
//1.Creamos el evento:
checkButton.addEventListener('click', handleUpdateCheck);