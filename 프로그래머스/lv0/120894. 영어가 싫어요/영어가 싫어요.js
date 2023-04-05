function solution(numbers) {
    const numberEn = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    for(let i = 0; i < numberEn.length; i++) {
        numbers = numbers.replaceAll(String(numberEn[i]), i);
    }
    
    return Number(numbers);
}