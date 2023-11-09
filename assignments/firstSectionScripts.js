const country = "India";
const continent = "Asia";
let population = 140;

console.log(country, continent, population);

const isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

language = "hindi";

const halfPopulation = population / 2;
population += 1;

const populationFinland = 6;

const myCountryPopulationGreater = population > populationFinland;

console.log(myCountryPopulationGreater);

const averagePopulation = 33;

const myCountryAboveAveragePopulation = population > averagePopulation;

const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}.`;
console.log(description);

if (population > averagePopulation) {
  console.log(`${country}'s population is above average.`);
} else {
  console.log(
    `${country}'s population is ${
      averagePopulation - population
    } million below average.`
  );
}

console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // false
console.log(5 + 6 + "4" + 9 - 4 - 2); // 1149 = 1143

const numNeighbours = 8;
console.log(numNeighbours, typeof numNeighbours);

if (numNeighbours === 1) {
  console.log("Only one border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders!");
}

if (language === "english" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}

console.log(
  `${country}'s population is ${
    population > averagePopulation ? "above" : "below"
  } average.`
);
