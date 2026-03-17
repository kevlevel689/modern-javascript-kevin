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

fransk(() => console.log("Amors piler treffer alltid i hjertet!"));
fransk(() => console.log("Cri’ Cri’ d’amore!"));
fransk(() => console.log("Parles vous francois?"));


// oppgave 2

function sayHello(name) {
    console.log(`Hello ${name}`);
}

function loggedIn(name) {
    console.log(`${name} just logged in`);
}

function loggedOut(name) {
    console.log(`${name} just logged out`);
}
function executor(name, callback) {
    callback(name);
}

executor("Kevin", sayHello);
executor("Kevin", loggedIn);
executor("Kevin", loggedOut);


// b)

// oppgave 3

// oppgave 4

// oppgave 5