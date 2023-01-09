// Stack

class StackNode {
  value: number;
  next: StackNode | null;

  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  first: StackNode | null;
  last: StackNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // O(1)
  push(value: number) {
    const newNode = new StackNode(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    this.size++;

    return this.size;
  }

  // O(1)
  pop() {
    if (this.size === 0) return undefined;

    const removeNode = this.first;

    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = removeNode!.next;
      removeNode!.next = null;
    }

    this.size--;

    return removeNode;
  }
}
