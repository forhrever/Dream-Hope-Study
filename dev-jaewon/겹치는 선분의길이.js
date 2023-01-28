// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/120876

function solution(lines) {
    const obj = {};

    for (let v of lines) {
        for (let j = v[0] + 1; j <= v[1]; j++) {
            if (j === v[0] && v[1] + 1 - (v[0] + 1) === 1) continue;
            obj[j] || (obj[j] = 0);
            obj[j] += 1;
        }
    }

    return Object.values(obj).filter((v) => v >= 2).length;
}
console.log(
    solution([
        [0, 2],
        [-3, -1],
        [-2, 1],
    ])
);
