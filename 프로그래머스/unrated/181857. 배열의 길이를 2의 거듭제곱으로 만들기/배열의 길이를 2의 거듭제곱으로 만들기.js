function solution(arr) {
    const isPowerOfTwo = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
    if(!isPowerOfTwo.includes(arr.length)) {
        const minLength = isPowerOfTwo.filter((v) => v >= arr.length)[0];
        arr = arr.concat(new Array(minLength - arr.length).fill(0));
    }
    return arr;
}