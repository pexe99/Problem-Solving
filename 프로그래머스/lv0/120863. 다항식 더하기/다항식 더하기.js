function solution(polynomial) {
    let terms = polynomial.split(" + ");
    let result = [0, 0];
    
    for(cur of terms) {
        let xIndex = cur.indexOf('x');
        if(xIndex === 0) result[0]++;
        else if (xIndex !== -1) result[0] += Number(cur.slice(0, -1));
        else result[1] += Number(cur);
    }
    
    if(result[0] === 0 && result[1] === 0) return "0";
    else if(result[0] === 0) return String(result[1]);
    else if(result[1] === 0) {
        if(result[0] === 1) return "x";
        else return `${result[0]}x`;
    }
    else {
        if(result[0] === 1) return `x + ${result[1]}`;
        else return `${result[0]}x + ${result[1]}`;
    }
}