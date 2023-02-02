function solution(n) {
    let arr = [];
  let result = 1;

  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let arrFilter = arr.map((el) => (result *= el)).filter(el => el<=n);

  return arrFilter.length;
}