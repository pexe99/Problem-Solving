function solution(progresses, speeds) {
    let result = [];
    while(progresses.length) {
        let counter = 0;
        while(progresses[0] >= 100) {
            progresses.shift();
            speeds.shift();
            counter++;
        }
        progresses = progresses.map((v, idx) => v + speeds[idx]);
        if(counter !== 0) result.push(counter);
    }
    return result;
}