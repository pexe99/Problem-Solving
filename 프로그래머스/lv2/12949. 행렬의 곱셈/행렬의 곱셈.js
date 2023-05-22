function solution(arr1, arr2) {
    let result = Array.from({length: arr1.length}, () => []);
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2[0].length; j++) {
            let current = arr1[i].reduce((s, v, idx) => s + (v * arr2[idx][j]), 0);
            result[i].push(current);
        }
    }
    return result;
}