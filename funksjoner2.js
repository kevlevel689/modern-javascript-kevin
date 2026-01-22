// oppgave 1
/*1. Man kan si at Return løfter verdien UT av funksjonen, fordi variablene inni funksjonen bare
 lever i funksjonens scope. Selve variabelen kan ikke tas med ut, men verdien kan returneres.
 2. Og i forhold til (=), kan man si at det "lagrer" det Return sendte ut av funksjonen.*/

// oppgave 2
// a)

function bar(){
    return "hello world";
}

// b)
function ekko(x) {
  return x;
}

// oppgave 3
// a)
function adder(a, b) {
  return a + b;
}

const sum = adder(2, 5);

// b)
function multiplisering(a, b){
    let svar = a * b;
    console.log(svar)
    return svar;
}

let svar = multiplisering(2, 5);
console.log(svar);


// oppgave 4
// a)
function minus(a, b, c){
  let result = a - (b + c);
  return result;
}

// b)
function minusigjen(a, b, c){
  console.log(a, b + c);
  return a - (b + c);
}


// oppgave 5
// a)
function ferdig(){
  let resultat = "jeg tror jeg forsto oppgaven";
  return resultat;
}

console.log(ferdig());
