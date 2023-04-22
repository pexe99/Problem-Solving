function solution(number) {
    return [...number].reduce((sum, v) => sum + +v, 0) % 9;
}