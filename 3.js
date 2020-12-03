const fs = require('fs');
const readline = require('readline');

const read = readline.createInterface({
  input: fs.createReadStream('./3.txt'),
  output: null,
  console: false,
});

const arr = [];

function evaluate(arr, slope) {
  let i = 0, j = 0, total = 0;

  while (i < arr.length) {
    if (j > (arr[0].length - 1)) {
      j -= arr[0].length;
    }
    total += arr[i][j] == '#';

    i += slope[0];
    j += slope[1];
  }

  return total;
}

read.on('line', (l) => {
  arr.push(l.split(''));
})
.on('close', () => {
  const slopes = [[1, 1], [1, 3], [1, 5], [1, 7], [2, 1]];
  console.log(slopes.map(x => evaluate(arr, x)).reduce((x, y) => x * y));
});
