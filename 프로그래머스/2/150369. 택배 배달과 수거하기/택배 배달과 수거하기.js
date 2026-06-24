/*
[input]
- cap: 트럭에 실을 수 있는 상자 최대 개수
- n: 배달할 집의 개수
- deliveries: 집마다 배달할 상자 개수
- pickups: 집마다 수거할 상자 개수

[output]
- 모든 배달을 마치고 물류창고로 돌아오는 최소 이동 거리

[solution]
가장 먼 집부터 처리해 이동 거리를 최대한 줄이는 것이 포인트
항상 cap만큼 싣고 출발해 가장 뒤에서부터 배달과 수거를 수행
*/

function solution(cap, n, deliveries, pickups) {
    let result = 0;
    
    while(deliveries.length || pickups.length) {
        while(deliveries.at(-1) === 0) deliveries.pop();
        while(pickups.at(-1) === 0) pickups.pop();
        let curDist = Math.max(deliveries.length, pickups.length);
        
        let curDelivery = cap;
        while(curDelivery && deliveries.length) {
            if(deliveries.at(-1) <= curDelivery) {
                curDelivery -= deliveries.pop();
            } else {
                deliveries[deliveries.length - 1] -= curDelivery;
                curDelivery = 0;
            }
        }
        
        let curPickup = cap;
        while(curPickup && pickups.length) {
            if(pickups.at(-1) <= curPickup) {
                curPickup -= pickups.pop();
            } else {
                pickups[pickups.length - 1] -= curPickup;
                curPickup = 0;
            }
        }
        
        result += curDist * 2;
    }
    
    return result;
}