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
  const sortedNumArr = testArr.sort((a, b) => a - b);
  const evg = () => {
    let result = 0;
    for (let i = 0; i < N; i++) {
      result += testArr[i];
    }
    result = Math.round(result / N);
    console.log(result);
  }
  const middleVal = () => {
    const middle = (N - 1) / 2;
    console.log(sortedNumArr[middle]);
  }
  const mode = () => {
    const numMap = {};
    for (let num of sortedNumArr) {
      if (numMap[num]) {
        numMap[num] = numMap[num] + 1;
      } else {
        numMap[num] = 1;
      }
    }
    let maxNum = Math.max.apply(null, Object.values(numMap));
    let maxNumArr = [];
    let maxNumResult = 0;
    for (let numKey in numMap) {
      if (numMap[numKey] === maxNum) {
        maxNumArr.push(numKey);
      }
    }

    if (maxNumArr.length > 1) {
      maxNumArr = maxNumArr.sort((a, b) => a - b);
      maxNumResult = maxNumArr[1];
    } else {
      maxNumResult = maxNumArr[0];
    }
    console.log(+maxNumResult);
  }
  const range = () => {
    console.log(sortedNumArr[N - 1] - sortedNumArr[0]);
  }
  evg();
  middleVal();
  mode();
  range();
}