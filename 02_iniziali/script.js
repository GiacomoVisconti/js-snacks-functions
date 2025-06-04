/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initials(name_list){
    let first_letters = []

    for(i = 0; i < name_list.length; i++){
        element = name_list[i]
        first_letters.push(element.charAt(0))
    }
    return first_letters
}


// Invoca la funzione qui e stampa il risultato in console 
console.log(initials(names))


//Risultato atteso: ["A", "L", "M", "A", "G", "A"] 

//Bonus :3
const initial_name = name_list => {
    let first_letters = []
    for(i = 0; i < name_list.length; i++){
        element = name_list[i]
        first_letters.push(element.charAt(0))
    }
    return first_letters
}

console.log(initial_name(names))
