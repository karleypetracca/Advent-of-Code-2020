const input = require("./day6-input.js");

const inputToArray = rawInput => rawInput.split("\n\n");

const removeNewLines = array => array
  .map(ele => ele.replace(/(\r\n|\n|\r)/gm, ""));

const removeDuplicateChars = string => string.split("")
  .filter((char, i, array) => array.indexOf(char) == i).join("");

const sumArray = array => array.reduce((prev, curr) => prev + curr, 0);

const countQuestionsOneYes = rawInput => sumArray(removeNewLines(inputToArray(rawInput))
    .map(group => removeDuplicateChars(group).length));

const countQuestionsAllYes = rawInput => {
  const groupNoDuplicates = removeNewLines(inputToArray(rawInput))
    .map(group => removeDuplicateChars(group));
  const splitArray = inputToArray(rawInput).map((group, i) => group.split("\n"));
  
  return(sumArray(groupNoDuplicates.map((group, i) => {
    let string = "";
    for (char in group) {
      let count = 0;
      for (q in splitArray[i]) {
        if (splitArray[i][q].includes(group[char])) count++;
      }
      if (count == splitArray[i].length) string += group[char];
    };
    return string.length;
  })));
}

console.log(countQuestionsOneYes(input));
console.log(countQuestionsAllYes(input));