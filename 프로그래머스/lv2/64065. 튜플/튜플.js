function solution(s) {
    let tuple = JSON.parse(s.replace(/\{/g, '[').replace(/\}/g, ']'));
    tuple.sort((a, b) => a.length - b.length);
    const array = tuple.reduce((s, v) => s.concat(v), []);
    return [...new Set(array)];
}