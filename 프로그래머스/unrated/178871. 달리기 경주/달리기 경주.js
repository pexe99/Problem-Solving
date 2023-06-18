function solution(players, callings) {
    const rank = {};
    players.forEach((name, i) => rank[name] = i);
    
    
    callings.forEach((name) => {
        let curRank = rank[name];
        let frontName = players[curRank - 1];
        players[curRank] = frontName;
        players[curRank - 1] = name;
        rank[name]--;
        rank[frontName]++;
    });
    
    return players;
}