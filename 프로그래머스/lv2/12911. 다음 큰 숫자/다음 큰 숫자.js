function solution(n) {
    let countOne = [...n.toString(2)].filter((v) => v === '1').length;
    while(n++) {
        if([...n.toString(2)].filter((v) => v === '1').length === countOne) return n;
    }
}