function solution(n, k, cmd) {
    const table = {};
    for(let i = 0; i < n; i++) {
        table[i] = {prev: i - 1, next: i + 1};
        if(i === 0) table[i].prev = null;
        if(i === n - 1) table[i].next = null;
    }

    let deleted = [], iter = k;
    cmd.forEach((command) => {
        let [prefix, amount = 0] = command.split(" ");
        amount = +amount;
        switch(prefix) {
            case "U":
            case "D": {
                while(amount--) {
                    if(prefix == "U") iter = table[iter].prev;
                    else iter = table[iter].next;
                } break;
            }
            case "C": {
                let {prev, next} = table[iter];
                deleted.push([iter, {...table[iter]}]);
                if(next === null) {
                    table[prev].next = null;
                    delete table[iter];
                    iter = prev;
                } else if(prev === null) {
                    table[next].prev = null;
                    delete table[iter];
                    iter = next;
                } else {
                    table[prev].next = next;
                    table[next].prev = prev;
                    delete table[iter];
                    iter = next;
                } break;
            }
            case "Z": {
                const [iter, {prev, next}] = deleted.pop();
                table[iter] = {prev, next};
                if(next === null) {
                    table[prev].next = iter;
                } else if(prev === null) {
                    table[next].prev = iter;
                } else {
                    table[prev].next = iter;
                    table[next].prev = iter;
                }
                break;
            }
        }
    });
    
    const result = Array.from({length: n}, () => false);
    Object.keys(table).forEach((iter) => result[iter] = true);
    return result.map((value) => value ? "O" : "X").join("");
}