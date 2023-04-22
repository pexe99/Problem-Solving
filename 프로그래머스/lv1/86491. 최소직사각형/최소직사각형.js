function solution(sizes) {
    sizes = sizes.map((v) => v.sort((a, b) => a - b));
    let maxWeight = 0, maxHeight = 0;
    
    for(let card of sizes) {
        maxWeight = maxWeight < card[0] ? card[0] : maxWeight;
        maxHeight = maxHeight < card[1] ? card[1] : maxHeight;
    }
    
    return maxWeight * maxHeight;
}