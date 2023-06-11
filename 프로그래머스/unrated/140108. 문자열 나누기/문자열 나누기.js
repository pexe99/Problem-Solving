function solution(s) {
    let counter = [0, 0], current = '', result = 0;
    for(let i = 0; i < s.length; i++) {
        if(current === '') {
            result++;
            current = s[i];
            counter[0]++;
        }
        else {
            if(current === s[i]) counter[0]++;
            else counter[1]++;
            
            if(counter[0] === counter[1]) {
                current = '';
                counter = [0, 0];
            }
        }
    }
    return result;
}