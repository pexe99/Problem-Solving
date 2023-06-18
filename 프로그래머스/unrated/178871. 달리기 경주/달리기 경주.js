function solution(players, callings) {
    const rankByNum = new Map(), rankByName = new Map();
    players.forEach((name, i) => {
        rankByNum.set(i, name);
        rankByName.set(name, i);
    });
    
    callings.forEach((name) => {
        let curRank = rankByName.get(name);
        let frontName = rankByNum.get(curRank - 1);
        rankByName.set(name, curRank - 1);
        rankByName.set(frontName, curRank);
        rankByNum.set(curRank - 1 , name);
        rankByNum.set(curRank, frontName);
    });
    
    return Array.from(rankByNum.values());
}