function solution(schedules, timelogs, startday) {
    schedules = schedules.map((schedule) => {
        schedule += 10;
        if(schedule % 100 >= 60) schedule += 40;
        return schedule;
    });
    return timelogs.filter((timelog, index) => {
        let current = 0;
        timelog.forEach((time, date) => {
            date += startday - 1;
            if(time <= schedules[index] && date % 7 < 5) current++;
        });
        return current === 5;
    }).length;
}