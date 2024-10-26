const getSecond = (timeString) => {
    const [hour, minute, second] = timeString.split(":").map(Number);
    return hour * 3600 + minute * 60 + second;
};

const getTimeString = (time) => {
    const hour = `${Math.floor(time / 3600)}`.padStart(2, '0');
    const minute = `${Math.floor((time % 3600) / 60)}`.padStart(2, '0');
    const second = `${time % 60}`.padStart(2, '0');
    return `${hour}:${minute}:${second}`;
};

function solution(play_time, adv_time, logs) {
    play_time = getSecond(play_time);
    adv_time = getSecond(adv_time);
    const timeline = Array.from({length: play_time + 1}, () => 0);

    logs.forEach(log => {
        const [start, end] = log.split('-').map(getSecond);
        timeline[start]++;
        timeline[end]--;
    });
    
    // loop twice for calculate prefix sum
    for (let i = 1; i <= play_time; i++) {
        timeline[i] += timeline[i - 1];
    }
    for (let i = 1; i <= play_time; i++) {
        timeline[i] += timeline[i - 1];
    }
    
    
    let maxView = timeline[adv_time - 1];
    let startPoint = 0;
    for (let i = adv_time; i <= play_time; i++) {
        const currentView = timeline[i] - timeline[i - adv_time];
        if (currentView > maxView) {
            maxView = currentView;
            startPoint = i - adv_time + 1;
        }
    }

    return getTimeString(startPoint);
}
