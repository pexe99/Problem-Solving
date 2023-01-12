function solution(array) {
    let answer = [];
    
    let maxIndex = 0, maxValue = array[0];
    for(i = 1; i < array.length; i++) {
        if(maxValue < array[i]) {
            maxIndex = i;
            maxValue = array[i];
        }
    }
    
    answer.push(maxValue, maxIndex);
    
    return answer;
}