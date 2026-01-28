// oppgave 1
// a)
/* en Array er en liste der vi kan lagre forskjellige ting samtidig.
Det gjør slik at vi ikke trenger å lage mange forskjellige variabler, og holder koden ryddigere. */

// b)
/* I andre programmeringsspråk så er reglene for arrays strengere, med at de trenger
spesifike typer data og størrelse, mens på Javascript kan det inneholde forskjellige
typer data, med flere metoder for å forandre det slik man vil siden det regnes som en Object. */

// oppgave 2
// a)
let minArray = [];

// b)
let ender = [
    "Donald Duck",
    "Dolly Duck",
    "Ole",
    "Dole",
    "Doffen",
    "Onkel Skrue",
    "Bestemor Duck",
    "Guffen Gås",
    "Anton Anton",
    "Fetter Anton"
];

// c)
console.log(ender[2]);
console.log(ender[5]);
console.log(ender[8]);


// oppgave 3
// a)
// "Index" er plassenummeret til elementet  i arrayen.

// b)
// Den første indeksen i en array er alltid 0, fordi det teller fra 0 oppover.

// c)
// Den siste indeksen er alltid lengden av arrayen minus 1 pga index teller fra 0, ikke 1.

// d)
/* Lengden på en array betyr hvor mange elementer det er i arrayen.
array.length teller ikke på indekser, den teller antall ting som ligger i arrayen. */

// e) 
/* Som sagt, sammenhengen er at lengden viser hvor mange elementer arrayen har, 
mens siste indeks alltid er en mindre enn lengden, fordi array indekser starter på 0. */

// oppgave 4
// a)
// Da står det at det er en "Object".

// b) && c)
function sjekkerArray(argument) {
    if (Array.isArray(argument)) {
        console.log("Argumentet er en array")
    } else {
        console.log("Argumentet er ikke en array")
    }
}

