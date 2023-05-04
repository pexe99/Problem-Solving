function solution(num_list) {
    return num_list.reduce((r, v) => {
        let cur = 0;
        while(v !== 1) {
            v = Math.floor(v / 2);
            cur++;
        }
        r += cur;
        return r;
    }, 0);
}