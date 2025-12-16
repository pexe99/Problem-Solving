const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[V], ...nodeInfo] = input.map((str) => str.split(" ").map(Number));

const getLongPath = (tree, start) => {
  let [node, maxWeight] = [0, 0];
  const stack = [[start, 0]];
  const visited = new Array(tree.length).fill(false);

  visited[start] = true;
  while (stack.length) {
    const [current, pathWeight] = stack.pop();
    tree[current].forEach(([next, weight]) => {
      if (!visited[next]) {
        visited[next] = true;
        stack.push([next, pathWeight + weight]);
      }
    });
    if (maxWeight < pathWeight) [node, maxWeight] = [current, pathWeight];
  }

  return [node, maxWeight];
};

const solution = (V, nodeInfo) => {
  const tree = Array.from({ length: V + 1 }, () => new Array());
  nodeInfo.forEach((array) => {
    const current = array[0];
    array = array.splice(1, array.length - 2);
    for (let i = 0; i < array.length; i += 2)
      tree[current].push([array[i], array[i + 1]]);
  });

  const endPoint = getLongPath(tree, 1)[0];
  return getLongPath(tree, endPoint)[1];
};

console.log(solution(V, nodeInfo));
