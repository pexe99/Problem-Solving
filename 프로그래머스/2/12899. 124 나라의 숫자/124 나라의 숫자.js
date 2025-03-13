const getNewNotation = (decimal) => {
    const numbers = [1, 2, 4];
    let result = '';
    while(0 < decimal) {
        let remainder = decimal % 3;
        decimal = Math.floor(decimal / 3);
        if(remainder === 0) {
            remainder = 3;
            decimal--;
        }
        result = numbers[remainder - 1] + result;
    }
    return result;
}

function solution(n) {
    return getNewNotation(n);
}