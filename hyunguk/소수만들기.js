function primecheck(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }
  return true;
}

function solution(nums) {
  let count = 0;
  const nLen = nums.length;

  for (let z = 0; z < nLen - 2; z++) {
    for (let y = z + 1; y < nLen - 1; y++) {
      for (let x = y + 1; x < nLen; x++) {
        let flag = primecheck(nums[x] + nums[y] + nums[z]);
        if (flag) count++;
      }
    }
  }

  return count;
}
