function solution(A, B) {
    A.sort((a, b) => b - a);
    B.sort((a, b) => a - b);
    
    let result = 0;
    A.forEach((e) => {
        if(e < B.at(-1)) {
            B.pop();
            result++;
        }
        else B.shift();
    });
    
    return result;
}