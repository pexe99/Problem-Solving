function solution(k, tangerine) {
    const tangerineType = {}; 
    
    tangerine.forEach((t) => tangerineType[t] = (tangerineType[t] || 0) + 1);  
    
    const sortedValue = Object.values(tangerineType).sort((a, b) => b - a);
    
    let result = 0;
    
    for(let i = 0; i < sortedValue.length; i++) {
        result++;
        if(k - sortedValue[i] <= 0) return result;
        else k -= sortedValue[i];
    }
}