function solution(user_id, banned_id) {
    const rogueUser = [], result = new Set();
    banned_id.forEach((id) => {
        rogueUser.push({
            regexp: new RegExp(`^${id.split("*").map((cur) => `(${cur})`).join("([a-z0-9])")}\$`),
            case: [],
            length: id.length
        });
    });
    
    user_id.forEach((id) => {
       rogueUser.forEach((obj, idx, arr) => {
           if(obj.length === id.length && obj.regexp.test(id)) arr[idx].case.push(id);
       }); 
    });
    
    const current = new Set();
    
    const DFS = (n) => {
        if(n === banned_id.length) {
            result.add([...current].sort().join("-"));
            return;
        }
        for(let i = 0; i < rogueUser[n].case.length; i++) {
            if(!current.has(rogueUser[n].case[i])) {
                current.add(rogueUser[n].case[i]);
                DFS(n + 1);
                current.delete(rogueUser[n].case[i]);
            }
        }
    }
    
    DFS(0);
    
    return result.size;
}