const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +(input.shift());

const testCase = input.map(test =>
  test.split(' ').map((item) => +item));

solution(testCase);

function solution(testCase) {
  let result = '';
  testCase.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];

  }).forEach(item => {
    result += `${item[0]} ${item[1]}\n`;
  });
  console.log(result);
}
