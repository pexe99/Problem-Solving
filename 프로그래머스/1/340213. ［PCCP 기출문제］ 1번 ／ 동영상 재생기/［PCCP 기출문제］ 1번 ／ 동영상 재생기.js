const OPERATIONS = { next: 10, prev: -10 };

const getTimeNum = (timeStr) => {
    const [hour, min] = timeStr.split(":");
    return +hour * 60 + +min;
}

const getTimeStr = (timeNum) => {
    const hour = String(Math.floor(timeNum / 60)).padStart(2, '0');
    const min = String(timeNum % 60).padStart(2, '0');
    return `${hour}:${min}`;
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