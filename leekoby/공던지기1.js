function solution(numbers, k) {
  var answer = 0;
  let cnt = 1;
  for (let i = 0; ; i += 2) {
    i %= numbers.length;

    const item = numbers[i]
    if (cnt === k) {
      return item;

    }
    cnt++

  }
}