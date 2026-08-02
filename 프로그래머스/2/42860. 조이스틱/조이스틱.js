/*
[input]
- name: 만들고자 하는 이름 문자열

[output]
조이스틱 조작은 커서 왼쪽/오른쪽 이동, 다음/이전 알파벳으로 총 4가지임
가장 처음에는 name의 길이만큼 A로 이루어져 있는 문자열이 주어짐
최소한의 조작 횟수로 name을 만들 때의 최솟값을 반환해야 함

[solution]
- 왜 Greedy인가?
알파벳을 변경하는 경우를 생각해보자. A에서 이전으로 변경하는 경우와
다음으로 변경하는 경우 중에서 더 적게 조이스틱을 조작해야 하는 경우가 최선이다.
다음으로 변경할 자리를 고르는 경우도 마찬가지다. 좌측/우측으로 움직였을 때,
가장 적게 조이스틱을 조작하는 경우를 먼저 처리하도록 하는 것이 최선이다.
*/

const solution = (name) => {
    const n = name.length;
    let counter = 0 ;
    let move = n - 1;
    for(let i = 0; i < n; i++) {
        let next = i + 1;
        const diff = name[i].charCodeAt() - 'A'.charCodeAt();
        counter += Math.min(Math.abs(26 - diff), diff);
        while(next < n && name[next] === 'A') next++;
        move = Math.min(move, i * 2 + n - next, i + (n - next) * 2);
    }
    
    return move + counter;
    
}