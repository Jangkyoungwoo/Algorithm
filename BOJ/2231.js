const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);

solution(input[0]);

function solution(N) {
  let answer = N;
  const arr = [];
  for (let i = 1; i <= N; i++) {
    const M = i + Math.floor(i / 100) + Math.floor((i % 100) / 10) + i % 10;
    if (M === N) {
      arr.push(i);
    }
  }
  if (arr.length > 0) {
    for (let i = 0; i <= arr.length; i++) {
      if (answer > arr[i]) {
        answer = arr[i];
      }
    }
    console.log(answer);
  } else {
    console.log(0);
  }
}