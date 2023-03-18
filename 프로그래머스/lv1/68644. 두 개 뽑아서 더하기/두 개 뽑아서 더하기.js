function solution(numbers) {
    let answer = [];
    
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            let current = numbers[i] + numbers[j];
            if(answer.indexOf(current) === -1) answer.push(current);
        }
    }
    
    return answer.sort((a, b) => a - b);
}