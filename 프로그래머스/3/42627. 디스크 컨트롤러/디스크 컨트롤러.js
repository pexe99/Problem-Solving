function solution(jobs) {
    const heap = [];
    jobs.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    let timer = 0, result = 0, work = jobs.length;
    while(jobs.length || heap.length) {
        let current;
        if(heap.length === 0) current = jobs.shift();
        else current = heap.shift();
        timer = Math.max(timer, current[0]) + current[1];
            result += timer - current[0];
        while(jobs.length && jobs[0][0] <= timer) heap.push(jobs.shift());
        heap.sort((a, b) => a[1] - b[1]);
    }
    return Math.floor(result / work);
}