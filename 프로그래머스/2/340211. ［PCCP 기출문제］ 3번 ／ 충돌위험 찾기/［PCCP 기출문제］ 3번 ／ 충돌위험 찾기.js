function solution(points, routes) {
    let queue = [], tick = 0, result = 0;
    routes.forEach(([start, next, ...rest]) => {
       queue.push([...points[start - 1], ...points[next - 1], (rest || [])]); 
    });
    
    while(queue.length) {
        let nextQueue = [];
        const counter = {};
        for(let [cr, cc, nr, nc, rest] of queue) {
            const key = `${cr}:${cc}`;
            counter[key] = (counter[key] || 0) + 1;
            if(cr === nr && cc === nc) {
                if(rest.length === 0) continue;
                [nr, nc] = points[rest.shift() - 1];
            }
            
            if(cr !== nr) cr += Math.sign(nr - cr);
            else cc += Math.sign(nc - cc);
            nextQueue.push([cr, cc, nr, nc, rest]);
        }
        result += +Object.keys(counter).filter((key) => counter[key] > 1).length;
        queue = [...nextQueue];
        tick++;
    }
    
    return result;
}