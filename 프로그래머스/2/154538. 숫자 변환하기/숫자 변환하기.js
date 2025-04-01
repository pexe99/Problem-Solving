function solution(x, y, n) {
    const queue = [[y, 0]];
    while(queue.length) {
        const [current, counter] = queue.shift();
        if(current === x) return counter;
        else if(current > 1) {
            if(current % 2 === 0)
                queue.push([current / 2, counter + 1]);
            if(current % 3 === 0) 
                queue.push([current / 3, counter + 1]);
            if(current - n >= x)
                queue.push([current - n, counter + 1]);
        }
    }
    return -1;
}