const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());

const testArr = [];
for (let i = 0; i < N; i++) {
  testArr.push(+input[i]);
}

solution(N, testArr);

function solution(N, testArr) {
  testArr.sort((a, b) => a - b);
  for (let i = 0; i < N; i++) {
    console.log(testArr[i]);
  }
};
