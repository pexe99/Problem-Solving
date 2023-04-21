function solution(start, end) {
    return Array.from({length: start + 1}, (_, i) => i).splice(end).reverse();
}