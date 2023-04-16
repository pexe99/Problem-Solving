function solution(nums) {
    let result = 0;
    
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            for(let k = j + 1; k < nums.length; k++) {
                let current = nums[i] + nums[j] + nums[k];
                let divisor = 0;
                for(let l = 1; l <= current; l++) {
                    if(current % l === 0) divisor++;
                }
                if(divisor === 2) result++;
            }
        }
    }
    
    return result;
}