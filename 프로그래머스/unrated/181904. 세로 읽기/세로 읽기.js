function solution(my_string, m, c) {
    return my_string.match(new RegExp(`.{${m}}`, 'g')).reduce((r, v) => r + v[c - 1], '');
}