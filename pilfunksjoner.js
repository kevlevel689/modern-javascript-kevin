// oppgave 1
const hello = () => "hello world!";
console.log(hello());

// oppgave 2
const parameteren = parameter => "bare en parameter"
console.log(parameteren());
// Du kan ta vekk parentesen rundt parameteren hvis det er bare en parameter.

// oppgave 3
const trepar = (a, b, c) => {
    console.log(a, b, c);
}
trepar("en", "to", "tre");

// oppgave 4
const restFunksjon = (...verdier) => {
    console.log(verdier);
}

restFunksjon(1, 2, 3, 4);




