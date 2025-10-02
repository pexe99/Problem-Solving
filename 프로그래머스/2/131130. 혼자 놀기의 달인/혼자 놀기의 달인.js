function solution(cards) {
    const group = [];
    for(let i = 0; i < cards.length; i++) {
        let index = i;
        let counter = 0;
        while(cards[index] !== -1) {
            let next = cards[index] - 1;
            cards[index] = -1;
            index = next;
            counter++;
        }
        group.push(counter);
    }
    group.sort((a, b) => a - b);
    return group.at(-1) * (group.at(-2) || 0);
}