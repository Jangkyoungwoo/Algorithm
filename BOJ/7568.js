const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[0].split(' ').map((item) => +item);
N = N[0];

const infoArr = [];
for (let i = 1; i <= N; i++) {
  const info = input[i].split(' ').map((item) => +item);
  infoArr.push({ x: info[0], y: info[1] });
}

solution(N, infoArr);

function solution(N, infoArr) {
  let printRank = [];
  for (let i = 0; i < N; i++) {
    let rank = 1;
    for (let j = 0; j < N; j++) {
      if (i === j) {
        continue;
      }
      else if (infoArr[i].x < infoArr[j].x && infoArr[i].y < infoArr[j].y) {
        rank += 1;
      }
    }
    printRank.push(rank);
  }
  console.log(printRank.join(' '));
}