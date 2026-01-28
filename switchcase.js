// oppgave 1
function selections(selectedOption) {
    if (typeof selectedOption !== "number") {
        console.log("Error")
        return;
    }

    switch (selectedOption) {
        case 1:
            console.log("Brukeren startet programmet")
            break;
        case 2:
            console.log("Brukeren vil gjøre en utskrift")
            break;
        case 3:
            console.log("Brukeren vil avslutte programmet")
            break;
        default:
            console.log("Valget er ikke et gyldig valg. Velg på nytt.");
    }
}

// oppgave 2
function calculator(op, ...verdier){
    const gyldigeoperators = ["+", "-", "*", "/"];
    const [a, b] = verdier;

    if (!gyldigeoperators.includes(op) || typeof a !== "number" || typeof b !== "number") {
        console.log("syntax error");
        return;
    }

    let result;

    switch(op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
        default:
            console.log("syntax error");
            return;
    }
    console.log(result);
    return result;
}