/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
/**
 * This functions returs a word that start with a specific letter, pushed inside an array
 * @param {array} name_list 
 * @param {string} filter 
 * @returns {string} word
 */
function only_with_this_initial(name_list, filter){
    let word_filtered = []

    for(i = 0; i < name_list.length; i++){
        const letter = name_list[i].charAt(0)
        if(letter === filter){
            word_filtered.push(name_list[i])
        }
    }
    return word_filtered
}


// Invoca la funzione qui e stampa il risultato in console
console.log(only_with_this_initial(names, "A"));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
const only_this_word = (name_list, filter) => {
    let word_filtered = []

    for(i = 0; i < name_list.length; i++){
        const letter = name_list[i].charAt(0)
        if(letter === filter){
            word_filtered.push(name_list[i])
        }
    }
    return word_filtered
}
console.log(only_this_word(names, "A"));