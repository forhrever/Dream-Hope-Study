function solution(numbers, k) {
    let ballfirst = 1;   // 공을 가지고 있는 첫번째 사람
    
    for(let i = 0; i < k - 1; i++){  // k - 1이 마지막으로 공을 던진사람
       ballfirst = ballfirst + 2;    // 한 사람 건너뛰기
        
        if(ballfirst > numbers.length - 1){ // 마지막 사람이 첫번째 사람한테 공을 던질때 
            ballfirst = ballfirst - numbers.length;
        }
    }
    
    return ballfirst;
    
//     let result = 0;
//     const ballfirst = result => (result + 2) % numbers.length;
    
//     for(let i = 0; i < k - 1; i++) {
//         result = ballfirst(result);
//     } 
//     return numbers[result];
}

// 첫번째 코드는 2개 실패로 통과되지 않는다. 
// 두번째 코드는 구글링을 통한 정답 