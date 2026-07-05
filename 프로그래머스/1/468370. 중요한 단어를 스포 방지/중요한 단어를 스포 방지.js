const solution = (message, spoiler_ranges) => {
    let index = 0;
    const words = [];
    
    message.split(' ').forEach((word) => {
        const len = word.length;
        if(len === 0) index++;
        else {
            words.push({word: word, start: index, end: index + len - 1});
            index += len + 1;
        }
    });
    
    let rangeIndex = 0;
    const normalWord = new Set();
    const spoilerWord = new Set();
    const spoilerLen = spoiler_ranges.length;
    
    words.forEach(({word, start, end}) => {
        while(rangeIndex < spoilerLen
            && spoiler_ranges[rangeIndex][1] < start) rangeIndex++;
        const isHidden = rangeIndex < spoilerLen
            && spoiler_ranges[rangeIndex][0] <= end;
        
        isHidden ? spoilerWord.add(word) : normalWord.add(word);
    });
    
    return [...spoilerWord].filter((word) => !normalWord.has(word)).length;
}