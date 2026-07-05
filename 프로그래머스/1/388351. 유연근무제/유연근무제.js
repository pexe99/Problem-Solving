const solution = (schedules, timelogs, startday) => {
    startday--;
    schedules = schedules.map((time) => 
                60 <= (time + 10) % 100 ? time + 50 : time + 10);
    
    return timelogs.filter((timelog, index) => {
        let counter = 0;
        for(let i = 0; i < 7; i++) {
            const curDate = (startday + i) % 7;
            if(curDate < 5 && timelog[i] <= schedules[index]) counter++;
        }
        return counter === 5;
    }).length;
}