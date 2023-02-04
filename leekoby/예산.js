function solution(d, budget) {
    var answer = 0;
    d.sort((a, b) => a - b)

    for (let i = 0; budget - d[i] >= 0; i++) {
        budget -= d[i]
        answer++
    }
    return answer;
}