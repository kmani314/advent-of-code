const fs = require('fs');
const readline = require('readline');

let data = fs.readFileSync('./4.txt');

data = data.toString().split('\n\n');
console.log(data);

let valid = 0;

const fields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];

data.forEach((k) => {
  let ok = 1;
  fields.forEach((f) => {
    if (!k.includes(f)) {
      ok = 0;
    }
  });
  valid += ok;
});

console.log(valid);
