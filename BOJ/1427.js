const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +(input.shift());

solution(N);

function solution(N) {
  let numToString = String(N);
  let numArr = [];
  for (let i = 0; i < numToString.length; i++) {
    numArr.push(numToString.charAt(i));
  }
  numArr.sort((a, b) => b - a);
  console.log(+(numArr.join('')));
}