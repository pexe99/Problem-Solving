function solution(s) {
    return s.toLowerCase().split(" ").map((cur) => cur.charAt(0).toUpperCase() + cur.slice(1)).join(" ");
}