const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
  input: fs.createReadStream('./1.txt'),
  output: null,
  console: false,
});

const arr = [];

read.on('line', (l) => {
  arr.push(l);
})
.on('close', () => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      for (let k = j; k < arr.length; k++) {
        if ((parseInt(arr[i]) + parseInt(arr[j]) + parseInt(arr[k])) == 2020) {
          console.log(arr[i] * arr[j] * arr[k]);
          return;
        }
      }
    }
  }
});
