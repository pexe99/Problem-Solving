function solution(a, b) {
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED'];
    if(a === 1) return day[b % 7];
    return day[(month.slice(0, a - 1).reduce((s, v) => s + v) + b) % 7]
}