/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
function saluta(name){
    console.log(`Ciao ${name}`);
    
}

// Invoca la funzione qui e stampa il risultato in console
saluta(userName)

//Risultato atteso se si passa 'Mario': // ciao Mario


//Bonus con arrow function
const hello_user = name => console.log(`Ciao ${name}`);
hello_user(userName)
