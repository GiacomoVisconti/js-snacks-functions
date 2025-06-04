/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
/**
 * This function return a counter of the vowels that compose the word in input, with the list of vowels
 * @param {string} string 
 */
function only_vowels(string){
    const vowels = ["a", "e", "i", "o", "u"]
    let vowels_word = []
    for(let i = 0; i <= string.length; i++){
        const word_letter = string.charAt(i)
        for (let i = 0; i <= vowels.length; i++) {
            const vowels_letter = vowels[i]
            if(word_letter == vowels_letter){
                vowels_word.push(word_letter)
            }
        }
    }

    console.log(vowels_word.length, vowels_word)
}

// Invoca la funzione qui e stampa il risultato in console
only_vowels(word)



//Risultato atteso se si passa 'javascript': 3 (a, a, i)
