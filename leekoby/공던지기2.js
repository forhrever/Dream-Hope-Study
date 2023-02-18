function solution(nums, k) {
  return nums[(2 * (k - 1)) % nums.length]
}