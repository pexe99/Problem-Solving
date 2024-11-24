const MAX = 60 * 24 - 1;

function solution(n, t, m, timetable) {
    timetable = timetable.map((str) => {
        const [hour, minute] = str.split(":").map((e) => + e);
        return hour * 60 + minute;
    }).sort((a, b) => b - a);
    
    let bus = 9 * 60;
    while(bus <= MAX && n && timetable.length) {
        let counter = 0, crew = [];
        while(counter < m && timetable.length && timetable.at(-1) <= bus) {
            crew.push(timetable.pop());
            counter++;
        }
        if(n === 1) {
            let curMax = Math.max(...crew) || null;
            let result = curMax && crew.length === m ? curMax - 1 : bus;
            return String(Math.floor(result / 60)).padStart(2, "0") 
                + ":" + String(result % 60).padStart(2, "0")
        }
        bus += t;
        n--;
    }
}