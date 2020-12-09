const input = require("./day8-input.js");

const example = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`

const cleanInput = input => input.split("\n").map(line => line.split(" "));

const countAccOneRun = (rawInput) => {
  const input = cleanInput(rawInput);
  let lineIndex = 0;
  let acc = 0;
  let ranOnce = false;
  let ranOnceArray = [];
  while (!ranOnce) {
    if (!ranOnceArray.includes(lineIndex)) {
      ranOnceArray.push(lineIndex);
      let step = input[lineIndex];
      if (step[0] == "acc") {
        acc += parseInt(step[1]);
        lineIndex++;
      }
      if (step[0] == "jmp") lineIndex += parseInt(step[1]);
      if (step[0] == "nop") lineIndex++;
    }
    else ranOnce = true;
  }
  return acc;
}

// TODO - FINISH PT 2
const countAccFixed = (rawInput) => {
  const input = cleanInput(rawInput);
  const finalIndex = input.length - 1;
  let lineIndex = 0;
  let acc = 0;
  let ranOnce = false;
  while (!ranOnce) {
    let step = input[lineIndex];
    if (step[0] == "acc") {
      acc += parseInt(step[1]);
      lineIndex++;
    }
    if (step[0] == "jmp") {
      if (lineIndex++ == finalIndex) lineIndex++;
      else lineIndex += parseInt(step[1]);
    }
    if (step[0] == "nop") {
      if (lineIndex += parseInt(step[1]) == finalIndex) lineIndex += parseInt(step[1]);
      else lineIndex++;
    }
      if (lineIndex >= finalIndex) ranOnce = true;
  }
  return acc;
}

console.log(countAccOneRun(input));
// console.log(countAccFixed(input));

