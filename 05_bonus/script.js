/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const user_name = 'Mario';


// Dichiara la funzione qui.
function current_clock(){
    const d = new Date();
    let hour = d.getHours();
    /* let minutes = d.getMinutes();
    return hour + ":" + minutes */
    return Number(hour)
}

function is_morn_afternoon_night(hour){
    let day_part = ""

    if (hour <= 13) {
        day_part = "mattina"
    } else if (hour > 13 && hour <= 17) {
        day_part = "pomeriggio"
    } else {
        day_part = "sera"

    }
    return day_part
}

function hello_user(name, day_part){
    if (day_part == "mattina"){
        console.log(`Buongiorno ${name}`);
        
    } else if (day_part == "pomeriggio"){
        console.log(`Buon pomeriggio ${name}`);
                
    } else{
        console.log(`Buonasera ${name}`);
        
    }
}



// Invoca la funzione qui e stampa il risultato in console
const current_hours = current_clock();
const day_part = is_morn_afternoon_night(current_hours);

hello_user(user_name, day_part);



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.