const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
};

const india = describeCountry("India", 1400, "Delhi");
const finland = describeCountry("Finland", 60, "Helsinki");
const portugal = describeCountry("Portugal", 100, "Lisbon");

console.log(india, finland, portugal);

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const populationIndia = percentageOfWorld1(1400);
const populationFinland = percentageOfWorld1(60);
const populationPortugal = percentageOfWorld1(100);

console.log(populationIndia, populationFinland, populationPortugal);

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const populationIndia2 = percentageOfWorld1(1400);
const populationFinland2 = percentageOfWorld1(60);
const populationPortugal2 = percentageOfWorld1(100);

console.log(populationIndia2, populationFinland2, populationPortugal2);

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const populationIndia3 = percentageOfWorld1(1400);
const populationFinland3 = percentageOfWorld1(60);
const populationPortugal3 = percentageOfWorld1(100);

console.log(populationIndia3, populationFinland3, populationPortugal3);

const describePopulation = function (country, population) {
  return `${country} has ${population} million people, which is about  ${percentageOfWorld1(
    population
  )}% of the world.`;
};

const indiaPopulationPercentage = describePopulation("India", 1400);
const finlandPopulationPercentage = describePopulation("Finland", 60);
const portugalPopulationPercentage = describePopulation("Portugal", 100);

console.log(
  indiaPopulationPercentage,
  finlandPopulationPercentage,
  portugalPopulationPercentage
);

const populations = [1400, 60, 100, 1441];
console.log(populations.length === 4);

const percentages = [];
for (let i = 0; i < populations.length; i++) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages.push(percentage);
}
console.log(percentages);

const neighbours = ["Sri Lanka", "Pakistan", "Bhutan", "China"];
neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);
if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}
const position = neighbours.indexOf("Bhutan");
console.log(position);
neighbours[position] = "Myanmar";
console.log(neighbours);

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "hindi",
  population: 1400,
  neighbours: ["Sri Lanka", "Pakistan", "Bhutan", "China"],
  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  checkIsland: function () {
    this.isIsland = this.neighbours.length ? false : true;
    return this.isIsland;
  },
};

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);
myCountry["population"] -= 2;
console.log(myCountry.population);

console.log(myCountry.describe());
console.log(myCountry.checkIsland());
console.log(myCountry.isIsland);

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting.`);
}

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  // console.log(listOfNeighbours[i]);
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

const percentages2 = [];
let i = 0;
while (i < populations.length) {
  const percentage = percentageOfWorld1(populations[i]);
  percentages2.push(percentage);
  i++;
}

console.log(percentages2);
