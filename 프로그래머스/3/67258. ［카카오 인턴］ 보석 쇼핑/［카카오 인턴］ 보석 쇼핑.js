function solution(gems) {
    let [start, end] = [0, -1], [resStart, resEnd] = [-1, gems.length];
    let current = new Map(), isAll = new Set(), kind = new Set(gems);
    kind.forEach((e) => current[e] = 0);
    while(end < gems.length - 1) {
        current[gems[++end]]++; isAll.add(gems[end]);
        while(current[gems[start]] > 1) current[gems[start++]]--;
        if(isAll.size === kind.size && resEnd - resStart > end - start) {
            [resStart, resEnd] = [start, end];
        }
    }
    return [resStart + 1, resEnd + 1];
}