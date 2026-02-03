// oppgave 1
// a)
function helloWorld() {
    console.log("Hello World");
}

function imAlive() {
    console.log("I'm alive!");
}

function beingGreen() {
    console.log("Its not easy being green!");
}

function executor() {
    helloWorld();
    imAlive();
    beingGreen();
}


executor();

// b)
const fransk = (f) => {
    f();
};

fransk(() => console.log('Amors piler treffer alltid i hjertet!'));
fransk(() => console.log("Cri’ Cri’ d’amore!"));
fransk(() => console.log("Parles vous francois?"));


// oppgave 2

// Tre funksjoner med 1 parameter (name)
function sayHello(name) {
    console.log(`Hello ${name}`);
}

function loggedIn(name) {
    console.log(`${name} just logged in`);
}

function loggedOut(name) {
    console.log(`${name} just logged out`);
}

// Executor: tar en string (name) og en callback-funksjon
function executor(name, callback) {
    callback(name);
}

// Kall på de tre funksjonene i rekkefølge via executor
executor("Kevin", sayHello);
executor("Kevin", loggedIn);
executor("Kevin", loggedOut);

// oppgave 3

// oppgave 4

// oppgave 5