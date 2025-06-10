/* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti fatti” e “falli subiti”. Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// creo un array con all'interno le squadre di calcio con le proprietà settate come richiesto
const SerieA = [
  { nome: "Inter", punti_fatti: 0, falli_subiti: 0 },
  { nome: "Roma", punti_fatti: 0, falli_subiti: 0 },
  { nome: "Fiorentina", punti_fatti: 0, falli_subiti: 0 },
  { nome: "Atalanta", punti_fatti: 0, falli_subiti: 0 },
  { nome: "Torino", punti_fatti: 0, falli_subiti: 0 },
  { nome: "Genoa", punti_fatti: 0, falli_subiti: 0 },
  { nome: "Cagliari", punti_fatti: 0, falli_subiti: 0 },
];

console.log(SerieA);

//  generare un numero casuale da assegnare alla proprietà punti fatti e falli subiti
function getRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// assegnare il numero a punti fatti e falli subiti
SerieA.forEach((team) => {
  team.punti_fatti = getRandomNumbers(18, 82);
  team.falli_subiti = getRandomNumbers(352, 604);
});

console.log(SerieA);

// creo un array vuota
const squadre_falli = [];

// con ciclo for aggiungo nomi e falli subiti nella nuova array
for (let i = 0; i < SerieA.length; i++) {
  squadre_falli.push({
    nome: SerieA[i].nome,
    falli_subiti: SerieA[i].falli_subiti,
  });
}

console.log(squadre_falli);
