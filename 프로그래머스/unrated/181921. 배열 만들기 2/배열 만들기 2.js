function solution(l, r) {
    let result = [];
    for(let i = l; i <= r; i++) {
        let current = [...String(i)].filter((v) => v !== '5' && v !== '0');
        if(!current.length) result.push(i);
    }
    return result.length ? result : [-1];
}