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


/* En while-løkke er en løkke som looper så lenge vilkåret er korrekt.
Den sjekker betingelsen, sjekker om det stemmer og så fortsetter til det er feil.
eksempel: */
let x = 1;
while (x <= 3) {
  console.log(x);
  x++;
}

/* En for...in løkke er en løkke som går gjennom verdiene i et objekt.
Den itererer over navnene på egenskapene.
eksempel: */
let person = {navn: "Kevin", alder: 17};

for (const key in person) {
  console.log(key, person[key]);
}

// oppgave 2

// oppgave 3

// oppgave 4

// oppgave 5