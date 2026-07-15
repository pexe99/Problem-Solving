function solution(food) {
    const half = [];
    for(let i = 1; i < food.length; i++) {
        half.push(String(i).repeat(Math.floor(food[i] / 2)));
    }
    return half.join('') + '0' + half.reverse().join('');
}