// Doubly Linked List

class ListNode {
  value: number;
  prev: ListNode | null;
  next: ListNode | null;

  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // O(1)
  push(value: number) {
    const newNode = new ListNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = null;
      this.tail!.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;

    return this.length;
  }

  // O(1)
  pop() {
    const removeNode = this.tail;

    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removeNode;
    }

    this.tail = removeNode!.prev;
    this.tail!.next = null;
    removeNode!.prev = null;
    this.length--;

    return removeNode;
  }

  // O(1)
  unshift(value: number) {
    const newNode = new ListNode(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head!.prev = newNode;
      this.head = newNode;
    }

    this.length++;

    return this.length;
  }

  // O(1)
  shift() {
    if (this.length === 0) return undefined;

    const removeNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removeNode!.next;
      this.head!.prev = null;
      removeNode!.next = null;
    }

    this.length--;

    return removeNode;
  }

  // O(n)
  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    if (index <= this.length / 2) {
      let currentIndex = 0;
      let currentNode = this.head;

      while (index !== currentIndex) {
        currentNode = currentNode!.next;
        currentIndex++;
      }

      return currentNode;
    } else {
      let currentIndex = 0;
      let currentNode = this.tail;

      while (index !== currentIndex) {
        currentNode = currentNode!.prev;
        currentIndex--;
      }

      return currentNode;
    }
  }

  // O(n)
  set(index: number, value: number) {
    const setNode = this.get(index);

    if (!setNode) return false;

    setNode.value = value;

    return true;
  }

  // O(n)
  insert(index: number, value: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.unshift(value);

    if (index === this.length) return !!this.push(value);

    const newNode = new ListNode(value);

    const prevNode = this.get(index - 1);
    const nextNode = prevNode!.next;

    prevNode!.next = newNode;
    newNode!.prev = prevNode!;
    newNode.prev = nextNode;
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  // O(n)
  remove(index: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.shift();

    if (index === this.length - 1) return !!this.pop();

    const removeNode = this.get(index);
    const prevNode = removeNode!.prev;
    const nextNode = removeNode!.next;

    prevNode!.next = nextNode;
    nextNode!.prev = prevNode;
    removeNode!.prev = null;
    removeNode!.next = null;
    this.length--;

    return true;
  }
}
