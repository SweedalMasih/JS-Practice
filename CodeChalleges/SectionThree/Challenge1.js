// Test data 1
const temperatures = [17, 21, 23];

// Test data 2
// const temperatures = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = "...";
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}C in ${i + 1} days ... `;
  }
  return str;
};

console.log(printForecast(temperatures));
