/*
category: 구현

[input]
- friends: 친구 이름 배열, 2 이상 50 이하
- gifts: 'A B' 형태의 선물 기록 배열, 10000 이하

[output]
- A와 B 사이에 선물을 주고받은 경우
    - 더 많은 선물을 준 사람이 선물을 받음
    - 서로 같다면 선물 지수가 큰 사람이 선물을 받음
- A와 B 사이에 선물을 주고받지 않은 경우
    - 선물 지수가 큰 사람이 선물을 받음
- 선물 지수 = 준 선물 개수 - 받은 선물 개수
- 다음 달에 가장 많이 선물을 받을 친구의 선물 수를 return

[solution]
- gifts 배열을 순회해 받은 선물의 개수, 준 선물의 개수를 갱신
- 갱신한 정보로 각 선물 지수를 계산
- friends를 순회하며 임의의 A와 B 사이의 다음 달 선물 개수를 갱신
- 갱신한 선물 개수 중, 가장 큰 값을 return
*/

function solution(friends, gifts) {
    const n = friends.length;
    const friendsIndex = {};
    friends.forEach((name, index) => friendsIndex[name] = index);
    
    const nextMonth = Array.from({length: n}, () => 0);
    const presentPoint = Array.from({length: n}, () => 0);
    const currentMonth = Array.from({length: n}, () => {
        return Array.from({length: n}, () => 0);
    });
    
    gifts.forEach((string) => {
        const [a, b] = string.split(" ").map((name) => friendsIndex[name]);
        currentMonth[a][b]++;
        presentPoint[a]++;
        presentPoint[b]--;
    });
    
    for(let a = 0; a < n; a++) {
        for(let b = 0; b < n; b++) {
            if(currentMonth[a][b] > currentMonth[b][a])
                nextMonth[a]++;
            else if(currentMonth[b][a] === currentMonth[a][b]) {
                if(presentPoint[a] > presentPoint[b])
                    nextMonth[a]++
            }
        }
    }
    
    return Math.max(...nextMonth);
}