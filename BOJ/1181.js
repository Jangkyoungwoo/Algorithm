const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input.shift());
const testCaseArr = [];
for (let i = 0; i < N; i++) {
  const testCase = String(input[i].split('\n'));
  if (testCase[testCase.length - 1] === '\r') {
    testCaseArr.push(testCase.substring(0, testCase.length - 1));
  } else {
    testCaseArr.push(testCase);
  }
}

solution(N, testCaseArr);

function solution(N, testCase) {
  testCase = Array.from(new Set(testCase));
  const testCaseLen = testCase.map((item) => item.length);
  const arr = [];
  let result = "";
  for (let i = 0; i < testCase.length; i++) {
    arr.push({ x: testCase[i], y: testCaseLen[i] });
  }
  arr.sort((a, b) => {
    if (a.y !== b.y) {
      return a.y - b.y;
    }
    return a.x.localeCompare(b.x);
  }).map((item) => result += `${item.x}\n`);
  console.log(result);
}
//