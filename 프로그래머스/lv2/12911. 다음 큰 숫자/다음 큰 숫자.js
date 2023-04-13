function solution(n, cur = n + 1) {
    return n.toString(2).match(/1/g).length === cur.toString(2).match(/1/g).length ? cur : solution(n, cur + 1);
}