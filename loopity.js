// oppgave 1
/* En for-løkke er en løkke som brukes når du vet hvor mange ganger du vil at det skal loope.
Den starter på en spesifikk verdi, looper så lenge kravet er sann og endrer telleren for hver runde.
eksempel: */
for (let skritt = 0; skritt < 3; skritt++) {
  console.log("går et skritt.");
}

/* En do...while-løkke er en løkke som sjekker om vilkåret er sann etter koden.
Den kjører koden først, og så sjekker om den skal fortsette.
eksempel: */
let n = 1;
do {
  console.log(n);
  n++;
} while (n <= 3);


/* En while-løkke er en løkke som looper så lenge vilkåret er korrekt/sann.
Den sjekker betingelsen, sjekker om det stemmer, og så fortsetter til det er false.
eksempel: */
let x = 1;
while (x <= 3) {
  console.log(x);
  x++;
}

/* En for...in løkke er en løkke som går gjennom nøkkelene og verdiene til nøkkelene i et objekt.
Den itererer navnene (nøkkelene) og dems verdier inni objektet.
eksempel: */
let person = {navn: "Kevin", alder: 17};

for (const key in person) {
  console.log(key, person[key]);
}


/* En for...of løkke er en løkke som går gjennom verdiene i et liste.
Den itererer verdiene av itererbare objekter.
eksempel: */
let tiere = [10, 20, 30];

for (const verdi of tiere) {
  console.log(verdi);
}


// oppgave 2
const navneliste = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda',
'Nina', 'Tine', 'Henrik', 'Agnethe'];

for (const navn of navneliste){
  console.log(`${navn} er ${navn.length} bokstaver.`)

// Jeg valgte for...of løkke fordi iterer verdier i en liste (array), som her er navnene.

}
// oppgave 3
const navnelisteigjen = ['Geir', 'Espen', 'Ellen', 'Erik', 'Lars', 'Gunnar', 'Oda', 'Nina', 'Tine', 'Henrik', 'Agnethe'];

const reversert = [];

for (let i = navnelisteigjen.length - 1; i >= 0; i--) {
  reversert.push(navnelisteigjen[i]);
}

console.log(reversert);

/* For løkke er best fordi jeg kan lettere modifesere det enn andre løkker,
slik at jeg kan kontrollere hvilket elementer som skal komme først. */

// oppgave 4
function reduceToOddNumber(number){

if(typeof(number) == 'number'){

  do {
    number = number / 2;
  } while (number )

}

}

// oppgave 5
// freebie, each...of (ville du at jeg skulle si for...in?) og while-løkke.