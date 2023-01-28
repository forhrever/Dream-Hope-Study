//  https://school.programmers.co.kr/learn/courses/30/lessons/120956
function solution(babbling) {
    var answer = 0;
    const regex = /^(aya|ye|woo|ma)+$/;

    babbling.forEach(word => {
        if (regex.test(word)) answer++;
    })

    return answer;
}