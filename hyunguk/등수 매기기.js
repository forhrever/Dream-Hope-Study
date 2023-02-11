/*
영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 
영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 
영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 
solution 함수를 완성해주세요. */
/*
1. 영어점수와 수학 점수의 평균을 구한 새 배열
2. 새 배열의 각 요소를 크기로 비교 // sorting + indexof // [...[i]]
3. 만약 같은 점수가 있을 경우 같은 등수를 주고, 인원 수만큼 건너뛰기
// [i]가 [i - 1]과 같은 숫자일 경우 i는 같은 등수, 같은 인원수만큼 누적
// 등수 변수: cnt, 누적 변수: sum
// if([i] === [i-1]) sum++
// 조건 밖: sum = 0; cnt++;
// 공통 부분: cnt + sum;
*/

function solution(score) {
  let answer = [];
  let avrArr = [];
  let rate = [];
  const arrLen = score.length;

  // 1. 영어점수와 수학 점수의 평균을 구한 새 배열
  for (let i = 0; i < arrLen; i++) {
    avrArr = [...avrArr, (score[i][0] + score[i][1]) * 0.5];
  }
  // 2. 새 배열의 각 요소를 크기로 비교 // sorting + indexof // [...[i]]
  rate = [...avrArr];
  rate.sort((a, b) => b - a);

  // [i]가 [i - 1]과 같은 숫자일 경우 i는 같은 등수, 같은 인원수만큼 누적
  // 등수 변수: cnt, 누적 변수: sum
  // if([i] === [i-1]) sum++
  // 조건 밖: sum = 0; cnt++;
  // 공통 부분: cnt + sum;

  for (let i = 0; i < arrLen; i++) {
    answer[i] = rate.indexOf(avrArr[i]) + 1;
  }

  return answer;
}

console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
);
