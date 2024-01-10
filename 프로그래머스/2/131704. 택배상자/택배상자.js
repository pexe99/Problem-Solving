function solution(order) {
    let conveyor = Array.from({length: order.length}, (_, i) => order.length - i);
    let truck = [], subConveyor = [];
    let index = 0;
    while(conveyor.length || subConveyor.length) {
        let current = conveyor.at(-1);
        if(current === order[index]) {
            truck.push(conveyor.pop());
            index++;
        }
        else if(subConveyor.at(-1) === order[index]) {
            truck.push(subConveyor.pop());
            index++;
        }
        else {
            if(conveyor.length === 0) break;
            subConveyor.push(conveyor.pop());
        }
    }
    return truck.length;
}