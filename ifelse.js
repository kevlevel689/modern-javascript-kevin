// oppgave 1
function sjekkerstring(parameter){
    if (typeof parameter === "string") {
        console.log("STRING STRING STRING!");
} else {
    console.log("Dette er ikke en String i det hele tatt.");
    }
}

// a)
sjekkerstring(1); // Sier at det ikke er en String, siden det er et Number.

// b)
sjekkerstring('1'); /* Sier at det er en String, siden det apostrofer rundt nummeret som gjør
nummeret om til en String.*/

// c)
sjekkerstring('Navn'); // Sier at det er en String, fordi det er streng av tegn.

// oppgave 2
function sjekksammetype(a, b){
   if (typeof a === typeof b) {
      console.log("Variablene du brukte er av samme type!");
  } else {
    console.log("Variablene du brukte er IKKE av samme type!");
  }
}

// a)
sjekksammetype('en', 1); // 'en' er en string, 1 er et number = IKKE samme type!

// b)
sjekksammetype(1, 1); // Begge er Number = samme type.

// c)
sjekksammetype(2, 3); // Begge er Number = samme type.

// d)
sjekksammetype('2', '3'); // Begge er String = samme type.


// e)
sjekksammetype(2, '3'); // Number og String = IKKE samme type!

// oppgave 3
// a)
let x = 5;

function sjekkernumber(en){
    if (typeof en === "number") {
        console.log("Dette er et tall!");
} else {
    console.log("Test failed");
    }
}

sjekkernumber(x);

// b)
{

  let a = 2;
  let b = "3";


  if (typeof a === "number" && typeof b === "number") {
    if (a > 5 || b > 5) {
      let verdisomerstor;
      if (a > 5) {
        verdisomerstor = a;
      } else {
        verdisomerstor = b;
      }
      console.log("Jeg fant en variabel som var større enn fem! Den hadde verdien: " + verdisomerstor);
    } else {
      console.log("Begge variablene er number, men ingen av dem er større enn 5.");
    }
  } else {
    console.log(
      "Variabelene er ikke av typen number, de er av typen: a=" + (typeof a) + ", b=" + (typeof b)
    )
  }
}
