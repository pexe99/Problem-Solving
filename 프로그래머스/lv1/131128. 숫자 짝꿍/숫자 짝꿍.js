function solution(X, Y) {
    const xCounter = {}, yCounter = {};
    [...X].forEach((v) => xCounter[v] = (xCounter[v] || 0) + 1);
    [...Y].forEach((v) => yCounter[v] = (yCounter[v] || 0) + 1);
    
    let sorted = Object.keys(xCounter).sort((a, b) => b - a);
    let resultArray = sorted.map((v) => v.repeat(Math.min(xCounter[v], yCounter[v]))).filter((v) => v !== "");
    if(resultArray.length === 1 && +resultArray.join("") === 0) return "0";
    return resultArray.length ? resultArray.join("") : "-1";
}