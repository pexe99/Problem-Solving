function solution(my_strings, parts) {
    return my_strings.reduce((r, v, idx) => r + v.slice(parts[idx][0], parts[idx][1] + 1), '');
}