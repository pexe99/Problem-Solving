function solution(n, words) {
    let answer = 0;
    
    words.reduce((prev, cur, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(cur) !== -1 || prev !== cur[0]) ? idx : answer);
        return cur[cur.length-1];
    }, "")

    return answer ? [answer % n + 1, Math.floor(answer / n) + 1] : [0, 0];
}