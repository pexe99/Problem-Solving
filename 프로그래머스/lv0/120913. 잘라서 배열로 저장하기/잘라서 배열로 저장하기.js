function solution(my_str, n) {
    my_str = [...my_str];
    return new Array(Math.ceil(my_str.length / n)).fill("").map((cur) => my_str.splice(0, n).join(""));
}