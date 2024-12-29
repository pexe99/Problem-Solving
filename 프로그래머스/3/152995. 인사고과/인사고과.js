function solution(scores) {
    const targetScore = scores[0];
    const totalScore = targetScore[0] + targetScore[1];
    scores.sort((a, b) => b[0] - a[0] || a[1] - b[1]);
    
    let result = 1, maxPeerScore = 0;
    for(let [workScore, peerScore] of scores) {
        if(peerScore >= maxPeerScore) {
            maxPeerScore = peerScore;
            if(workScore + peerScore > totalScore) result++;
        } else {
            if(targetScore[0] === workScore && targetScore[1] === peerScore)
                return -1;
        }
    }
    return result;
}