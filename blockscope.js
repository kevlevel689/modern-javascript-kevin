// oppgave 1

{

const i = 10;

console.log(`i = ${i}`);

}

/* her blir utskriften "i = 10" fordi i er 10, og når du skriver dollar tegn scope bak variabelen,
 så sier den verdien. */


// oppgave 2

const x = 10;

{

console.log(`i = ${x}`);

}

/* her blir utskriften "i = 10" for når vi bruker dollar tegn scope på variabelen x, så forteller
den verdien av x. */


// oppgave 3


{

const y = 10;

}

console.log(`y = ${y}`);


/* her blir utskriften en error, fordi scopen prøvde å skrive ut en variabel som ikke hadde blitt deklarert enda, og
den kan ikke hoiste slik funksjoner gjør.*/


// oppgave 4

let z;

{

z = 10;

//utskrift a)

console.log(`z = ${z}`); // = 10

}

//utskrift b)

console.log(`z = ${z}`) // = 10

// z blir utenfor scopet så derfor kan man bruke z utenfor scope også.


// oppgave 5

let a;

fubar();

console.log(`a = ${a}`);


function fubar(){

a = 2;

}

/* først vil den deklarere a, og så vil den kalle funksjonen til å sette verdien av a.
Etter det vil console log skrive at a = 2. */


// oppgave 6

let b = 10;


add(b, 5);

console.log(b);


function add(c, d){

let result = c + d;

console.log(result);

}

// Det gir 2 utskrifter, som er 15 og 10.
/* Først deklarer og initaliserer vi b med verdien 10.
og så kaller vi funksjonen add, som gjør at to argumenter kan settes in.
etter det så deklarer og initialiserer result med summen av parameterene c + d; som i dette tilfelle blir 10 + 5 = 15.
Og så etter det, så skriver den hva verdien b er initialisert med, som er 10. */

