function solution(s) {
    return [...s].map((v, idx) => {
        let current = s.slice(0, idx).lastIndexOf(v);
        return current === -1 ? current : idx - current;
    })
}