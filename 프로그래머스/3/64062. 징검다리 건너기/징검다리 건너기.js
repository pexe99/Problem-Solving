function solution(stones, k) {
    let [start, end] = [1, 200000000];
    while(start <= end) {
        let mid = Math.floor((start + end) / 2);
        let counter = 0;
        for(let stone of stones) {
            if(stone - mid <= 0) counter++;
            else counter = 0;
            if(counter === k) break;
        }
        if(counter === k) end = mid - 1;
        else start = mid + 1;
    }
    return start;
}
