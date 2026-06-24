function solution(dist_limit, split_limit) {
    let result = 0;
    
    for(let twoBlock = 0; 2 ** twoBlock <= split_limit; twoBlock++) {
        const remain = split_limit / (2 ** twoBlock);
        let threeBlock = 0;
        while(3 ** (threeBlock + 1) <= remain) threeBlock++;
        
        let leaf = 1;
        let frontier = 1;
        let distCounter = 0;
        let twoCounter = 0;
        let threeCounter = 0;
        while(twoCounter < twoBlock || threeCounter < threeBlock) {
            const curDist = twoCounter < twoBlock ? 2 : 3;
            curDist === 2 ? twoCounter++ : threeCounter++;
            if(dist_limit < distCounter + frontier) {
                const left = dist_limit - distCounter;
                leaf += (curDist - 1) * left;
                break;
            } else {
                leaf += (curDist - 1) * frontier;
                distCounter += frontier;
                frontier *= curDist;
            }
        }
        result = Math.max(leaf, result);
    }
    return result;
}