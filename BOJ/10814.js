const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = input.shift();
const testCaseArr = [];
for (let i = 0; i < N; i++) {
  const testCase = input[i].split(' ');
  testCaseArr.push({ x: Number(testCase[0]), y: testCase[1], z: i });
}

solution(N, testCaseArr);

function solution(N, testCaseArr) {
  let result = "";
  testCaseArr.sort((a, b) => a.x - b.x);
  for (let i = 0; i < N; i++) {
    console.log(`${testCaseArr[i].x} ${testCaseArr[i].y}`);
  }
}
