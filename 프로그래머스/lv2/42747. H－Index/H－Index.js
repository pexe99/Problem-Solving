function solution(citations) {
    citations.sort((a, b) => a - b);
        
    for(let i = citations.length; i >= 0; i--) {
        if(citations[citations.length - i] >= i) return i;
    }
    
    return 0;
}