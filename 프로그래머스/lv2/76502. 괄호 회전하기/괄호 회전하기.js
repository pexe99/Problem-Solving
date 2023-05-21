function solution(s) {
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        s = s.slice(1) + s[0];
        let stack = [];
        let current = true;
        for(let j = 0; j < s.length; j++) {
            if(s[j] === '(' || s[j] === '{' || s[j] === '[') stack.push(s[j]);
            else if(s[j] === ')' && stack.at(-1) === '(') stack.pop();
            else if(s[j] === '}' && stack.at(-1) === '{') stack.pop();
            else if(s[j] === ']' && stack.at(-1) === '[') stack.pop();
            else {
                current = false;
                break;
            }
        }
            if(stack.length === 0 && current) result++;
    }
    
    return result;
}