function solution(sequence) {
    let [min, max] = [0, 0];
    sequence.forEach((cur, idx) => {
        if(idx !== 0)
            sequence[idx] = cur * (idx % 2 === 0 ? 1: -1) + sequence[idx - 1];
        min = Math.min(min, sequence[idx]);
        max = Math.max(max, sequence[idx]);
    });
    return max - min;
}