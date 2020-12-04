const input = require("./day3-input");

const tree = "#";

function countTrees(treeInput, right, down) {
  const treeInputArray = treeInput.split("\n");
  const lastRow = treeInputArray.length - 1;
  const rowIndexMax = treeInputArray[0].length;

  let rowIndexCount = 0;
  let treeCount = 0;

  for (let i = 0; i <= lastRow; i += down) {
    if (treeInputArray[i][rowIndexCount] === tree) treeCount++;
    
    let rightShift = rowIndexCount + right;
    if (rightShift < rowIndexMax) rowIndexCount += right;
    else rowIndexCount = rightShift - rowIndexMax;
  }

  return treeCount;
} 

// pt 1 - slope of right 3 and down 1
console.log(countTrees(input, 3, 1));

// pt 2 - evaluating many slopes
const slopeArray = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];
let slopeProduct = 0;

for (let i = 0; i < slopeArray.length; i++) {
  const slopeResult = countTrees(input, slopeArray[i][0], slopeArray[i][1]);

  if (!slopeProduct) slopeProduct = slopeResult;
  else slopeProduct *= slopeResult;
}

  console.log(slopeProduct);