// Binary Tree

class TreeNode {
  value: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  // O(logn)
  insert(value: number) {
    const newNode = new TreeNode(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.root;

    while (currentNode !== null) {
      if (newNode.value === currentNode.value) return undefined;

      if (newNode.value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          return this;
        }

        currentNode = currentNode.left;
      }

      if (newNode.value > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          return this;
        }

        currentNode = currentNode.right;
      }
    }
  }

  // O(logn)
  find(value: number) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.value === value) return currentNode;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      }

      if (value > currentNode!.value) {
        currentNode = currentNode!.right;
      }
    }

    return undefined;
  }

  // O(n)
  bfs() {
    const result: TreeNode[] = [];

    const queue: TreeNode[] = [];

    let currentNode = this.root;

    if (currentNode !== null) queue.unshift(currentNode);

    while (queue.length !== 0) {
      currentNode = queue.shift() as TreeNode;

      if (currentNode.left !== null) queue.push(currentNode.left);

      if (currentNode.right !== null) queue.push(currentNode.right);
    }

    return result;
  }

  // O(n)
  dfsPreorder() {
    const result: TreeNode[] = [];

    let currentNode = this.root;

    function traverse(node: TreeNode) {
      result.push(node);

      if (node.left !== null) traverse(node.left);

      if (node.right !== null) traverse(node.right);
    }

    if (currentNode !== null) traverse(currentNode);

    return result;
  }

  // O(n)
  dfsPostorder() {
    const result: TreeNode[] = [];

    let currentNode = this.root;

    function traverse(node: TreeNode) {
      if (node.left !== null) traverse(node.left);

      if (node.right !== null) traverse(node.right);

      result.push(node);
    }

    if (currentNode !== null) traverse(currentNode);

    return result;
  }

  // O(n)
  dfsInorder() {
    const result: TreeNode[] = [];

    let currentNode = this.root;

    function traverse(node) {
      if (node.left !== null) traverse(node.left);

      result.push(node);

      if (node.right !== null) traverse(node.right);
    }

    if (currentNode !== null) traverse(currentNode);

    return result;
  }
}
