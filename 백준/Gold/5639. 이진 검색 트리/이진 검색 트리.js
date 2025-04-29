const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "input.txt",
    "utf8"
  )
  .trim()
  .split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.root === null) this.root = newNode;
    else {
      let curNode = this.root;
      while (true) {
        if (value < curNode.value) {
          if (curNode.left === null) {
            curNode.left = newNode;
            break;
          } else curNode = curNode.left;
        } else {
          if (curNode.right === null) {
            curNode.right = newNode;
            break;
          } else curNode = curNode.right;
        }
      }
    }
  }

  printPostOrder() {
    const postorder = (node) => {
      if (node.left !== null) postorder(node.left);
      if (node.right !== null) postorder(node.right);
      console.log(node.value);
    };
    postorder(this.root);
  }
}

const bTree = new BinaryTree();
input.forEach((str) => bTree.push(+str));
bTree.printPostOrder();
