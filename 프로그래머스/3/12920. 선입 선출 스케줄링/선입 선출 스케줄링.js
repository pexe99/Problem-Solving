function solution(n, cores) {
    let [start, end] = [1, n * Math.min(...cores)];

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let current = cores.reduce((acc, cur) => acc + Math.ceil(mid / cur), 0);
        
        if (n <= current) end = mid - 1;
        else start = mid + 1;
    }
    
    const completedTask = cores.reduce((acc, cur) => acc + Math.ceil(end / cur), 0);
    let remainTask = n - completedTask;
    for(let i = 0; i < cores.length; i++) {
        if(end % cores[i] === 0) {
            remainTask--;
            if(remainTask === 0) return i + 1;
        }
    }
}
