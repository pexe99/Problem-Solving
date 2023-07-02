function solution(record) {
    const nickname = {}, stack = [];
    record.forEach((v) => {
        let [action, id, name] = v.split(' ');
        if(action === "Enter") {
            stack.push([id, 1]);
            nickname[id] = name;
        }
        if(action === "Leave") {
            stack.push([id, -1]);
        }
        if(action === "Change") nickname[id] = name;
    });
    
    let result = [];
    stack.forEach((v) => {
        let [id, action] = v;
        if(action === 1) result.push(`${nickname[id]}님이 들어왔습니다.`);
        else result.push(`${nickname[id]}님이 나갔습니다.`);
    });
    
    return result;
}