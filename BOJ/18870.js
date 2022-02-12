const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = +input.shift();
input = input[0].split(' ').map(item => +item);

solution(N, input);

function solution(N, input) {
  let set = new Set(input);
  let setSort = [...set].sort((a, b) => a - b);

  let dic = {};
  setSort.forEach((e, index) => { dic[e] = index });

  let result = '';
  for (let i = 0; i < N; i++) {
    result += dic[input[i]] + ' ';
  }
  console.log(result);
}
