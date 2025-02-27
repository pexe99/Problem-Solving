function solution(players, m, k) {
    let server = 0, counter = 0;
    const endPoint = Array.from({length: players.length}, () => 0);
    
    players.forEach((current, index) => {
        server += endPoint[index];
        if((server + 1) * m <= current) {
            const need = Math.floor(current / m) - server;
            endPoint[index + k] = -need;
            server += need;
            counter += need;
        }
    });
    
    return counter;
}