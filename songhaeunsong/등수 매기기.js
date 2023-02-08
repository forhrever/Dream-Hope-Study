//등수매기기

function solution(score) {
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    score[i] = score[i][0] + score[i][1];
    answer[i] = 1;
  }
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (i !== j && score[i] > score[j]) answer[j]++;
    }
  }
  return answer;
}
