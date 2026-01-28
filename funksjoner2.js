// oppgave 1
/*
Parametere er en måte å få verdier INN i en funksjon
Return løfter verdien UT av funksjonen, fordi variablene inni funksjonen bare lever
i funksjonens scope. Selve variabelen kan ikke tas med ut, men verdien kan returneres.
*/

// oppgave 2
function addnummere(a, b){
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
}

const nummere = addnummere(1, 2);

const bokstaver = addnummere('1', '2');

console.log(nummere);

console.log(bokstaver);

// oppgave 3
function sjekktekst(a, b){
    if (typeof a === "string" && typeof b === "string") {
    console.log(`${a} og ${b}`);
  } else {
    console.error("Jeg skriver bare ut tekst!");
  }
}

// oppgave 4
function sjekknumberogoperator(a, b, op) {
  const aertall = typeof a === "number";
  const bertall = typeof b === "number";

  const operbrukbar = (op === "+" || op === "-" || op === "*" || op === "/");
  
  if (aertall && bertall && operbrukbar) {
    let resultat;
    if (op === "+") {
      resultat = a + b;
    } else if (op === "-") {
      resultat = a - b;
    } else if (op === "*") {
      resultat = a * b;
    } else {
      resultat = a / b;
    }
    console.log(`${a} ${op} ${b} = ${resultat}`);
    return resultat;
  }

  if (!operbrukbar) {
    console.error(`${op} er ikke en gyldig operasjon. Programmet terminerer!`);
    return;
  }

  if (!aertall && !bertall) {
    console.error(`${a} og ${b} er ikke tall! Programmet terminerer!`);
    return;
  }

  if (!aertall) {
    console.error(`${a} er ikke et tall! Kan ikke utføre ${op}. Programmet terminerer!`);
    return;
  }
  if (!bertall) {
    console.error(`${b} er ikke et tall! Kan ikke utføre ${op}. Programmet terminerer!`);
    return;
  }
}

/* uten mening commited og pushet denne til main, så jeg må skrive denne kommentaren slik
den oppdager at noe er nytt */