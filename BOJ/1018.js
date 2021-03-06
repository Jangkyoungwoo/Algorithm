const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let NM = input.shift().split(' ');
let N = Number(NM.shift());
let M = Number(NM.shift());

let boardArr = [];
for (let i = 0; i < N; i++) {
  boardArr[i] = input.shift().split('');
}

solution(N, M, boardArr);
function solution(N, M, boardArr) {
  let black = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
  let white = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
  const rowCase = M - 7;
  const colCase = N - 7;
  let minArr = [];

  for (let i = 0; i < colCase; i++) {
    for (let j = 0; j < rowCase; j++) {
      find(i, j);
    }
  }

  function find(colCase, rowCase) {
    let checkBlack = 0;
    let checkWhite = 0;
    for (let i = colCase; i < colCase + 8; i++) {
      for (let j = rowCase; j < rowCase + 8; j++) {
        if (boardArr[i][j] !== black[i - colCase][j - rowCase]) checkBlack++;
        if (boardArr[i][j] !== white[i - colCase][j - rowCase]) checkWhite++;
      }
    }

    let min = checkBlack < checkWhite ? checkBlack : checkWhite;
    minArr.push(min);
  }

  console.log(Math.min.apply(null, minArr));
}