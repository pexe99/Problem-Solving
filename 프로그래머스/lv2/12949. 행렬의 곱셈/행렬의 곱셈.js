function solution(arr1, arr2) {
    return arr1.map((row) => {
        return arr2[0].map((_, i) => {
            return row.reduce((s, v, idx) => s + v * arr2[idx][i], 0);
        })
    })
}