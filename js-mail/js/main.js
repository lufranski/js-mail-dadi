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
        let puoiEntrare = false;
        
        // Ciclo
        for(let i = 0; i < invitati.length; i++) {
            
            
            // console.log(userMail , invitati[i]);
            if (userMail === invitati[i]) { // La mail è in lista
                
                puoiEntrare = true;
                

            }

        }

        if (puoiEntrare == true) {
            console.log('puoi entrare');
            wrapper.innerHTML = 'puoi entrare';
        } else {
            console.log('non puoi entrare');
            wrapper.innerHTML = 'non puoi entrare';
        }
        
    }

);

