function solution(arr, query) {
    query.forEach((q, i) => {
        if(i % 2) arr.splice(0, q);
        else arr.splice(q + 1);
    });
    return arr;
}