// oppgave 1
// kevin holmsen - Oppgavesett 3c Operatorer og datatyper

console.log("kevin holmsen - Oppgavesett 3c Operatorer og datatyper");

// oppgave 2 – addisjon med tall

console.log(5 + 5); // her summer den aretmatiske operatøren (+) operandene, som blir 10.

console.log(10 + 20); // her summer den aretmatiske operatøren (+) operandene, som blir 20.

// oppgave 3 – addisjon med tekst

console.log("5" + "5");

console.log("Hei " + "verden");

// den kan ikke summe opp strings (""), så den heller limer sammen begge strengene.
// det er hva string concatenation er.

// oppgave 4 – bland tekst og tall

console.log("5" + 5);

console.log(5 + "5");

console.log("Tall: " + 5 + 5);

console.log("Sum: " + (5 + 5));

// når begge leddene i loggen er nummer, så kan man summe det opp.
// når en av leddene i loggen er en streng, så blir resten en streng konkatenasjon.
/* tallene blir summet opp i siste log med parantes, fordi parantesen gjør slik at nummerene
er i sin egen kontainer, og ikke blir effektert av strengen, ergo ingen string concatenation. */

// oppgave 5 – subtraksjon, multiplikasjon og divisjon

console.log("10" - "5");

console.log("10" * "2");

console.log("10" / "2");

console.log("10" - 3);

console.log("10" * 3);

console.log("10" / 3);

// fordi javascript prøver å rette opp i det den tror er feil, så sier den at det begge er nummere.
// dette fører til at den regner ut regnestykkene.
// men hvis du bruker + operatøren, så ser den på det som string concatenation.
// det gir mening, siden du kan ikke virkelig f.eks dividere ett ord fra en annen.

// oppgave 6 – ugyldige regnestykker

console.log("Hei" - "der");

console.log("Hei" * 3);

console.log("Hei" / 2);

/* det går ikke ann å bruke de andre aretmatiske operatørene, utenom (+).
fordi det går ikke ann å bruke aretmatiske operatører til å 
subtrahere, dividere eller multiplisere ord med nummere, eller ord sammen.
*/
// derfor blir alle stykkene "NaN" (Not a Number)

// oppgave 7 – bruk av += på tekst og tall

let a = 10;

a += 5;

console.log(a);


let b = "Hei";

b += " verden";

console.log(b);

// variabelen, når det er et tall, blir summet opp.
// variabelen som er en tekst, blir limet sammen, som string concatenation.

// oppgave 8 – utforsk selv

console.log("13" + 9); // det blir 139, pga string concatenation.

console.log("10" - 5); // det blir 5, fordi den gjør slik at begge er nummere.

console.log("6" * "7"); // dette blir 42 , fordi samme skjer, og ser på begge som nummere.

console.log("40" / "41"); // = 0.975609756097561 (tror ikke jeg trenger å forklare igjen)

console.log("heisann" - 2); // NaN. det går bare ann med addisjon, fordi det tar begge ordene sammen.