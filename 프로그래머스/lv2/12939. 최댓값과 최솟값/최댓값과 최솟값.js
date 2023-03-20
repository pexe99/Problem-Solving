function solution(s) {
    s = s.split(" ").map((n) => parseInt(n)).sort((a, b) => a - b);
    return s[0] + " " + s[s.length - 1];
}