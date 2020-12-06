const input = require("./day5-input.js");

const row = 128;
const col = 8; // L is lower, R is higher

function setIndexArray(desiredLength) {
  let array = new Array(desiredLength);
  for (let i = 0; i < array.length; i++) array[i] = i;
  return array;
}

function findSeatId(seat, rowNum, colNum) {
  let rowCalc = setIndexArray(rowNum);
  let colCalc = setIndexArray(colNum);
  for (j in seat) {
      let seatCode = seat[j];
      const rowHalf = rowCalc.length / 2;
      const colHalf = colCalc.length / 2;
      if (seatCode == "F") rowCalc.splice(rowHalf, rowHalf);
      if (seatCode == "B") rowCalc.splice(0, rowHalf);
      if (seatCode == "L") colCalc.splice(colHalf, colHalf);
      if (seatCode == "R") colCalc.splice(0, colHalf);
    }
  return seatId = rowCalc[0] * colNum + colCalc[0];
}

function highestSeatId(rawSeatInput, rowNum, colNum) {
  const seatArray = rawSeatInput.split("\n");
  let highestSeatId = 0;
  for (i in seatArray) {
    const seatId = findSeatId(seatArray[i], rowNum, colNum);
    if (seatId > highestSeatId) highestSeatId = seatId;
    // console.log(`${seat}: row ${rowCalc[0]}, col ${colCalc[0]}, seatId ${seatId}`)
  }
  return highestSeatId;
}

function findMissingSeat(rawSeatInput, rowNum, colNum) {
  const seatArray = rawSeatInput.split("\n");
  let seatIdArray = [];
  let missingSeatId = 0;
  for (let i = 0; i < seatArray.length; i++) {
    const seatId = findSeatId(seatArray[i], rowNum, colNum);
    seatIdArray.push(seatId);
  }
  seatIdArray.sort((a, b) => a - b);
  for (let i = 0; i < seatIdArray.length; i++) {
    if (seatIdArray[i] + 1 != seatIdArray[i + 1]) {
      missingSeatId = seatIdArray[i] + 1;
      break;
    }
  }
  return missingSeatId;
}

console.log(highestSeatId(input, row, col));
console.log(findMissingSeat(input, row, col));