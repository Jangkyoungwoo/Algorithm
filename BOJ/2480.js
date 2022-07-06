const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

input = input[0].split(" ");
const dice1 = +input[0];
const dice2 = +input[1];
const dice3 = +input[2];

solution(dice1, dice2, dice3);

function solution(a, b, c) {
  let result;
  if (a === b && b === c) {
    result = 10000 + a * 1000;
  } else if (a === b || b === c || c === a) {
    if (a === b || c === a) {
      result = 1000 + a * 100;
    } else {
      result = 1000 + b * 100;
    }
  } else {
    const arr = [a, b, c];
    arr.sort();
    result = arr[2] * 100;
  }
  console.log(result);
}
