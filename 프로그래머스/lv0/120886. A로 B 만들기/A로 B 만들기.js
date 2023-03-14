function solution(before, after) {
    return [...before].sort().toString() === [...after].sort().toString() ? 1 : 0;
}