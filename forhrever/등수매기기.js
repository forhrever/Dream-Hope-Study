function solution(score) {
    // 1. score의 길이와 동일하고, 모든 요소가 1인 배열을 선언한다.
    // fill() 메서드는 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채웁니다.
    let answer = new Array(score.length).fill(1);
    
    // 2. score 배열의 각 평균 점수를 계산한 배열 avg를 선언한다.
    let avg = score.map(([a, b]) => (a + b) / 2);
    
    // 3. 이중 for문을 사용, i번째 값보다 큰 j값이 있다면 i의 값에 1을 더한다.
    for(let i = 0; i < avg.length; i++){
        for(let j = 0; j < avg.length; j++){
            if(avg[i] < avg[j]) answer[i]++;
        }
    }
    return answer;
}