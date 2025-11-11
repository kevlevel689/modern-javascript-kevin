// oppgave 1
console.log(typeof 42) // number

console.log(typeof "Hei") // string

console.log(typeof true) // boolean

console.log(typeof undefined) // undefined

console.log(typeof null) // object

console.log(typeof Symbol("id")) // symbol

console.log(typeof 12345678901234567890n) // bigint

console.log(typeof {navn: "Ola", alder: 16}) // object

// oppgave 2

// a)
let i;
console.log(typeof i);

/* vi får undefined.
dette er fordi vi har deklarert variabelen, men ikke initialisert.*/

// b)
i = 42;

console.log(typeof i);

/* vi får number.
dette er fordi variabelen har nå blitt initialisert, og vi har fått vite at det er en nummer.*/

// c)
i = "Hello, World!";

console.log(typeof i);

/* vi får string.
dette er fordi variabelen har blitt initialisert som tekst med "" rundt seg, og dermed er en string.*/

// d)
i = true;

console.log(typeof i);

/* vi får boolean.
dette er fordi variabelen er nå initialisert med en boolsk verdi, som er enten true eller false.*/
