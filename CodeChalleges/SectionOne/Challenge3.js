const calcAverage = function (score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
};

// Test data 1
const averageDolphins = calcAverage(96, 108, 89);
const averageKoalas = calcAverage(88, 91, 110);
// No team wins

// Test data 2
// const averageDolphins = calcAverage(97, 112, 101);
// const averageKoalas = calcAverage(109, 95, 123);
// Koalas wins

// Test data 3
// const averageDolphins = calcAverage(97, 112, 101);
// const averageKoalas = calcAverage(109, 95, 106);
// Draw

if (averageDolphins > averageKoalas && averageDolphins >= 100) {
  console.log("Dolphins wins!");
} else if (averageKoalas > averageDolphins && averageKoalas >= 100) {
  console.log("Koalas wins!");
} else if (
  averageDolphins === averageKoalas &&
  averageDolphins >= 100 &&
  averageKoalas >= 100
) {
  console.log("It's a draw!");
} else {
  console.log("No team wins the trophy!");
}
