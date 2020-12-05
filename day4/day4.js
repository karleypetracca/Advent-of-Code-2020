const input = require("./day4-input.js");

function validPassportsPresent(rawPassportInput) {
  const passportArray = rawPassportInput.split("\n\n");

  const fieldCheck = new RegExp(/(?=[^]*byr:)(?=[^]*iyr:)(?=[^]*eyr:)(?=[^]*hgt:)(?=[^]*hcl:)(?=[^]*ecl:)(?=[^]*pid:)/, "i");
  let count = 0;
  for (i in passportArray) {
    if (fieldCheck.test(passportArray[i])) count++;
  }
  return count;
}

function validPassportsPresentValid(rawPassportInput) {
  const passportArray = rawPassportInput.split("\n\n");

  const fieldCheck = new RegExp(/(?=[^]*byr:(19[2-9][0-9]|200[0-2])(\s|$))(?=[^]*iyr:(201[0-9]|2020)(\s|$))(?=[^]*eyr:(202[0-9]|2030)(\s|$))(?=[^]*hgt:(1[5-8][0-9]cm|19[0-3]cm|59in|6[0-9]in|7[0-6]in)(\s|$))(?=[^]*hcl:#[0-9a-f]{6}(\s|$))(?=[^]*ecl:(amb|blu|brn|gry|grn|hzl|oth)(\s|$))(?=[^]*pid:[0-9]{9}(\s|$))/, "i");
  let count = 0;
  for (i in passportArray) {
    if (fieldCheck.test(passportArray[i])) {
      count++;
    }
  }
  return count;
}

console.log(validPassportsPresent(input));
console.log(validPassportsPresentValid(input));
