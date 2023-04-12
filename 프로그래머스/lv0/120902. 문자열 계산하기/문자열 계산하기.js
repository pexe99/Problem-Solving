function solution(my_string) {
    const array = my_string.split(' ');
    while(array.length > 1) array.unshift(+array.shift() + (array.shift() === '+' ? 1 : -1) * array.shift());
    return array[0];
}