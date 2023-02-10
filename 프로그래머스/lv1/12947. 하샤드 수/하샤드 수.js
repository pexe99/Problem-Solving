function solution(x) {
    if(x < 10) return true;
    else {
        return x % [...String(x)].reduce((cur, sum) => sum = parseInt(sum) + parseInt(cur)) === 0;
    }
}