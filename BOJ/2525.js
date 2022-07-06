const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const time = input[0].split(" ");
const A = +time[0];
const B = +time[1];
const C = +input[1];

solution(A, B, C);

function solution(A, B, C) {
  let sum = B + C;
  let hour = Math.floor(sum / 60);
  let minute = sum % 60;
  if (sum >= 60) {
    A += hour;
    B = minute;
    if (A > 23) {
      A -= 24;
    }
  } else if (sum < 60) {
    B += C;
  }
  console.log(A, B);
}
