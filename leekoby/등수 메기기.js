function solution(score) {

    let answer = new Array(score.length).fill(1)
    const avg = score.map(el => (el[0] + el[1]) / 2);
    console.log(avg)
    for (let i = 0; i < avg.length; i++) {
        for (let j = 0; j < avg.length; j++) {
            if (avg[i] < avg[j]) answer[i]++;
        }
    }

    return answer;
}