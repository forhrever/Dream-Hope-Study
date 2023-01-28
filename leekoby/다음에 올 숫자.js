//https://school.programmers.co.kr/learn/courses/30/lessons/120924
function solution(common) {
    if (common[2] - common[1] === common[1] - common[0]) {

        return common.pop() + common[1] - common[0];
    } else {

        return common.pop() * (common[1] / common[0]);
    }
}
