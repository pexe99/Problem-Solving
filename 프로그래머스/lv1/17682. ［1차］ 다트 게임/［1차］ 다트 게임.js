function solution(dartResult) {
    let result = [];
    
    let current = '';
    [...dartResult].forEach((v) => {
        if('0' <= v && v <= '9') current += v;
        else if(v === '*') {
            if(result.length >= 2) result[result.length - 2] *= 2;
            result[result.length - 1] *= 2;
        }
        else if(v === '#') {
            result[result.length - 1] *= -1;
        }
        else {
            if(v === 'S') result.push(Number(current));
            if(v === 'D') result.push(Math.pow(Number(current), 2));
            if(v === 'T') result.push(Math.pow(Number(current), 3));
            current = '';
        }
    });
    
    return result.reduce((s, v) => s + v);
}