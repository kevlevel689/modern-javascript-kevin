// oppgave 1
function convertToCelsius(f) {
    return (f - 32) * 5/9;
}

// oppgave 2
function calculateAge(a) {
    return 2026 - a;
}

// oppgave 3
function calculate(a, b, op) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  }
}

console.log(calculate(5, 3, "+")); // 2
console.log(calculate(5, 3, "-")); // 3

// oppgave 4
function isEven(a){
    return Number.isInteger(a / 2);
}

// oppgave 5
function findMax(a, b){
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        console.log("Begge har lik verdi.");
        return a
    }
}

