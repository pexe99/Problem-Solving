function solution(n) {
    let result = 0;
    
    const DFS = (open, close) => {
        if(open === n) {
            result++;
            return;
        }
        if(open < n) DFS(open + 1, close);
        if(close < open) DFS(open, close + 1);
    }
    
    DFS(0, 0);
    return result;
}