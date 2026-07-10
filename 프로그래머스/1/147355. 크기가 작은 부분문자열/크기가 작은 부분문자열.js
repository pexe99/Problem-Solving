function solution(t, p) {
    let queue = [], result = 0;
    for(let i = 0; i < t.length; i++) {
        queue.push(t[i]);
        if(p.length < queue.length) queue.shift();
        if(p.length !== queue.length) continue;
        result += +queue.join('') <= +p ? 1 : 0;
    }
    return result;
}