/*
solution([1, 2, 3, 4], 2) // 3
solution([1, 2, 3, 4, 5, 6], 5) // 3
solution([1, 2, 3], 3) // 2

0 1 2 3 / 4 5 6 7
[1, 2, 3, 4] [1, 2, 3, 4]

0 1 2 3 4 5 / 6 7 8 9 10 11
[1, 2, 3, 4, 5, 6] [1, 2, 3, 4, 5, 6]

2씩 넘어가면서
2 -> 2
5 -> 8

2(k - 1)

if(k = 1) return 1

idx = 2 * (k - 1);
if(idx < len) return numbers[idx];
else idx -= len;


2(5-1) = 2*4 = 8 ?


*/

function solution(numbers, k) {
  if (k === 1) return 1;

  let idx = 2 * (k - 1);

  while(idx > numbers.length) idx -= numbers.length;
  return numbers[idx];
}

const solution = (numbers, k) => numbers[(2 * k - 1) % numbers.length - 1];
