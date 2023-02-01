//겹치는 선분의 길이

function solution(lines) {
    const obj = {};
    for(let i = 0; i < lines.length; i++){
        for(let j = lines[i][0]; j < lines[i][1]; j++){
            obj[j]? obj[j]++ : obj[j] = 1
        }
    }
    console.log(obj)
    return Object.values(obj).filter(e =>e >= 2).length;
}