const input = require("./day7-input.js");

const example = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`

const searchString = "shiny gold bag";
const nullRule = "no other bag";

const cleanInput = input => input.replace(".", "").split(/(?:\scontain\s|\n)+/);

const separateRulesParent = input => input.filter((rule, i) => i % 2 == 0);
const separateRulesChild = input => input.filter((rule, i) => i % 2 > 0);
const recombineRules = (parent, child) => parent.map((rule, i) =>
  [rule.replace("bags", "bag"), child[i].replace("bags", "bag")]
);

const separateRules = input => recombineRules(
  separateRulesParent(cleanInput(input)), separateRulesChild(cleanInput(input))
);

const searchForString = (stringToSearch, input) => {
  let searchFoundArray = [];
  let noMoreFoundFlag = false;
  input.forEach(rule => {
    if (rule[1].includes(stringToSearch)) searchFoundArray.push(rule[0])
  });
  while (!noMoreFoundFlag && input.length) {
    noMoreFoundFlag = true;
    input.forEach((rule, i) => searchFoundArray.forEach(search => {
      if (rule[1].includes(search)) {
        if (!searchFoundArray.includes(rule[0])) searchFoundArray.push(rule[0]);
        noMoreFoundFlag = false;
      }
    }));
    input.forEach((rule, i) => {
      if (searchFoundArray.includes(rule[0])) input.splice(i, 1)
    });
  };
  return searchFoundArray.length;
}

// TODO - finish part 2 function below
const countBagsNeeded = (stringToSearch, input) => {
  let count = 0;
  let countArray = [[stringToSearch]];
  let iCount = 0;
  let noMoreFoundFlag = false;
  console.log(countArray);
  while (!noMoreFoundFlag) {
    noMoreFoundFlag = true;
    let step = [];
    input.forEach(rule => {
      console.log(rule);
      countArray[iCount].forEach(countedBag => {
        if (rule[0].includes(countedBag)) {
          count++;
          step.push(rule[1].split(", "));
          noMoreFoundFlag = false;
        }
      })
    });
    input.push(step);
    if (countArray[iCount + 1]) iCount++;
  }
  return count;
}

console.log(searchForString(searchString, separateRules(input)));
// console.log(countBagsNeeded(searchString, separateRules(example)));

