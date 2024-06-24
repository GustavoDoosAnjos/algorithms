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

  breadthFirstSearch() {
    let queue = [];
    let visited = [];
    let current;

    queue.push(this.root);
    while (queue.length > 0) {
      current = queue.shift();
      visited.push(current.value);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return visited;
  }

  depthFirstSearchPreOrder() {
    let visited = [];

    function traverse(node) {
      visited.push(node.value);

      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }

  depthFirstSearchPostOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);

      visited.push(node.value);
    }

    traverse(this.root);
    return visited;
  }

  depthFirstSearchInOrder() {
    let visited = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visited;
  }
}
