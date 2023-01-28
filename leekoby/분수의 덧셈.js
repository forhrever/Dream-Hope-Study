//https://school.programmers.co.kr/learn/courses/30/lessons/120808
function solution(denum1, num1, denum2, num2) {
    var answer = [0, 0];
    let first = num1 * denum2 + num2 * denum1;
    let second = num1 * num2;
    let gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
    let min = gcd(first, second);
    answer[0] = first / min;
    answer[1] = second / min;

    return answer;
}