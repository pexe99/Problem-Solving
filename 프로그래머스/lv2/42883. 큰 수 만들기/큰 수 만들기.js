function solution(number, k) {
    let result = [];
    let counter = 0;
    
    [...number].map((v) => Number(v)).every((v, i) => {
        if(result.length === 0) result.push(v);
        else {
            while(result.at(-1) < v) {
                result.pop();
                counter++;
            
                if(counter === k) {
                    result.push(number.slice(i));
                    return false;
                }
                if(result.length === 0) break;
            }
        result.push(v);
        }
        return true;
    });
    
    return result.join('').slice(0, number.length - k);
}