function solution(polynomial) {
    let terms = polynomial.split(" + ");
    let result = [0, 0];
    
    for(cur of terms) {
        let xIndex = cur.indexOf('x');
        if(xIndex === 0) result[0]++;
        else if (xIndex !== -1) result[0] += Number(cur.slice(0, -1));
        else result[1] += Number(cur);
    }
    
    let answer = [];
    
    if(result[0]) answer.push(`${result[0] === 1 ? '' : result[0]}x`);
    if(result[1]) answer.push(String(result[1]));
    
    return answer.join(" + ");
}