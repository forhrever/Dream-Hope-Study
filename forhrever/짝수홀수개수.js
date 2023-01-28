function solution(num_list) {
    let answer = [];
    let result = [];
    
    for ( let i = 0; i < num_list.length; i++) {
        if(num_list[i] % 2 === 0) {
        result.push(i);
    }
}
    answer = [result.length, num_list.length - result.length]
    return answer;
}