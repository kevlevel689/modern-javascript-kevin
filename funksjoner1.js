// oppgave 1
/* 
Funksjoner gjør det lettere å bruke en blokk med kode om igjen, uten å trenge å skrive
alt på nytt.
*/

// oppgave 2

// a)
function funksjonenmin() //gir navn til funksjonen
{
    console.log("hello world"); //skriver hva funskjonen gjør, som er å skrive hello world når kalt
}

//  b)
/* et funksjonskall er når du kaller på funksjonen ved å bare skrive navnet til funksjonen,
og så parantesene med parameterne hvis det er noen. det er hvorfor det er fortere å lage funksjoner.*/

// c)
funksjonenmin();

// oppgave 3
/* I parentesen etter funksjon definisjonen, er det parametere. 
De blir brukt som verdier som kan senere bli forandret, når man bruker argumenter.
Argumenter er verdien du gir til variablene (parameteren), som du kan bruke når du kaller en funksjon
med parameter. Det er sammenhengen
Forskjellen er at parametere definerer, og argument initialiserer. */

// oppgave 4
function printLetters(hello)
{
	console.log(hello)
}

printLetters("Min parameter er");

printLetters("random argument")

// oppgave 5
function toParametere(param1, param2)
{
    console.log(`Jeg fikk to parametere; ${param1} og ${param2}`)
}
toParametere("a", "b");