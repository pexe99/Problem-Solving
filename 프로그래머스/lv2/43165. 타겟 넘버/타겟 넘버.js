function solution(numbers, target) {
    let result = 0;
    
    function DFS(depth, current) {
        if(depth === numbers.length) {
            if(target === current) result++;
        }
        else {
            DFS(depth + 1, current + numbers[depth]);
            DFS(depth + 1, current - numbers[depth]);
        }
    }
    
    DFS(0, 0);
    
    return result;
}