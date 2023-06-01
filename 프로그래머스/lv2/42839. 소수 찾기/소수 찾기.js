function solution(numbers) {
    let result = [];
    let visited = new Array(numbers.length).fill(false);
    
    function DFS(current) {
        if(isPrime(Number(current))) result.push(Number(current)); 
        [...numbers].forEach((v, i) => {
            if(!visited[i]) {
                visited[i] = true;
                DFS(current + v);
                visited[i] = false;
            }
        })
    }
    DFS("");
    
    return [...new Set(result)].length;
}

function isPrime(n) {
    if(n === 1 || n === 0) return false;
    let counter = 0;
    for(let i = 2; i <= Math.sqrt(n); i++) if(n % i === 0) counter++;
    return counter === 0;
}