function solution(date1, date2) {
    for(let i = 0; i < 3; i++) {
        if(date1[i] - date2[i] < 0) return 1;
        if(date1[i] - date2[i] > 0) break;
    }
    return 0;
}