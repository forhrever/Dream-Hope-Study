function solution(nums) {
    let result = 0;
    let i = 0;
    let j = 0;
    while (i < nums.length - 2){
        for (let i2 = i+1; i2 < nums.length -1; i2++){
            let sum1 = nums[i] + nums[i2];
            let j = i2 + 1;
            while (j <= nums.length - 1){
                //console.log('num1: ' + nums[i] + " num2: " + nums[i2] + ' num3: ' + nums[j]);
                //console.log('a: ' + i + " b: " + i2 + " c: " + j);
                let sum2 = sum1 + nums[j];
                //console.log('sum: ' + sum2);
                for (let k = 2; k < sum2; k++){
                    if (sum2 % k === 0) {
                        k = sum2;
                    }
                    if (k === sum2 - 1) result++;
                }
                j++;
            }
        }
        i++;
    }

    return result;
}
