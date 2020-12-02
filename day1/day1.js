const input = require("./day1-input.js");
const desiredSum = 2020;

function twoWithDesiredSum(input, desiredSum) {
  console.log("initializing 2 matching desiredSum...");
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if ((i !== j) && (input[i] + input[j] === desiredSum)) {
        return input[i] * input[j];
      }
    }
  }
}

function threeWithDesiredSum(input, desiredSum) {
  console.log("initializing 3 matching desiredSum...");
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if ((i !== j) && (i !== k) && (j !== k) && (input[i] + input[j] + input[k] === desiredSum)) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }
}

const two = twoWithDesiredSum(input, desiredSum);
console.log("two: ", two);

const three = threeWithDesiredSum(input, desiredSum);
console.log("three: ", three);
