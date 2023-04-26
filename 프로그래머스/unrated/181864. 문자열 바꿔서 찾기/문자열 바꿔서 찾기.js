function solution(myString, pat) {
    return Number([...myString].map((v) => {
        if(v === 'A') return 'B';
        else return 'A';
    }).join('').includes(pat));
}