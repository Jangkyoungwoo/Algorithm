const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const NM = input[0].split(' ').map((item) => +item);
const N = NM[0];
const M = NM[1]
const testCaseArr = [];
for (let i = 0; i < N; i++) {
  const testCase = input[1].split(' ').map((item) => +item);
  testCaseArr.push(testCase[i]);
}

solution(N, M, testCaseArr);

function solution(N, M, testCaseArr) {
  let max = 0;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = testCaseArr[i] + testCaseArr[j] + testCaseArr[k];
        if (sum <= M && sum > max) {
          max = sum;
        }
      }
    }
  }
  console.log(max);
} 