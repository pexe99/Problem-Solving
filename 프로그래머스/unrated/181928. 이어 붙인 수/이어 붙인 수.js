function solution(num_list) {
    let odd = [], even = [];
    num_list.forEach((v) => {
        if(v % 2) odd.push(v);
        else even.push(v);
    });
    return +odd.join('') + +even.join('');
}