function isOverLapped(point, start, end) {
    return (start <= point) && (point < end);
}

function solution(lines) {
    let answer = 0;

    for (let point = -100; point < 100; point++) {
        let count = 0;

        for (const line of lines) {
            isOverLapped(point, ...line) ? count++ : null

        }

        answer += count > 1 ? 1 : 0
    }

    return answer;
}