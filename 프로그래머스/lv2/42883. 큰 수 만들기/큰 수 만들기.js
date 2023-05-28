function solution(number, k) {
    let result = [];
    
    [...number].map((v) => Number(v)).forEach((v, i) => {
        while(true) {
            if(result.length === 0) {
                result.push(v);
                break;
            }
            else if(k + result.length !== i && result.at(-1) < v) result.pop();
            else {
                if(result.length === number.length - k) break;
                result.push(v);
                break;
            }
            
        }
    });
    
    return result.join('');
}