function solution(gems) {
    let [start, end] = [0, -1], [resStart, resEnd] = [-1, gems.length];
    let current = new Map(), types = new Set(gems).size;
    while(++end < gems.length) {
        current.set(gems[end], (current.get(gems[end]) || 0) + 1);
        while(current.get(gems[start]) > 1) {
            current.set(gems[start], current.get(gems[start]) - 1);
            start++;
        }
        if(current.size === types && resEnd - resStart > end - start) {
            [resStart, resEnd] = [start, end];
        }
    }
    return [resStart + 1, resEnd + 1];
}