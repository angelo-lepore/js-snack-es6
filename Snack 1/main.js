/* Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore. */

// creo un array con all'interno le bici con le proprietà: nome e peso
const bici_corsa = [
  { nome: "Specialized", peso: 6.8 },
  { nome: "Trek", peso: 6.7 },
  { nome: "Pinarello", peso: 6.9 },
  { nome: "Cannondale", peso: 6.8 },
  { nome: "Giant", peso: 6.5 },
  { nome: "Canyon", peso: 6.3 },
  { nome: "Scott", peso: 6.9 },
];

console.log(bici_corsa);

// imposto la prima bici come la più leggera
let bici_leggera = bici_corsa[0];

// con un ciclo for confronto il peso delle altre bici per trovare la più leggera
for (let i = 1; i < bici_corsa.length; i++) {
  if (bici_corsa[i].peso < bici_leggera.peso) {
    bici_leggera = bici_corsa[i];
  }
}

// stampo in console la bici con il peso minore
console.log("La bici più leggera è: ");
console.log(bici_leggera);
