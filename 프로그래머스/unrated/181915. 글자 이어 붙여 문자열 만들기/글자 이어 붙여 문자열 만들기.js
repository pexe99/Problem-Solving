function solution(my_string, index_list) {
    return index_list.reduce((result, v) => result + my_string[v], '');
}