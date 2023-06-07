function solution(arr) {
    let counter = 0;
    for(;;counter++) {
        let current = arr.map((v) => v);
        arr = arr.map((v) => {
            if(v >= 50 && !(v % 2)) return v / 2;
            if(v < 50 && v % 2) return v * 2 + 1;
            return v;
        });
        if(JSON.stringify(current) === JSON.stringify(arr)) break;
    }
    return counter;
}