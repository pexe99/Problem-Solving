function solution(storey) {
    let result = 0;
    while(storey) {
        let current = storey % 10;
        storey = Math.floor(storey / 10);
        let next = storey % 10;
        if(current < 5) result += current;
        else if(current === 5) {
            if(next < 5) result += current;
            else {
                result += (10 - current);
                storey++;
            }
        }
        else {
            result += (10 - current);
            storey++;
        }
    }
    return result;
}