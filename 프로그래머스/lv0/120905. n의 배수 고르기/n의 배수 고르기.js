function solution(n, numlist) {
    return numlist.filter((cur) => cur % n === 0);
}