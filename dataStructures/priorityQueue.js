class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);

    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);
    while (index > 0) {
      if (priority < this.values[parentIndex].priority) {
        this.swap(parentIndex, index);
        index = parentIndex;
        parentIndex = Math.floor((index - 1) / 2);
      } else {
        break;
      }
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let index = 0;
    let leftChild, rightChild;

    while (true) {
      let element = this.values[index];
      let swap = null;
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 1;
      if (leftChildIndex < this.values.length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < this.values.length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap === null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.swap(swap, index);
      index = swap;
    }
  }

  swap(leftIndex, rightIndex) {
    let temp = this.values[leftIndex];
    this.values[leftIndex] = this.values[rightIndex];
    this.values[rightIndex] = temp;
  }
}
