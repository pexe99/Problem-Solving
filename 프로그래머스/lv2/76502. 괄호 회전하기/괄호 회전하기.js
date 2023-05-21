function solution(s) {
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        let current = s;
        while(true) {
            const curLength = current.length;
            current = current.replace(/\(\)|\[\]|\{\}/g, '');
            if(curLength === current.length) break;
        }
        if(current === '') result++;
    }
    
    return result;
}