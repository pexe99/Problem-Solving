function solution(my_string, is_suffix) {
    return [...my_string].reverse().join('').indexOf([...is_suffix].reverse().join('')) === 0 ? 1 : 0;
}