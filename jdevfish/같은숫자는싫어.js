function solution(arr)
{
    const answer = [];
    const repeat = [];
    for (let i = 0; i < arr.length; i++){
        if (!repeat.includes(arr[i])) {
            repeat.length = 0;
            repeat.push(arr[i]);
            answer.push(arr[i]);}
    }

    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));
console.log(solution([4,4,4,3,3]));

//ref
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}

//ref
let solution=_=>_.filter((i,$)=>i!=_[--$])
