const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");
const N = +input[0];
const M = +input[2];
let nArr = new Set(input[1].split(" ").map(Number));
let mArr = input[3].split(" ").map(Number);

solution(nArr, M, mArr);

function solution(nArr, M, mArr) {
  const arr = [];
  for (let i = 0; i < M; i++) {
    if (nArr.has(mArr[i])) {
      arr.push(1);
    } else {
      arr.push(0);
    }
  }

  console.log(arr.join(" "));
}
