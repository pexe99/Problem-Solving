function solution(a, b, n) {
    let cola = 0;
    
    while(n >= a) {
        let cur = Math.floor(n / a) * b;
        n = n % a + cur;
        cola += cur;
    }
    
    return cola;
}