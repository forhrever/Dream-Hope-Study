function solution(d, budget) {
    d.sort((a,b) => a-b);
    let sum = 0;
    let count = 0;
    let i = 0;
    while (sum <= budget){
        sum += d[i];
        if (sum <= budget) count++;
        i++;
    }
    return count;
}

// function solution(d, budget) {
//     d.sort((a,b) => a-b);
//     let sum = 0;
//     let count = 0;
//     // for (let i = 0; i < d.length; i++){

//     // }
//     let i = 0;
//     while (sum <= budget){
//         sum += d[i];
//         console.log("sum: " + sum );
//         if (sum <= budget) count++;
//         i++;
//     }
//     return count;
//     // return d;
// }


console.log(solution([1,3,2,5,4], 9)); //3
console.log(solution([2,2,3,3], 10)); //4

