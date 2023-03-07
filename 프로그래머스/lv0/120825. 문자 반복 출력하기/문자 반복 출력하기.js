function solution(my_string, n) {
    return [...my_string].map((c) => {
        return c.repeat(n);
    }).join("");
}