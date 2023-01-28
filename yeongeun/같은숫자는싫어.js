function solution(arr)
{
    var answer = [];

    answer = arr.filter((i, n) => i!== arr[--n])
    
    return answer;
}