function solution(arr, queries) {
    let result = [];
    queries.forEach(([s, e, k]) => {
        let current = arr.slice(s, e + 1).filter((v) => v > k);
        if(current.length) result.push(Math.min(...current));
        else result.push(-1);
    });
    return result;
}