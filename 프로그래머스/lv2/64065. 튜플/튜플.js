function solution(s) {
    let answer = [];
    const tuple = s.slice(2, s.length - 2).split("},{").map((v) => v.split(','));
    tuple.sort((a, b) => a.length - b.length);
    tuple.forEach((array) => {
        array.forEach((v) => {
            if(!answer.includes(Number(v))) answer.push(Number(v));
        })
    });
    return answer;
}