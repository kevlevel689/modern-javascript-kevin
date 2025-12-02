// oppgave 1 – hva blir utskriften

// a)
console.log(5 > 3); // utskrifen blir true, fordi 5 er større enn 3.

// b)
console.log(5 < 3); // utskrifen blir false, fordi 3 er ikke større enn 5.

// c)
console.log(10 > 10); // utskrifen blir false, fordi 10 er ikke større enn 10.

// d)
console.log(10 >= 10); // utskrifen blir true, fordi 10 er ikke større, men er lik.

// e)
console.log(8 <= 12); // utskrifen blir true, fordi 12 er ikke lik, men er større.

// oppgave 2 – hva blir utskriften

// a)
console.log(4 >= 5); // utskrifen blir false, fordi 4 er ikke større, eller er lik 5.

// b)
console.log(7 <= 7); // utskriften blir true, fordi 7 er ikke større, men er lik 7.

// c)
console.log(9 <= 4); // utskriften blir false, ford 5 er ikke større, eller er lik 9.

// d)
console.log(6 > 2); // utskriften blir true, fordi 6 er større enn 2.

// e)
// "<" betyr at nummeret til høyre har høyere verdi enn den til venstre, hvis det er true.
// ">" betyr at nummeret til venstre har høyere verdi enn den til høyre, hvis det er true.
// "<=" betyr at nummeret til høyre kan enten være større, eller ha lik verdi til å være true.
// ">=" betyr at nummeret til venstre kan enten være større, eller ha lik verdi til å være true.

// oppgave 3 – likhet og ulikhet

// a)
console.log(5 == 5); // utskriften blir true.

// b)
console.log(5 == '5'); // utskriften blir true.

// c)
console.log(5 === '5'); // utskriften blir false.

// d)
console.log(5 != 4); // utskriften blir true.

// e)
console.log(5 !== '5'); // utskriften blir true.

// f)

// (==) sjekker om det er lik verdi på begge sider.

/* (===) sjekker om det er lik verdi, og lik datatype på hver side.
hvis en av dem er false, så blir hele sammenhengen false.

// (!=) sjekker om det du skrev ikke har samme verdi, og hvis det har det, så er det false.

/* (!==) sjekker om du skrev ikke har samme verdi eller datatype.
hvis en av dem er false, så blir hele sammenhengen true. */


// oppgave 4 - – kombinasjon med && (og)

// a)
console.log(5 > 3 && 10 > 5) // utskriften blir true.

// b)
console.log(5 > 3 && 10 < 5) // utskriften blir false.

// c)
console.log(7 >= 7 && 2 < 5) // utskriften blir true.

// d)
console.log(4 < 2 && 3 > 1) // utskriften blir false.

// e)
// Hva må være sant for at et uttrykk med && skal gi true?

// For å gjøre et uttrykk med && true, så må begge sider være true.
// Hvis en side er false, så er ikke begge true, og dermed blir uttrykkert false.


// oppgave 5 – kombinasjon med || (eller)

// a)
console.log(5 > 3 || 10 > 5) // utskriften blir true.

// b)
console.log(5 > 3 || 10 < 5) // utskriften blir true.

// c)
console.log(7 < 7 || 2 < 1) // utskriften blir false.

// d)
console.log(4 < 2 || 3 > 1) // utskriften blir false.

// e)
// Hva holder for at et uttrykk med || skal gi true?

// Det eneste man trenger er at en av sidene må være true, for at utrykket skal være true.
// Hvis begge sider er false, så er uttrykket false.


// oppgave 6 – blandede uttrykk

// a)
console.log(5 > 3 && 10 > 5 || 2 === 2) // utskriften blir true.

// b)
console.log(4 < 2 && 3 > 1 || 10 === 10) // utskriften blir true.

// c)
console.log(5 === 5 && 3 > 10 || 8 < 12) // utskriften blir true.

// d)
// Forklar hva du tror skjer først – og hvorfor parenteser kan være nyttige i slike uttrykk.

/* siden && er viktigst, så regner vi det  første delen av det utrykket først,
til å se om && er false eller true, og så ser på ||, som forteller oss
om hele utrykket er false eller true, basert på det det står.

/* parenteser kan hjelpe koden bli mer forståelig, enn at man må huske 
regnerekkefølgen selv. f.eks:
console.log((5 > 3 && 10 > 5) || 2 === 2);
da ser vi at vi må regne ut && først, istedenfor å se på hele tingen. */