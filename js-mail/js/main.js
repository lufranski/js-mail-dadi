// Lista invitati

// Fissare la lista delle mail degli invitati
const invitati = ["marcogiordano@gmail.com" , "joebastianich@gmail.com" , "carlocracco@gmail.com" , "brunobarbieri@gmail.com" , "antoninocannavacciuolo@gmail.com"];

console.log('Lista invitati: ' , invitati);

// Chiedere all'utente di inserire la propria mail
const userMail = prompt("Inserisci la tua mail per verificare che sia nella lista invitati ");

console.log('Mail utente: ' , userMail);
// Controllare che sia nella lista
if (userMail === invitati[0] || userMail === invitati[1] || userMail === invitati[2] || userMail === invitati[3] || userMail === invitati[4]) { //La mail è in lista

    console.log('Sei in lista');

} else {
    console.log('Mi dispiace, vattenn!');
}

// Output