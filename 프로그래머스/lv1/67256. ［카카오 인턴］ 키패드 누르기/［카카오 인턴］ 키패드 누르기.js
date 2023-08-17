function solution(numbers, hand) {
    // keypad position
    const LEFT = {1: [0, 0], 4: [0, 1], 7: [0, 2]};
    const RIGHT = {3: [2, 0], 6: [2, 1], 9: [2, 2]};
    const MIDDLE = {2: [1, 0], 5: [1, 1], 8: [1, 2], 0: [1, 3]};
    // hand position
    let lHand = [0, 3], rHand = [2, 3];
    // result
    const result = [];
    
    numbers.forEach((v) => {
        if(v in LEFT) {
            result.push("L");
            lHand = LEFT[v];
        }
        else if(v in RIGHT) {
            result.push("R");
            rHand = RIGHT[v];
        }
        else {
            const current = MIDDLE[v];
            const lvalue = Math.abs(current[0] - lHand[0]) + Math.abs(current[1] - lHand[1]);
            const rvalue = Math.abs(current[0] - rHand[0]) + Math.abs(current[1] - rHand[1]);
            if(lvalue > rvalue || (lvalue === rvalue && hand === 'right')) {
                result.push("R");
                rHand = MIDDLE[v];
            }
            if(lvalue < rvalue || (lvalue === rvalue && hand === 'left')) {
                result.push("L");
                lHand = MIDDLE[v];
            }
        }
    })
    return result.join('');
}