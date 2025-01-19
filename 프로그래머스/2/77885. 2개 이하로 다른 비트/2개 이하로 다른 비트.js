function solution(numbers) {
    return numbers.map((number) => {
        if(number % 2 === 0) return number + 1;
        let iterator = 1;
        while(iterator *= 2) {
            if((number + 1) % (iterator * 2) !== 0) break;
        }
        return number + (iterator / 2);
    });
}