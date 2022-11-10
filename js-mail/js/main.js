// Lista invitati

// Fissare la lista delle mail degli invitati
const invitati = ["marcogiordano@gmail.com" , "joebastianich@gmail.com" , "carlocracco@gmail.com" , "brunobarbieri@gmail.com" , "antoninocannavacciuolo@gmail.com"];

console.log('Lista invitati: ' , invitati);

// Variables
const mailField = document.querySelector('input');
const button = document.querySelector('button');
const wrapper = document.getElementById('container');

console.log(mailField , button , wrapper);

// Al click del bottone l'input inserito dall'utente viene verificato
button.addEventListener('click',

    function(){

        const userMail = mailField.value;
        
        if (userMail === invitati[0] || userMail === invitati[1] || userMail === invitati[2] || userMail === invitati[3] || userMail === invitati[4]) { //La mail è in lista

            console.log('Sei in lista'); //Output
            wrapper.innerHTML = `Grande, sei in lista bomber!`;
        
        } else { //La mail non è in lista
            
            console.log('Mi dispiace, vattenn!'); //Output
            wrapper.innerHTML = `Mi dispiace, non ti caga nessuno. Vattenn, munnezz!`;

        }

    }

);

