function solution(n) {
    return getPrimeNum(n);
}

function getPrimeNum(num) {
    let array = Array.from({length: num}, () => true);
    for(let i = 2; i <= num; i++) {
        if(array[i]) {
            for(let j = 2; j * i <= num; j++) {
                array[j * i] = false;
            }
        }
    }
    return array.filter((cur) => cur === false).length;
}