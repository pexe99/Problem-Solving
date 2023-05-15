function solution(k, tangerine) {
    const tangerineType = {};
    
    tangerine.forEach((t) => {
        if(tangerineType[t]) tangerineType[t]++;
        else tangerineType[t] = 1;
    })
    
    let sortable = [];
    
    for(let t in tangerineType) sortable.push([t, tangerineType[t]]);
    sortable.sort((a, b) => b[1] - a[1]);
    
    let result = 0;
    
    for(let i = 0; i < sortable.length; i++) {
        result++;
        if(k - sortable[i][1] <= 0) return result;
        else k -= sortable[i][1];
    }
}