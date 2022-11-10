// Gioco dei dadi

// Variables
const userNumber = document.getElementById('user-number');
const pcNumber = document.getElementById('pc-number');
const whoWins = document.getElementById('result');

// Generare un numero random da 1 a 6 per l'utente
const userRandomNumber = Math.floor(Math.random() * 6) + 1;

userNumber.innerHTML = userRandomNumber;

console.log("Il numero dell'utente è: " , userRandomNumber);

// Generare un numero random da 1 a 6 per il pc
const pcRandomNumber = Math.floor(Math.random() * 6) + 1;

pcNumber.innerHTML = pcRandomNumber;

console.log("Il numero del pc è: " , pcRandomNumber);

// Stabilire il vincitore in base al risultato
if (userRandomNumber < pcRandomNumber) { //Vince il PC

    // console.log('Gameover, honey!');
    whoWins.innerHTML = 'Gameover, honey!';


} else if (userRandomNumber > pcRandomNumber) { //Vince l'utente

    // console.log('A knockout!');
    whoWins.innerHTML = 'A Knockout!';


} else { //Pareggio

    // console.log("It's a draw!");
    whoWins.innerHTML = "It's a draw!";

}
