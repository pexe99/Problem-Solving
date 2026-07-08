const solution = (players, callings) => {
    const playerIndex = {};
    players.forEach((name, index) => playerIndex[name] = index);
    
    callings.forEach((name) => {
        const index = playerIndex[name];
        const prevName = players[index - 1];
        [players[index], players[index - 1]] = [players[index - 1], players[index]];
        [playerIndex[name], playerIndex[prevName]] = [playerIndex[prevName], playerIndex[name]];
    })
    
    return players;
}