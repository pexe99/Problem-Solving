const MAX_CARD_NUMBER = 3;

const getNodeCardIndex = (maxNodeNumber, graph, target) => {
    const nodeCardIndex = Array.from({ length: maxNodeNumber + 1 }, () => []);
    const visitedCounter = Array.from({ length: maxNodeNumber + 1 }, () => 0);
    const targetCardExpect = target.map((amount) => {
        return { min: Math.ceil(amount / MAX_CARD_NUMBER), max: amount };
    });

    let cardIndex = 0;
    while (true) {
        let isAvailableCardAmount = true;
        for (let index = 0; index < targetCardExpect.length; index++) {
            if (nodeCardIndex[index].length < targetCardExpect[index].min)  isAvailableCardAmount = false;
            if (nodeCardIndex[index].length > targetCardExpect[index].max) return -1;
        }
        if (isAvailableCardAmount) break;
        
        let currentNode = 0;
        while (true) {
            if (graph.hasOwnProperty(currentNode)) {
                let nextIndex = visitedCounter[currentNode] % graph[currentNode].length;
                let nextNode = graph[currentNode][nextIndex];
                visitedCounter[currentNode]++;
                currentNode = nextNode;
            } else {
                nodeCardIndex[currentNode].push(cardIndex++);
                break;
            }
        }
    }
    return nodeCardIndex;
};

const getCardOrder = (nodeCardIndex, target) => {
    const remainTarget = [...target];
    const nodeCards = nodeCardIndex.map((array, index) => {
        let [cards, current, remain] = [[], MAX_CARD_NUMBER, array.length];
        while (current > 0) {
            while (remainTarget[index] - current >= remain - 1 && remain > 0) {
                remainTarget[index] -= current;
                cards.push(current);
                remain--;
            }
            current--;
        }
        return array.map((number, index) => {
            return { index: number, card: cards[cards.length - index - 1] };
        });
    });

    return nodeCards.reduce((result, current) => [...result, ...current])
        .sort((a, b) => a.index - b.index).map((object) => object.card);
};

function solution(edges, target) {
    const graph = {};
    let maxNodeNumber = -1;
    edges.forEach(([from, to]) => {
        [from, to] = [from - 1, to - 1];
        if (!graph.hasOwnProperty(from)) graph[from] = [to];
        else graph[from].push(to);
        graph[from].sort((a, b) => a - b);
        maxNodeNumber = Math.max(maxNodeNumber, from, to);
    });

    const nodeCardIndex = getNodeCardIndex(maxNodeNumber, graph, target);
    if (nodeCardIndex === -1) return [-1];
    return getCardOrder(nodeCardIndex, target);
} 