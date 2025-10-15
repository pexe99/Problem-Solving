function solution(bridge_length, weight, truck_weights) {
    let timer = 0;
    let bridgeLoad = 0;
    const onBridge = [];
    
    while(truck_weights.length || onBridge.length) {
        timer++;
        if(onBridge[0]?.[1] + 1 === bridge_length) {
                bridgeLoad -= onBridge[0][0];
                onBridge.shift();
        }
        onBridge.forEach(([truck, counter], index) => {
            onBridge[index][1]++;
        });
        if(bridgeLoad + truck_weights[0] <= weight) {
            bridgeLoad += truck_weights[0];
            onBridge.push([truck_weights.shift(), 0]);
        }
    }
    return timer;
}