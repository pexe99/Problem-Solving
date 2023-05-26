function solution(my_string, queries) {
    let result = my_string;
    queries.forEach(([a, b]) => {
        result = result.slice(0, a) + [...result.slice(a, b + 1)].reverse().join("") + result.slice(b + 1);
    })
    return result;
}