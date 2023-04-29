function solution(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        map.set(participant[i], (map.get(participant[i]) || 0) + 1);
        map.set(completion[i], (map.get(completion[i]) || 0) - 1);
    }

    for(let [key, value] of map) {
        if(value > 0) return key;
    }
}