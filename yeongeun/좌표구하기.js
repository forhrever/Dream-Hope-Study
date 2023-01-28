function solution(keyinput, board) {
    var answer = [];
    let up = keyinput.filter((el)=> el === 'up').length
    let down = keyinput.filter((el)=> el === 'down').length
    let left = keyinput.filter((el)=> el === 'left').length
    let right = keyinput.filter((el)=> el === 'right').length
    
    if (Math.abs(right - left) < board[0]/2) {
        answer.push(right-left)
    } else if (right - left > board[0]/2) {
        answer.push(board[0]/2-0.5)
    } else if (right - left < -board[0]/2){
        answer.push(-board[0]/2+0.5)
    } 
    
    if (Math.abs(up - down) < board[0]/2) {
        answer.push(up-down)
    } else if (up - down > board[0]/2) {
        answer.push(board[1]/2-0.5)
    } else if (up - down < -board[0]/2){
        answer.push(-board[1]/2+0.5)
    }
    
    return answer;
}

// 제외 케이스 => 순서대로 움직이므로 처음부터 합치면 안됌 => for문으로 경우에 따라 + -로 수정하기
// 입력값 〉	["left", "left", "left", "right"], [3, 3]
// 기댓값 〉	[0, 0]
// 실행 결과 〉	실행한 결괏값 [-1,0]이 기댓값 [0,0]과 다릅니다.

function solution(keyinput, board) {
    let result = [0, 0];
    for(let i = 0; i < keyinput.length ; i++) {
        if(keyinput[i] === 'right' && result[0] < board[0]/2 - 0.5){
            result[0]++
        } else if (keyinput[i] === 'left' && result[0] > -board[0]/2 + 0.5 ){
            result[0]--
        } else if(keyinput[i] === 'up' && result[1] < board[1]/2 - 0.5){
            result[1]++
        } else if (keyinput[i] === 'down' && result[1] > -board[1]/2 + 0.5 ){
            result[1]--
        }
    }
    return result;
}
