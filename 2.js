const readline = require('readline');
const fs = require('fs');

const read = readline.createInterface({
  input: fs.createReadStream('./2.txt'),
  output: null,
  console: false,
});

const arr = [];

function parseInput(str) {
  const struct = {
    min: 0,
    max: 0,
    char: '',
    pass: ""
  };

  const min = /^[0-9]*(?=-)/g;
  const max = /(?<=-)[0-9]*/g;
  const char = /[a-zA-Z]{1}(?=:)/g;
  const pass = /(?<=: )[a-zA-Z]*$/g;
  struct.min = str.match(min)[0];
  struct.max = str.match(max)[0];
  struct.char = str.match(char)[0]; 
  struct.pass = str.match(pass)[0];
  return struct;
}

function validateInput(obj) {
  let total = 0;

  obj.forEach((e) => {
    let occ = 0;
    console.log(e.pass);
    for (let i = 0; i < e.pass.length; i++) {
      if (e.pass.charAt(i) == e.char) occ++;
    }
    total += (occ >= e.min && occ <= e.max) ? 1 : 0;
  });
  return total;
}

function validateInput2(obj) {
  let total = 0;

  obj.forEach((e) => {
    const a = e.pass.charAt(e.min - 1) == e.char;
    const b = e.pass.charAt(e.max - 1) == e.char;
    total += a ^ b;
  });
  return total;
}

read.on('line', (l) => {
  arr.push(parseInput(l));
})
.on('close', () => {
  console.log(validateInput2(arr));
});
