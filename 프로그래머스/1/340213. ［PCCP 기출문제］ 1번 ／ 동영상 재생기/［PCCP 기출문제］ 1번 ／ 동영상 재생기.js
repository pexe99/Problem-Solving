const getSeconds = (timeFormat) => {
    const [min, sec] = timeFormat.split(':');
    return +min * 60 + +sec;
}

const getTimeFormat = (seconds) => {
    const min = String(Math.floor(seconds / 60)).padStart(2, '0');
    const sec = String(seconds % 60).padStart(2, '0');
    return `${min}:${sec}`;
}

const solution = (video_len, pos, op_start, op_end, commands) => {
    const operation = {'prev': -10, 'next': 10};
    video_len = getSeconds(video_len);
    pos = getSeconds(pos);
    op_start = getSeconds(op_start);
    op_end = getSeconds(op_end);
    
    if(op_start <= pos && pos <= op_end) pos = op_end;
    
    commands.forEach((command) => {
        pos = pos + operation[command];
        if(pos < 0) pos = 0;
        if(video_len < pos) pos = video_len;
        if(op_start <= pos && pos <= op_end) pos = op_end;
    });
    
    return getTimeFormat(pos);
}