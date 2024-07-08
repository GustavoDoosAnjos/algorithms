class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
    return this.length;
  }

  pop() {
    if (!this.head) return null;
    if (this.length === 1) {
      var first = this.head;
      this.head = null;
      this.tail = null;
    } else {
      var first = this.head;
      this.head = this.head.next;
    }
    this.length--;
    return first.value;
  }
}
