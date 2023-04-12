function solution(my_string) {
    let result = new Function(`return ${my_string}`);
    return result();
}