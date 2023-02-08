function solution(score) {
    let newArr = score.map((el) => (el[0] + el[1]) / 2);
    let sort = Array.from(newArr).sort((a, b) => b - a);
    return newArr.map((v) => sort.indexOf(v) + 1);
  }