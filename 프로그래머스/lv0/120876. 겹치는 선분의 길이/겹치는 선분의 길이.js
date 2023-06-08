function solution(lines) {
    let result = new Array(201).fill(0);
    lines.forEach(([s, e]) => {
        for(let i = s + 100; i < e + 100; i++) result[i]++;
    });
    return result.filter((v) => v >= 2).length;
}