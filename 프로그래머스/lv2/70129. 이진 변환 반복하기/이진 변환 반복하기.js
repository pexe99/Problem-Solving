function solution(s) {
    let binaryCount = 0;
    let deleteZero = 0;
    
    while(s !== "1") {
        let currentLength = s.length;
        s = [...s].filter((cur) => Number(cur));
        deleteZero += currentLength - s.length;
        s = s.length.toString(2);
        binaryCount++;
    }
    
    return [binaryCount, deleteZero];
}