function solution(s) {
    let stack = [];
    
    s.split(" ").map((cur) => {
        if(cur === "Z") stack.pop();
        else stack.push(Number(cur));
    })
    
    return stack.length === 0 ? 0 : stack.reduce((cur, sum) => sum  = sum + cur);
}