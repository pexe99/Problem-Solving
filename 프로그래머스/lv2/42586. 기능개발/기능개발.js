function solution(progresses, speeds) {
    let result = [0];
    let days = progresses.map((v, idx) => Math.ceil((100 - v) / speeds[idx]));
    
    for(let i = 0, j = 0, max = days[0]; i < days.length; i++) {
        if(days[i] <= max) result[j]++;
        else {
            max = days[i];
            result[++j] = 1;
        }
    }
    
    return result;
}