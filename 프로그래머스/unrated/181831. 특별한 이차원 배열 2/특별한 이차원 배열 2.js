function solution(arr) {
   return Number(arr.every((_, i) => arr.every((_, j) => arr[i][j] === arr[j][i])));
}