function solution(my_string) {
    let result = new Array(52).fill(0);
    [...my_string].forEach((v) => {
        if('A' <= v && v <= 'Z') result[v.charCodeAt() - 65]++;
        else result[v.charCodeAt() - 97 + 26]++;
    });
    return result;
}