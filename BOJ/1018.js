const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const NM = input[0].split(' ').map((item) => +item);
const N = NM[0];
const M = NM[1];

const boardArr = Array.from(Array(N), () => new Array(M));
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    boardArr[i][j] = input[i + 1].charAt(j);
  }
}

solution(N, M, boardArr);
function solution(N, M, boardArr) {
  const testCase = Array.from(Array(N), () => new Array(M));
  const rowCase = M - 7;
  const colCase = N - 7;

  for (let i = 0; i < rowCase; i++) {
    for (let j = 0; j < colCase; j++) {
      find(rowCase, colCase);
    }
  }

  function find(rowCase, colCase) {
    const x = rowCase + 8;
    const y = colCase + 8;
    for (let i = rowCase; k < x; i++) {
      for (let j = colCase; l < y; j++) {

      }
    }
  }
}

/*let count = 0;
if (N > 8 && M > 8) {

}
else {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (boardArr[i][j] == 'W') {
        if (boardArr[i][j] === boardArr[i + 1][j]) {
          boardArr[i + 1][j] = 'B';
          count++;
        }
        else if (boardArr[i][j] === boardArr[i][j + 1]) {
          boardArr[i][j + 1] = 'B';
          count++;
        }
        else {
          boardArr[i + 1][j] = 'B';
          boardArr[i][j + 1] = 'B';
          count += 2;
        }
      }
      if (boardArr[i][j] == 'B') {
        if (boardArr[i][j] === boardArr[i + 1][j]) {
          boardArr[i + 1][j] = 'W';
          count++;
        }
        else if (boardArr[i][j] === boardArr[i][j + 1]) {
          boardArr[i][j + 1] = 'W';
          count++;
        }
        else {
          boardArr[i + 1][j] = 'W';
          boardArr[i][j + 1] = 'W';
          count += 2;
        }
      }
    }
  }
}
console.log(count);*/