/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
 I principali datatype sono:
 stringa: i valori stringa vengono racchiusi all'interno degli apici es. "Mirko"
 numero: i valori numero non hanno bisogno di apici
 booleano: gli unici due valori che possiamo assegnare sono true o false 
 Vengono utilizzati per assegnare nomi, valori o stati a dei “contenitori” 
 */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let myName = "Mirko"
console.log("Il mio nome è:", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
console.log("Il risultato è:", numero1 + numero2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let nome = "x"
nome = 12
console.log("Il valore di x è:", nome)


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

myName = "Abozzi"
console.log("Il mio cognome è:", myName)

// const indirizzo = "Via Leonardo da Vinci"
// indirizzo = "Via Roma"
// errore sul codice


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero3 = 4
console.log("Sottraszione", numero3 - nome)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

const name1 = "jhon"
const name2 = "Jhon"
console.log("I due nomi sono uguali?", name1===name2)
console.log("I due nomi sono uguali?",!(name1===name2))


const lowerCaseString = name2.toLowerCase();
console.log("Conversione nome minuscolo:", lowerCaseString);
console.log("I due nomi sono uguali?", name1===lowerCaseString)