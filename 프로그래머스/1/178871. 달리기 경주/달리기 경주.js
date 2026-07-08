const swap = (obj, i, j) => {
    [obj[i], obj[j]] = [obj[j], obj[i]];
}

const solution = (players, callings) => {
    const playerIndex = {};
    players.forEach((name, index) => playerIndex[name] = index);
    
    callings.forEach((name) => {
        const index = playerIndex[name];
        const prevName = players[index - 1];
        swap(players, index, index - 1);
        swap(playerIndex, name, prevName);
    })
    
    return players;
}