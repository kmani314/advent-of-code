const readline = require('readline');
const fs = require('fs');

const read = readline.createInterface({
  input: fs.createReadStream('./5.txt'),
  output: null,
  console: false,
});

let arr = [];

const row = 2 ^ 7;
const col = 2 ^ 3;

read.on('line', (l) => {
  arr.push(l);
}).on('close', () => {
  arr = arr.map((i) => {
      let row = i.substring(0, 7);
      let col = i.substring(7, 10);
      
      row = row.replaceAll('B', '1').replaceAll('F', '0');
      col = col.replaceAll('L', '0').replaceAll('R', '1');

      return (parseInt(row, 2) * 8 + parseInt(col, 2));
  });
  console.log(Math.max(...arr));

  arr = arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] + 1) {
      console.log(arr[i - 1]);
      console.log(arr[i]);
    }
  }
});
