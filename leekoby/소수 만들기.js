https://school.programmers.co.kr/learn/courses/30/lessons/12977


function isPrime(a) {
    if (a < 2) return false;
    for (let i = 2; i <= Math.sqrt(a); i++)
        if (a % i === 0) return false;
    return true;
}


function solution(nums) {
    let newNum = []
    var answer = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                newNum.push(nums[i] + nums[j] + nums[k])

            }
        }
        console.log(newNum)
    }
    for (let i = 0; i < newNum.length; i++)
        if (isPrime(newNum[i])) answer++;

    return answer;
}