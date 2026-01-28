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

// oppgave 6
function calculateTax(inntekt) {
    if (inntekt < 50000) {
        return inntekt * 0,1;
    } else if (inntekt >= 50000 && inntekt <= 100000) {
        return inntekt * 0.2
    } else {
        return inntekt * 0.3
    }
}

// oppgave 7
function isValidEmail(email) {
    return email.includes("@") && email.includes(".");
}

console.log(isValidEmail("test@example.com")); // true

console.log(isValidEmail("testexample.com")); // false

// oppgave 8
function findLongestString(a, b) {
    if (a.length > b.length) {
        return a;
    } else if (b.length > a.length) {
        return b;
    } else {
        return "Strengene er like lange.";
    }
}

// oppgave 9
function calculateDiscount(pris, tilbudsprosent) {
    const tilbud = pris * (tilbudsprosent / 100);
    return pris - tilbud;
}

console.log(calculateDiscount(100, 10)); // 90

console.log(calculateDiscount(200, 25)); // 150

// oppgave 10
function isStrongPassword(passord) {
    if (passord.length < 8) return false;

    if (passord.includes("0") || passord.includes("1") || passord.includes("2") ||
        passord.includes("3") || passord.includes("4") || passord.includes("5") ||
        passord.includes("6") || passord.includes("7") || passord.includes("8") ||
        passord.includes("9")) {
        return true;
    }
    return false;
}

console.log(isStrongPassword("abc123")); // false

console.log(isStrongPassword("password1")); // true

