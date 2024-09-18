function solution(lines) {
    let current = new Date("2016-09-15T00:00:00.000Z").getTime(); 
    let end = new Date("2016-09-16T00:00:00.000Z").getTime();
    
    lines = lines.map((string) => {
        let [date, time, processTime] = string.split(" ");
        let endTime = new Date(`${date}T${time}Z`).getTime();
        let processDuration = parseFloat(processTime.substring(0, processTime.length - 1)) * 1000;
        let startTime = endTime - processDuration + 1;
        return [startTime, endTime];
    });
    
    let maxRequests = 0;
    for (let i = 0; i < lines.length; i++) {
        let [startTime, endTime] = lines[i];
        let windowStart = endTime;
        let windowEnd = endTime + 1000;
        let requestCount = 0;
        for (let j = 0; j < lines.length; j++) {
            if (lines[j][1] >= windowStart && lines[j][0] < windowEnd) {
                requestCount++;
            }
        }
        maxRequests = Math.max(maxRequests, requestCount);
    }
    
    return maxRequests;
}
