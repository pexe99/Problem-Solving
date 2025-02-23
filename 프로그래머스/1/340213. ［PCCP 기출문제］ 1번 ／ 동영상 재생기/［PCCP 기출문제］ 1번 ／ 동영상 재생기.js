const OPERATIONS = { next: 10, prev: -10 };

const getTimeNum = (timeStr) => {
    const [min, sec] = timeStr.split(":");
    return +min * 60 + +sec;
}

const getTimeStr = (timeNum) => {
    const min = String(Math.floor(timeNum / 60)).padStart(2, '0');
    const sec = String(timeNum % 60).padStart(2, '0');
    return `${min}:${sec}`;
}

function solution(video_len, pos, op_start, op_end, commands) {
    video_len = getTimeNum(video_len);
    pos = getTimeNum(pos);
    op_start = getTimeNum(op_start);
    op_end = getTimeNum(op_end);
    
    if(op_start <= pos && pos <= op_end) pos = op_end;
    commands.forEach((command) => {
        pos += OPERATIONS[command];
        if(pos < 0) pos = 0;
        else if(video_len < pos) pos = video_len;
        if(op_start <= pos && pos <= op_end) pos = op_end;
    });
    
    return getTimeStr(pos);
}