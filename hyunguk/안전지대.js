/*
dy dx에 기준 좌표를 입력받고
상하 좌우의 합을 구하는 방법

sum = 
  d[y - 1][x] // [-1,  0 ]
+ d[y + 1][x] // [ 1,  0 ]
+ d[y][x - 1] // [ 0, -1 ]
+ d[y][x + 1] // [ 0,  1 ]

// Direct 코딩 기법

// 4 x 4 배열일 경우

for(t = 0; t < 4; t++) {
    dy = y + direct[y][0];
    dx = x + direct[y][1];

    sum += data[dy][dx];
}
// [0, 0] 일 경우 메모리를 침범하는 버그

for(t = 0; t < 4; t++) {
    dy = y + direct[y][0];
    dx = x + direct[y][1];

    sum += data[dy][dx];

    // 버그 방지 코드
    // 범위 안에 있는 애들만 처리
    if( (dy >= 0 && dy < 4) && (dx >= 0 && dx < 4) ) {
        sum += arr[dy][dx];
    }
}

function solution(board) {
    var answer = 0;
    return answer;
}

[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 0, 0, 0]
[0, 0, 1, 0, 0]
[0, 0, 0, 0, 0]
// 16

[dy, dx]

*/

// 폭탄 터지면 발생
function drop (y, x, newArr, arrLen) {
  const direct = [[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];
  let dy, dx, t;

  for(t = 0; t < 8; t++) {
      dy = y + direct[t][0];
      dx = x + direct[t][1];
      
      if(dy >= 0 && dy < arrLen[0] && dx >= 0 && dx < arrLen[1]) newArr[dy][dx] = 1;
  }
  return newArr;
}

function solution(board) {
  let newArr = [...board];

  // 배열의 갯수 구하기
  const arrLen = [board.length, board[0].length];

  // 인덱스 찾기
  let setIndex = [];
  for(let y = 0; y < arrLen[0]; y++) {
      for(let x = 0; x < arrLen[1]; x++) {
          if(board[y][x] === 1) { setIndex = [...setIndex,[y,x]]; }
      }
  }

  // 폭탄 투하
  for(let i = 0; i < setIndex.length; i++) {
      newArr = drop(setIndex[i][0],setIndex[i][1], newArr, arrLen);
  } 

  // 안전 지역 갯수
  const totalLen = arrLen[0] * arrLen[1];
  return totalLen - newArr.flat().reduce((arr,cur)=> arr + cur);
}

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]])); // 13