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
  const result = testArr.sort((a, b) => a - b);
  console.log(result.join("\n")); // console.log는 동작이 느리므로 join으로 하나의 문자열을 출력해주도록 함.
}