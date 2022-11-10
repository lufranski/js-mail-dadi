// Gioco dei dadi

// Variables
const userNumber = Math.floor(Math.random() * 6) + 1;
const pcNumber = Math.floor(Math.random() * 6) + 1;

console.log("Il numero dell'utente è: " , userNumber);
console.log("Il numero del pc è: " , pcNumber);


// Generare un numero random da 1 a 6 per l'utente

// Generare un numero random da 1 a 6 per il pc

// Stabilire il vincitore in base al risultato
if (userNumber < pcNumber) {

    console.log('Gameover, honey!');

} else if (userNumber > pcNumber) {

    console.log('A knockout!');

} else {

    console.log("It's a draw!");

}
