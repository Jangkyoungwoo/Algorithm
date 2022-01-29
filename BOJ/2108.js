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
  const testArrSort = testArr.sort((a, b) => a - b);
  const evg = () => {
    let result = 0;
    for (let i = 0; i < N; i++) {
      result += testArr[i];
    }
    result = Math.round(result / 5);
    console.log(result);
  }
  const middleVal = () => {
    const middle = (N - 1) / 2;
    console.log(testArrSort[middle]);
  }
  const mode = () => {
    
  }
  const range = () => {
    console.log(testArrSort[N - 1] - testArrSort[0]);
  }
  evg();
  middleVal();
  mode();
  range();
}