const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

const [[N], inorder, postorder] = input.map((e) => e.split(" ").map(Number));

const solution = (N, inorder, postorder) => {
  const preorder = [];
  const position = new Array(N + 1);
  inorder.forEach((e, i) => (position[e] = i));

  const searchTree = (inStart, inEnd, postStart, postEnd) => {
    if (inStart > inEnd || postStart > postEnd) return;
    else {
      const root = postorder[postEnd];
      preorder.push(root);

      const left = position[root] - inStart;
      const right = inEnd - position[root];

      searchTree(inStart, inStart + left - 1, postStart, postStart + left - 1);
      searchTree(inEnd - right + 1, inEnd, postEnd - right, postEnd - 1);
    }
  };

  searchTree(0, N - 1, 0, N - 1);
  return preorder.join(" ");
};

console.log(solution(N, inorder, postorder));
