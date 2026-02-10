// oppgave 1
const elev1 = {
  fornavn: "Anne",
  etternavn: "Hansen",
  alder: 17
};

const elev2 = {
  fornavn: "Jonas",
  etternavn: "Nilsen",
  alder: 18
};

const elev3 = {
  fornavn: "Ida",
  etternavn: "Berg",
  alder: 16
};

const elev4 = {
  fornavn: "Martin",
  etternavn: "Olsen",
  alder: 17
};

// oppgave 2
function skrivElev(elev) {
  console.log(`Navn: ${elev.fornavn} Etternavn: ${elev.etternavn} Alder: ${elev.alder}`);
}

skrivElev(elev1);
skrivElev(elev2);
skrivElev(elev3);
skrivElev(elev4);


// oppgave 3
function carFactory(antallSeter, hestekrefter, modell, type) {
  return {
    antallSeter,
    hestekrefter,
    modell,
    type
  };
}

const bil1 = carFactory(5, 150, "Focus", "sedan");
const bil2 = carFactory(7, 200, "XC90", "SUV");
const bil3 = carFactory(5, 110, "Golf", "stasjonsvogn");
const bil4 = carFactory(2, 450, "911", "coupe");

const biler = [bil1, bil2, bil3, bil4];
console.log(biler);

// oppgave 4
let globalSerienummerTeller = 1000;

function carFactoryMedSN(antallSeter, hestekrefter, modell, type) {
  const car = {
    antallSeter,
    hestekrefter,
    modell,
    type,
    serienummer: null,

    genererSerienummer() {
      globalSerienummerTeller += 1;
      return `CAR-${globalSerienummerTeller}`;
    }
  };

  car.serienummer = car.genererSerienummer();

  return car;
}

const bilA = carFactoryMedSN(5, 150, "Focus", "sedan");
const bilB = carFactoryMedSN(7, 200, "XC90", "SUV");
console.log(bilA, bilB);


// oppgave 5
function makeCarFactoryWithBrand(brand) {
    return function createCar(model, year, color) {

        const info = () => `${brand} ${model} (${year}) – ${color}`;


        const repaint = (newColor) =>
            createCar(model, year, newColor); 

        return { brand, model, year, color, info, repaint };
    };
}


const fordFactory = makeCarFactoryWithBrand("Ford");
const mustang = fordFactory("Mustang", 1969, "red");

console.log(mustang.info());           
const yellowMustang = mustang.repaint("yellow");
console.log(yellowMustang.info());     

