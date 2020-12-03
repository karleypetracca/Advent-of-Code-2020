const input = require("./day2-input.js");

inputArray = input.split("\n");

function countValidPasswordsPt1(array) {
  let count = 0;

  function countCharacters(string, character) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === character) {
        count += 1;
      };
    };
      
    return count;
  };
  
  for (let i = 0; i < array.length; i++) {
    const lineArray = array[i].split(": "); // ["6-7 d", "dwdddkd"]

    const logicRange = lineArray[0].split(" ")[0]; // "6-7"
    const logicMin = parseInt(logicRange.split("-")[0]); // "6"
    const logicMax = parseInt(logicRange.split("-")[1]); // "7"
    const logicChar = lineArray[0].split(" ")[1]; // "d"
    const password = lineArray[1]; // "dwdddkd"

    const logicCount = countCharacters(password, logicChar);

    if (logicCount >= logicMin && logicCount <= logicMax) {
      count += 1;
    };
  };

  return count;
};

function countValidPasswordsPt2(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    const lineArray = array[i].split(": "); // ["6-7 d", "dwdddkd"]

    const logicRange = lineArray[0].split(" ")[0]; // "6-7"
    const logicIndex1 = parseInt(logicRange.split("-")[0])-1; // "6"
    const logicIndex2 = parseInt(logicRange.split("-")[1])-1; // "7"
    const logicChar = lineArray[0].split(" ")[1]; // "d"
    const password = lineArray[1]; // "dwdddkd"

    if (password[logicIndex1] === logicChar && password[logicIndex2] !== logicChar) {
      count += 1;
    };
    if (password[logicIndex2] === logicChar && password[logicIndex1] !== logicChar) {
      count += 1;
    };
  };
  return count;
};

console.log("Num of valid passwords p1: ", countValidPasswordsPt1(inputArray));
console.log("Num of valid passwords p2: ", countValidPasswordsPt2(inputArray));
