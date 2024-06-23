class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var current = this.root;

    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }

      if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;

    if (current === null) {
      return false;
    }

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      if (current.value > value) {
        current = current.left;
      }
      if (current.value < value) {
        current = current.right;
      }
    }
    return false;
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(12);
bst.insert(25);
bst.insert(250);
bst.insert(3);

bst.find(250);
