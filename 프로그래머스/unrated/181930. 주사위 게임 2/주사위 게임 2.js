function solution(a, b, c) {
    const normal = a + b + c;
    const square = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(c, 2);
    const cubic = Math.pow(a, 3) + Math.pow(b, 3) + Math.pow(c, 3);
    
    if(a === b && b === c) return normal * square * cubic;
    else if(a === b || b === c || c === a) return normal * square;
    else return normal;
}