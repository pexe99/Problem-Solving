/*
category: 구현

[input]
- n: 유사 칸토어 비트열의 순번
- l: 구간 시작 지점
- r: 구간 끝 지점

[output]
- 구간은 폐구간으로 주어지며, 구간 내의 1의 개수를 return

[solution]
- 최악의 경우, 20번째 칸토어 비트열을 만드는 것은 비효율적임
- 시작 지점과 끝 지점을 포함하는 범위를 파악
*/

function solution(n, l, r) {
    let counter = 0;
    
    const check = (number) => {
        if(number % 5 === 2) return false;
        return number < 5 ? true : check(Math.floor(number / 5));
    }
    
    for(let i = l - 1; i < r; i++) {
        let current = i;
        counter += +check(i);
    }
    
    return counter;
}