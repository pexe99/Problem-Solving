function solution(edges, target) {
    const graph = {};
    let maxNodeNumber = -1;
    edges.forEach(([from, to]) => {
        if (!graph.hasOwnProperty(from - 1)) graph[from - 1] = [to - 1];
        else graph[from - 1].push(to - 1);
        graph[from - 1].sort((a, b) => a - b);
        maxNodeNumber = Math.max(maxNodeNumber, from - 1, to - 1);
    });

    const nodeCardIndex = Array.from({ length: maxNodeNumber + 1 }, () => []);
    const visitedCounter = Array.from({ length: maxNodeNumber + 1 }, () => 0);
    const targetCardExpect = target.map((amount) => {
        return {min: Math.ceil(amount / 3), max: amount};
    });

    let cardIndex = 0;
    while (true) {
        let result = true;
        for (let index = 0; index < targetCardExpect.length; index++) {
            if (nodeCardIndex[index].length < targetCardExpect[index].min) result = false;
            if (nodeCardIndex[index].length > targetCardExpect[index].max) {
                return [-1];
            }
        }
        if (result) break;

        let currentNode = 0;
        while (true) {
            if (!graph.hasOwnProperty(currentNode)) {
                nodeCardIndex[currentNode].push(cardIndex++);
                break;
            }
            let nextNode = graph[currentNode][visitedCounter[currentNode] % graph[currentNode].length];
            visitedCounter[currentNode]++;
            currentNode = nextNode;
        }
    }

    let nodeCards = nodeCardIndex.map((array, index) => {
        let cards = [];
        let current = 3;
        let remain = array.length;

        while (remain > 0) {
            while (target[index] - current >= remain - 1 && remain > 0) {
                target[index] -= current;
                cards.push(current);
                remain--;
            }
            current--;
        }
        cards = cards.reverse();
        return array.map((number, idx) => ({ index: number, card: cards[idx] }));
    });

    return nodeCards.reduce((res, cur) => [...res, ...cur])
        .sort((a, b) => a.index - b.index).map((object) => object.card);
}
