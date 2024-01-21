const COMMAND_REGEXP = /(?<method>[D|I])\s+(?<number>[-]?[\d]+)/;

const solution = (operations) => {
    let queue = [];
    operations.forEach((command) => {
        let {method, number} = command.match(COMMAND_REGEXP).groups;
        if(method === "I") {
            queue.push(+number);
            queue.sort((a, b) => a - b);
        } else +number === 1 ? queue.pop() : queue.shift();
    })
    return [queue.at(-1) || 0, queue.at(0) || 0];
}