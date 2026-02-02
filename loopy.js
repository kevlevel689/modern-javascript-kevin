// oppgave 1
let guder = ["Odin", "Thor", "Loki", "Freya", "Baldur", "Frigg", "Tyr",
"Heimdall", "Hel", "Idunn", "Njord", "Skadi", "Fenrir", "Jormungandr", "Sleipnir"];

for (let i = 0; i < guder.length; i++) {
    console.log(guder[i]);
}

// oppgave 2

let tall = [2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];

let sum = 0;

for (let i = 0; i < tall.length; i++) {
    sum += tall[i];  
}

console.log(sum);

// oppgave 3

let navn = [
"Anne", "Jan", "Per", "Bjørn", "Ole", "Lars", "Inger", "Kjell", "Kari", "Thomas", "Ingrid",
"Svein", "Marit", "Knut", "Tor", "Liv", "Geir", "Martin", "Hans", "Morten","Andreas", "Erik",
"Ida", "Arne", "Maria", "Anna", "Terje", "Ann", "Eva", "Daniel", "Anders", "John", "Rune", "Odd",
"Hilde", "Nina", "Marianne", "Magnus", "Kristin", "Eli","Ola", "Siri", "Einar", "Gunnar", "Randi",
"Bente", "Johan", "Mona", "Trond", "Hege","Espen", "Siv", "Steinar", "Elin", "Kjetil", "Linda",
"Harald", "Grete", "Leif", "Anita", "Roar", "Tone", "Jon", "Camilla", "Stig", "Lene", "Arild",
"Gry", "Frode", "Ragnhild", "Pål", "Britt", "Øyvind", "Laila", "Vidar", "Ellen", "Dag", "Sissel",
"Knut", "Anne", "Per", "Inger", "Bjørn", "Kari", "Ole", "Lars", "Jan", "Marit", "Thomas", "Ingrid",
"Mohammed", "Ali", "Ahmed", "Aisha", "Fatima", "Hassan", "Sara", "Yousef", "Amira", "Omar"
];

// a)

function Arne(arr) {
  let antall = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Arne") {
      antall++;
    }
  }
  console.log(`Arne er oppført ${antall} ganger i arrayen som er ${arr.length} lang`);
}

// b)
function tellAlleNavn(arr) {
  const sett = [];

  for (let i = 0; i < arr.length; i++) {
    const navnI = arr[i];

    let allerede = false;
    for (let j = 0; j < sett.length; j++) {
      if (sett[j] === navnI) {
        allerede = true;
        break;
      }
    }

    if (!allerede) {
      let antall = 0;
      for (let k = 0; k < arr.length; k++) {
        if (arr[k] === navnI) {
          antall++;
        }
      }

      console.log(`${navnI} er sett ${antall} ganger i arrayen som er ${arr.length} lang`);

      sett[sett.length] = navnI;
    }
  }
}
``
