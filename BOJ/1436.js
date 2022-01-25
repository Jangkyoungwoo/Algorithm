const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = +(input.shift());

solution(input);

function solution(input) {
  let num = 665;

  while (input > 0) {
    num++;

    if (num.toString().includes('666')) {
      input--;
    }
  }

  console.log(num);
};
