const compare = (beginning, target, row, col) => {
    for(let r = 0; r < beginning.length; r++) {
        for(let c = 0; c < beginning[0].length; c++) {
            let diff = ((row >> r) % 2 + ((col >> c) % 2)) % 2;
            if((beginning[r][c] + diff) % 2 !== target[r][c]) return false; 
        }
    }
    return true;
}

function solution(beginning, target) {
    const maximum = beginning.length * beginning[0].length + 1;
    let result = maximum;
    for(let row = 0; row < 2 ** beginning.length; row++) {
        for(let col = 0; col < 2 ** beginning[0].length; col++) {
            let counter = `${row.toString(2)}${col.toString(2)}`;
            counter = counter.split("1").length - 1;
            if(counter < result && compare(beginning, target, row, col)) {
                result = counter;
            }
        }
    }
    return result < maximum ? result : -1;
}
