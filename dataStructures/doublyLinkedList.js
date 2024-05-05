class Node {
  constructor(value) {
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    const tail = this.tail;
    this.tail = tail.prev;
    this.tail.next = null;
    tail.prev = null;
    this.length--;
    return tail;
  }

  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
    }

    const head = this.head;
    this.head = head.next;
    this.head.prev = null;
    head.next = null;
    this.length--;
    return head;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      var element = this.head;
      for (let i = 0; i !== index; i++) {
        element = element.next;
      }
    } else {
      var element = this.tail;
      for (let i = this.length - 1; i !== index; i--) {
        element = element.prev;
      }
    }
    return element;
  }

  set(index, value) {
    const element = this.get(index);

    if (element) {
      element.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const prevElement = this.get(index - 1);
    const element = prevElement.next;
    const newElement = new Node(value);

    prevElement.next = newElement;
    element.prev = newElement;
    newElement.next = element;
    newElement.prev = prevElement;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const itemToRemove = this.get(index);
    const itemBefore = itemToRemove.prev;
    const itemAfter = itemToRemove.next;

    itemBefore.next = itemAfter;
    itemAfter.prev = itemBefore;
    itemToRemove.next = null;
    itemToRemove.prev = null;

    this.length--;
    return itemToRemove;
  }
}

const Link = new DoublyLinkedList();

Link.push(1);
Link.push(2);
Link.push(3);
Link.push(4);
Link.push(5);
