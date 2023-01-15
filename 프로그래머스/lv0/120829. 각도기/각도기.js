function solution(angle) {
    return [0, 90, 91, 180].filter(x => x <= angle).length;
}