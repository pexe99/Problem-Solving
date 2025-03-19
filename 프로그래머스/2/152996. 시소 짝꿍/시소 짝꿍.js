const SEESAW = [2, 3, 4];

const solution = (weights) => {
    const counter = {};
    weights.forEach((weight) => {
        counter[weight] = (counter[weight] || 0) + 1;
    });
    
    let result = 0;
    for(let key in counter) {
        const current = counter[key];
        result += current * (current - 1) / 2;
        result += current * (counter[key * 4 / 3] || 0);
        result += current * (counter[key * 4 / 2] || 0);
        result += current * (counter[key * 3 / 2] || 0);
    }
    
    return result;
}