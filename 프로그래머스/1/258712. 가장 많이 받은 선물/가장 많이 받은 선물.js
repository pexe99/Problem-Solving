const solution = (friends, gifts) => {
    const n = friends.length;
    const giftIndex = {};
    const giftCounter = {};
    const giftHistory = {};
    
    friends.forEach((name) => {
        giftIndex[name] = 0;
        giftCounter[name] = 0;
        giftHistory[name] = {};
    });
    
    gifts.forEach((edge) => {
        const [from, to] = edge.split(' ');
        giftIndex[from]++;
        giftIndex[to]--;
        giftHistory[edge] = (giftHistory[edge] || 0) + 1;
    });
    
    for(const a of friends) {
        for(const b of friends) {
            if(a === b) continue;
            const aToB = giftHistory[`${a} ${b}`] ?? 0;
            const bToA = giftHistory[`${b} ${a}`] ?? 0;
            if(aToB > bToA) giftCounter[a]++;
            else if(aToB === bToA && giftIndex[a] > giftIndex[b]) giftCounter[a]++;
        }
    }
    
    return Math.max(...Object.values(giftCounter));
}