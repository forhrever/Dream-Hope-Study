function solution(d, budget) {
  var answer = 0;

  d.sort((a, b) => a - b);

  // [1, 3, 2, 5, 4] // 9 - 5
  // [4, 2, 5, 4]    // 9 - 4
  // [6, 5, 4]       // 9 - 3
  // [11, 4]         // 9 - 2
  // [15]            // 9 - 1

  while (d.reduce((a, b) => (a + b), 0) > budget) d.pop();

  return d.length;

  let index = 0;
  let count = 0;
  while (budget > 0) {
    budget -= d[index];
    index++;
    if (budget >= 0) count++;
  }
  return count;
}

console.log(solution([1, 3, 2, 5, 4], 9));
console.log(solution([2, 2, 3, 3], 10));

