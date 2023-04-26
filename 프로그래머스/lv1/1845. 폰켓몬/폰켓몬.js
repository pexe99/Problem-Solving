function solution(nums) {
    return Math.min([...new Set(nums)].length, Math.floor(nums.length / 2));
}