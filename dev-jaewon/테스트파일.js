// 프로그래머스 https://school.programmers.co.kr/learn/courses/30/lessons/17686

// 풀이 형태
// match 함수: 정규식과의 조합으로 문자, 숫자만으로 조합된 부분 반환
// 정규식 () 괄호를 사용하여 그룹
// 정규식 \D* => 0개 이상의 숫자가 아닌것 탐색
// 정규식 \d* => 0개 이상의 숫자 탐색
// 문자열.localeCompare(비교 문자열) => 2개의 문자열를 비교하여 정렬 데이터 반환 (반환 데이터 -1, 0, 1)
// 숫자 정렬 비교는 sort함수의 1번째 prameter과 2번째 parameter 값을 서로 빼주면 오름차순형태 정렬

function solution(files) {
    return files.sort((p, c) => {
        const reg = /(\D*)(\d*)/i;
        const pre = p.match(reg);
        const cur = c.match(reg);

        const headerCompare = pre[1]
            .toLowerCase()
            .localeCompare(cur[1].toLowerCase());

        if (headerCompare === 0) return Number(pre[2]) - Number(cur[2]);

        return headerCompare;
    });
}

const input = [
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
];
console.log(solution(input));
