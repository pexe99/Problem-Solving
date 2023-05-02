function solution(keymap, targets) {
    const keyCounter = {};
    
    keymap.forEach((key) => {
        [...key].forEach((v, idx) => {
            keyCounter[v] = Math.min(idx + 1, keyCounter[v] ? keyCounter[v] : 100);
        })
    })
    
    let result = targets.map((v) => {
        let current = 0;
        for(let i = 0; i < v.length; i++) {
            if(!keyCounter[v[i]]) return -1;
            current += keyCounter[v[i]];
        }
        return current;
    });
    return result;
}