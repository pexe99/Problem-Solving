function solution(my_string) {
    let result = [];
    for(let i = 1; i <= my_string.length; i++) {
        result.push(my_string.slice(my_string.length - i, my_string.length));
    }
    return result.sort();
}