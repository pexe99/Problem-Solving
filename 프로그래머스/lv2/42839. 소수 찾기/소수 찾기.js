function solution(numbers) {
    let result = [];
    let visited = new Array(numbers.length).fill(false);
    
    function DFS(current) {
        let num = Number(current);
        let counter = 0;
        for(let j = 2; j <= Math.sqrt(num); j++) if(num % j === 0) counter++;
        if(counter === 0) result.push(num);
        
        [...numbers].forEach((v, i) => {
            if(!visited[i]) {
                visited[i] = true;
                DFS(current + v);
                visited[i] = false;
            }
        })
    }
    
    DFS("");
    
    return [...new Set(result)].filter((v) => v !== 1 && v !== 0).length;
}