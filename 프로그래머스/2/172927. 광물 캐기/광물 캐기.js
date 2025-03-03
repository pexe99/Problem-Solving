const MINERAL_INDEX = {
    diamond: 0,
    iron: 1,
    stone: 2,
}

const FATIGUE = [
    [1, 1, 1],
    [5, 1, 1],
    [25, 5, 1]
];

function solution(picks, minerals) {
    const pase = [];
    while(minerals.length) {
        const current = minerals.splice(0, 5);
        pase.push(current.reduce((acc, cur) => {
            acc[MINERAL_INDEX[cur]]++;
            return acc;
        }, [0, 0, 0]));
    }
    pase.splice(picks.reduce((acc, cur) => acc + cur));
    pase.sort((a, b) => +b.join("") - +a.join(""));
    
    let result = 0, pickIndex = 0;
    while(pickIndex < picks.length && pase.length) {
        while(picks[pickIndex] && pase.length) {
            pase.shift().forEach((count, index) => {
                result += FATIGUE[pickIndex][index] * count;
            });
            picks[pickIndex]--;
        }
        pickIndex++;
    }
                                 
    return result;
}