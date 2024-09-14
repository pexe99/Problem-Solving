const binarySearch = (start, end, n, times) => {
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let current = times.reduce((acc, cur) => acc + Math.floor(mid / cur), 0);
        if (current >= n) end = mid - 1;
        else start = mid + 1;
    }
    return start;
}

const solution = (n, times) => {
    let [start, end] = [1, Math.max(...times) * n];
    return binarySearch(start, end, n, times);
}
