const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);
solution(input[0]);

function solution(N) {

  let pattern = [];
  for (let i = 0; i < N; i++) {// 가운데 빈칸 뚫기
    pattern[i] = [];
    for (let j = 0; j < N; j++) {
      if (i % 3 === 1 && j % 3 === 1) {
        pattern[i][j] = ' ';
      } else {
        pattern[i][j] = '*';
      }
    }
  }

  /*for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      arr[i][j] = '*';
    }
  }*/

  for (let i = 0; i < N; i++) { //출력
    for (let j = 0; j < N; j++) {
      process.stdout.write(pattern[i][j]);
    }
    console.log();
  }

}