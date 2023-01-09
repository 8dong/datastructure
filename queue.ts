// Queue

class QueueNode {
  value: number;
  next: QueueNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  first: QueueNode | null;
  last: QueueNode | null;
  size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // O(1)
  enqueue(value: number) {
    const newNode = new QueueNode(value);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }

    this.size++;

    return this.size;
  }

  // O(1)
  dequeue() {
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
