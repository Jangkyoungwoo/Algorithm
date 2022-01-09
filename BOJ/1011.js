const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];
const testCaseArr = [];
for (let i = 1; i <= +input[0]; i++) {
  const testCaseVal = input[i].split(' ').map((item) => +item);
  testCaseArr.push({ x: testCaseVal[0], y: testCaseVal[1] });
}

solution(T, testCaseArr);

function solution(T, testCaseArr) {
  for (let i = 0; i < T; i++) {
    const { x, y } = testCaseArr[i];
    const r = y - x;
    let max = Math.floor(Math.sqrt(r));
    if (max === Math.sqrt(r)) {
      console.log(max * 2 - 1);
    }
    else if (r <= max * max + max) {
      console.log(2 * max);
    }
    else {
      console.log(2 * max + 1);
    }
  }
}