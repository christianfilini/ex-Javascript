const annoDiNascita = 1993;
const annoCorrente = 2026;
const laMiaEta = annoCorrente - annoDiNascita;

const msg = " Io sono nato nel " + annoDiNascita + " ,quindi ho " + laMiaEta + " anni ";

const nome = "Christian";
const cognome = "Filini";
const nomeECognome = nome + cognome;

const msg2 = " Io mi chiamo " + nome + cognome + " e ho " + laMiaEta + " anni ";

console.log(msg);
console.log(msg2);

const a = 8;
const b = 12;

const somma = a + b;
const differenza = a - b;
const prodotto = a * b;
const division = a / b;
const resto = a % b;

console.log(somma)
console.log(differenza)
console.log(prodotto)
console.log(division)
console.log(resto)

let newTitle = "Hello JavaScript";
newTitle = "Ciao Javascript"

document.getElementById("title").innerHTML = newTitle;
