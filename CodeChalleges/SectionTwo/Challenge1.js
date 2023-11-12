const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// Test data 1
const averageDolphins = calcAverage(44, 23, 71);
const averageKoalas = calcAverage(65, 54, 49);

// Test data 2
// const averageDolphins = calcAverage(85, 54, 41);
// const averageKoalas = calcAverage(23, 34, 27);

console.log(averageDolphins, averageKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins > avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  }
};

checkWinner(averageDolphins, averageKoalas);
