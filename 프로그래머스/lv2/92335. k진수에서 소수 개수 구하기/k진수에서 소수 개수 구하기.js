function solution(n, k) {
    let answer = 0;
    n.toString(k).split('0').filter((v) => v !== '1' && v !== '').forEach((v) => {
        let counter = 0;
        for(let i = 2; i <= Math.sqrt(+v); i++) if(+v % i === 0) counter++;
        if(counter === 0) answer++;
    })
    return answer;
}