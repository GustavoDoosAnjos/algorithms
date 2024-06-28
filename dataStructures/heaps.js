class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    this.bubbleUp();
  }

  extractMax() {
    this.swap(0, this.values.length-1);
    const oldRoot = this.values.pop();

    this.sinkDown();
    return oldRoot;
  }

  sinkDown() {
    let parentIndex = 0;
    let leftChild = (2*index+1) || null
    let rightChild = (2*index+2) || null

    if(this.values[leftChild] > this.values[parentIndex])
    if(this.values[rightChild] > this.values[parentIndex])

    if(this.values[rightChild] > this.values[parentIndex] && this.values[leftChild] > this.values[parentIndex])
    
  }

  bubbleUp() {
    let index = this.values.length - 1;
    let parentIndex = Math.floor((index - 1) / 2);

    while (index > 0) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }

  swap(leftIndex, rightIndex) {
    let temp = this.values[leftIndex];
    this.values[leftIndex] = this.values[rightIndex];
    this.values[rightIndex] = temp;
  }

  log() {
    console.log(this.values);
  }
}

const heap = new MaxBinaryHeap();

heap.insert(10);
heap.insert(20);
heap.insert(30);
heap.insert(100);
heap.insert(200);

heap.log();
