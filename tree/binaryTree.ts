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
}
