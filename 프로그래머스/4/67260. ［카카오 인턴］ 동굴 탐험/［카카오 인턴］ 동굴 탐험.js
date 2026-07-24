function solution(n, path, order) {
    const graph = Array.from({length: n}, () => []);
    path.forEach(([from, to]) => {
        graph[from].push(to);
        graph[to].push(from);
    })
    
    const beforeOf = new Array(n).fill(-1);
    const afterOf = new Array(n).fill(-1);  
    const visited = new Array(n).fill(false);
    const waiting = new Array(n).fill(false);
    
    order.forEach(([before, after]) => {
        afterOf[before] = after;
        beforeOf[after] = before;
    });
    
    if (beforeOf[0] !== -1) return false;
    
    let index = 0;
    let counter = 1;
    const queue = [0];
    visited[0] = true;
    while(index < queue.length) {
        const current = queue[index++];
        const unlocked = afterOf[current];
        if(unlocked !== -1 && waiting[unlocked]) {
            visited[unlocked] = true;
            queue.push(unlocked);
            counter++;
        }
        
        for(const next of graph[current]) {
            if(visited[next]) continue;
            const required = beforeOf[next];
            if(required !== -1 && !visited[required]) {
                waiting[next] = true;
                continue;
            }
            visited[next] = true;
            queue.push(next);
            counter++;
        }
    }
    
    return counter === n;
}