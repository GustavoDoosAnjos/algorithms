class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);

    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let NodeBefore = this.head;
    let NodeToDelete = NodeBefore.next;
    while (NodeBefore.next) {
      NodeBefore = NodeToDelete;
      NodeToDelete = NodeToDelete.next;
    }
    this.tail = NodeBefore;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return NodeToDelete;
  }

  shift() {
    if (!this.head) return undefined;

    let head = this.head;
    this.head = head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }

    return head;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let i = 1;
    while (i !== index) {
      current = current.next;
      i++;
    }
    return current;
  }

  set(value, index) {
    let node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }
    let nodeBefore = this.get(index - 1);
    const newNode = new Node(value);
    newNode.next = nodeBefore.next;
    nodeBefore.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();

    let nodeBefore = this.get(index - 1);
    let nodeToDelete = nodeBefore.next;
    nodeBefore.next = nodeToDelete.next;
    this.length--;
    return nodeToDelete;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

const l = new LinkedList();
l.push('aids');
l.push('aids');
l.push('aids');
l.pop();
console.log(l);
