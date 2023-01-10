// Min Binary Heap

class MinBinaryHeap {
  values: number[];

  constructor() {
    this.values = [];
  }

  // O(logn)
  insert(value: number) {
    this.values.push(value);

    this.bubbleUp();

    return this.values;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const insertedValue = this.values[currentIndex];

    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      let parentValue = this.values[parentIndex];

      if (insertedValue < parentValue) {
        this.values[parentIndex] = insertedValue;
        this.values[currentIndex] = parentValue;
        currentIndex = parentIndex;
      } else break;
    }
  }

  // O(logn)
  extractMin() {
    const minValue = this.values[0];
    const endValue = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = endValue as number;

      this.sinkDown();
    }

    return minValue;
  }

  sinkDown() {
    let currentIndex = 0;
    let currentValue = this.values[currentIndex];

    while (currentIndex < this.values.length) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;

      let leftChildValue = this.values[leftChildIndex];
      let rightChildValue = this.values[rightChildIndex];

      let swapIndex: number | null = null;

      if (leftChildIndex < this.values.length && leftChildValue < currentValue)
        swapIndex = leftChildIndex;

      if (rightChildIndex < this.values.length) {
        if (
          (swapIndex === null && rightChildValue < currentValue) ||
          (swapIndex !== null && rightChildIndex < leftChildValue)
        )
          swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;

      this.values[currentIndex] = this.values[swapIndex];
      this.values[swapIndex] = currentValue;
      currentValue = swapIndex;
    }
  }
}
