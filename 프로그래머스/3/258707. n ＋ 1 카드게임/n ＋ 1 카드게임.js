function solution(coin, cards) {
    const n = cards.length;
    const hand = {pair: 0, cards: new Set()};
    const keep = {pair: 0, cards: new Set()};
    cards.splice(0, n / 3).forEach((card) => {
        if(hand.cards.has(n - card + 1)) {
            hand.pair++;
            hand.cards.delete(n - card + 1);
        } else hand.cards.add(card);
    });
    
    let index = 0, round = 1;
    while(index < cards.length) {
        let draw = [cards[index++], cards[index++]];
        draw.forEach((card) => {
            if(hand.cards.has(n + 1 - card) && coin) {
                coin--; hand.pair++;
                hand.cards.delete(n + 1 - card);
            } else if(keep.cards.has(n + 1 - card)) {
                keep.pair++;
                keep.cards.delete(n + 1 - card);
            } else keep.cards.add(card);
        });
        if(hand.pair) hand.pair--;
        else if(keep.pair && 2 <= coin) {
            keep.pair--; coin -= 2;
        } else break;
        round++;
    }

    return round;
}