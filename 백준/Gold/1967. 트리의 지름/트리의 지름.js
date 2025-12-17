const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[n], ...edges] = input.map((str) => str.split(" ").map(Number));

const getFarthestNode = (tree, startNode) => {
  const result = { node: 0, distance: 0 };
  const visited = Array.from(
    { length: tree.length },
    (_, index) => index === startNode
  );

  let index = 0;
  const queue = [[startNode, 0]];
  while (index < queue.length) {
    const [curNode, distance] = queue[index++];
    if (result.distance < distance) {
      result.node = curNode;
      result.distance = distance;
    }
    tree[curNode].forEach(([nextNode, weight]) => {
      if (!visited[nextNode]) {
        visited[nextNode] = true;
        queue.push([nextNode, distance + weight]);
      }
    });
  }
  return result;
};

const solution = (n, edges) => {
  const tree = Array.from({ length: n }, () => []);
  edges.forEach(([node1, node2, weight]) => {
    tree[node1 - 1].push([node2 - 1, weight]);
    tree[node2 - 1].push([node1 - 1, weight]);
  });

  const endpoint = getFarthestNode(tree, 0).node;
  return getFarthestNode(tree, endpoint).distance;
};

console.log(solution(n, edges));
