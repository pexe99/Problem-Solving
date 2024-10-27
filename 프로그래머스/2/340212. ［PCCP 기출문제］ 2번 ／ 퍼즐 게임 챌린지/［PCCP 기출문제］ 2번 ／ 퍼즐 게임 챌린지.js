function solution(diffs, times, limit) {
    limit -= times.reduce((acc, cur) => acc + cur);
    const max = diffs.reduce((acc, cur) => Math.max(acc, cur));
    let [start, end] = [1, max];
    while(start < end) {
        let middle = Math.floor((start + end) / 2);
        let current = 0;
        for(let i = 0; i < diffs.length; i++) {
            if(middle < diffs[i]) {
                current += (times[i] + (times[i - 1] || 0)) * (diffs[i] - middle);
            }
            if(limit < current) break;
        }
        if(current <= limit) end = middle;
        else start = middle + 1;
    }
    return end;
}