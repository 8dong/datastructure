// Singly Linked List

class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
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
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this.length;
  }

  // O(n)
  pop() {
    const removeNode = this.tail;

    let currentNode = this.head;
    let prevNode = this.head;

    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removeNode;
    }

    while (currentNode!.next) {
      prevNode = currentNode;
      currentNode = currentNode!.next;
    }

    this.tail = prevNode;
    prevNode!.next = null;
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
      this.head = newNode;
    }
    this.length++;

    return this.length;
  }

  // O(1)
  shift() {
    const removeNode = this.head;

    if (this.length === 0) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;

      return removeNode;
    }

    this.head = removeNode!.next;
    removeNode!.next = null;
    this.length--;

    return removeNode;
  }

  // O(n)
  get(index: number) {
    if (index < 0 || index > this.length - 1) return undefined;

    let currentNode = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentNode = currentNode!.next;
      currentIndex++;
    }

    return currentNode;
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
    newNode.next = nextNode;
    this.length++;

    return true;
  }

  remove(index: number) {
    if (index < 0 || index > this.length) return false;

    if (index === 0) return !!this.shift();

    if (index === this.length - 1) return !!this.pop();

    const prevNode = this.get(index - 1);
    const removNode = prevNode!.next;

    prevNode!.next = removNode!.next;
    removNode!.next = null;
    this.length--;

    return true;
  }
}
