/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2){
    return l1 * l2
}
//esempio di utilizzo
let l1 = 2
let l2 = 3
let risultatoArea = area(l1, l2)

console.log("L'area è " + risultatoArea)



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(numero1, numero2){
    if(numero1 == numero2){
        return (numero1 + numero2) * 3
    }else{
        return numero1 + numero2
    }
}
//esempio di utilizzo
let numero1 = parseInt(prompt("Inserisci primo numero"))
let numero2 = parseInt(prompt("Inserisci secondo numero"))

let risultatoFunzione = crazySum(numero1, numero2)

console.log("Risultato = " + risultatoFunzione)



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num){
    if(num > 19){
        return (num-19) * 3
    }else{
        return num - 19
    }
}
//esempio di utilizzo
let num = parseInt(prompt("Inserisci un numero"))

let risultatoDifferenza = crazyDiff(num)
console.log("Risultato = " + risultatoDifferenza)



/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(n){
    if(n > 20 && n <= 100){
        return true;
    }else if(n == 400){
        return true;
    }else{
        return false;
    }
}
//esempio di utilizzo
let n = parseInt(prompt("Insersci un numero n"))

const feedback = boundary(n)
console.log(feedback)

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(stringa){
    if(stringa.startsWith("EPICODE")){
        return stringa;
    }else{
        return "EPICODE " + stringa
    }
}
//esempio di utilizzo
let stringa = prompt("Inserisci una stringa")
stringa1 = epify(stringa)

console.log(stringa1)



/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(number){
    if(number % 3 === 0 || number % 7 === 0){
        return true
    }else{
        return false
    }
}
//esempio di utilizzo 
let number = parseInt(prompt("Inserisci un numero positivo"))
const check = check3and7(number)

console.log(check)



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string){
    return string.split('').reverse().join('')
}
//esempio di utilizzo
const string = prompt("Inserisci una stringa")

string1 = reverseString(string)
console.log(string1)



/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */




/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string2){
    return string2.slice(1, -1)
}
//esempio di utilizzo
let string2 = prompt("Inserisci una stringa")
stringaTagliata = cutString(string2)

console.log(stringaTagliata)


/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n1){
    let arrayCasuale = []
    for(let i = 0; i < n; i++){
        let numeroCasuale = Math.floor(Math.random() * 12)
        arrayCasuale.push(numeroCasuale)
    }
    return arrayCasuale
}
//esempio di utilizzo
let n1 = parseInt(prompt("Inserisci quanti numeri vuoi inserire"))

let arrayCasuale = giveMeRandom(n1)
console.log(arrayCasuale)