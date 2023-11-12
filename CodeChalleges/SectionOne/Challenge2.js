// Test data 1
const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

// Test data 2
// const massMark = 95;
// const massJohn = 85;
// const heightMark = 1.88;
// const heightJohn = 1.76;

const markBMI = massMark / (heightMark * heightMark);
const johnBMI = massJohn / (heightJohn * heightJohn);

const markHigherBMI = markBMI > johnBMI;

if (markHigherBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
