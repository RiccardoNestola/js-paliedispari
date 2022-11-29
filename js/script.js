
/* 
Palidroma
Chiedere all’utente di inserire una parola:
Creare una funzione per capire se la parola inserita è palindroma
*/

const parola = prompt("inserisci una parola");

function isPalindroma(value) {
    const lunghezza = value.length;
    let isPal = true;

    for (let i = 0; i < lunghezza / 2; i++) {  

        if (value[i] !== value[lunghezza - 1 - i]) {  
            isPal = false;
        }  
        
    }  
    return isPal;

}



const result = isPalindroma(parola);  

if (result) {
    alert( 'Si, è palindroma');  
} else {
    alert( 'Non è palindroma'); 
}

console.log(result);  
























/* 
Pari e Dispari

L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

Generiamo un numero random (sempre da 1 a 5) per il computer attraverso una funzione.
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari attraverso un'altra funzione
Dichiariamo chi ha vinto.

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/



/* const pariDispari = prompt("Pari o Dispari? Inserisci un numero da 1 a 5"); */