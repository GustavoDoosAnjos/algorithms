class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  populate() {
    this.addVertex('A');
    this.addVertex('B');
    this.addVertex('C');
    this.addVertex('D');
    this.addVertex('E');
    this.addVertex('F');

    this.addEdge('A', 'B');
    this.addEdge('A', 'C');
    this.addEdge('B', 'D');
    this.addEdge('C', 'E');
    this.addEdge('D', 'E');
    this.addEdge('D', 'F');
    this.addEdge('E', 'F');
  }

  addVertex(value) {
    if (!this.adjacencyList[value]) {
      this.adjacencyList[value] = [];
    }
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      this.removeEdge(vertex, this.adjacencyList[vertex][0]);
    }
    delete this.adjacencyList[vertex];
  }

  addEdge(firstVertex, secondVertex) {
    if (this.adjacencyList[firstVertex]) {
      this.adjacencyList[firstVertex].push(secondVertex);
    }
    if (this.adjacencyList[secondVertex]) {
      this.adjacencyList[secondVertex].push(firstVertex);
    }
  }

  removeEdge(firstVertex, secondVertex) {
    if (this.adjacencyList[firstVertex]) {
      this.adjacencyList[firstVertex] = this.adjacencyList[firstVertex].filter(
        (e) => e !== secondVertex
      );
    }
    if (this.adjacencyList[secondVertex]) {
      this.adjacencyList[secondVertex] = this.adjacencyList[
        secondVertex
      ].filter((e) => e !== firstVertex);
    }
  }

  depthFirstRecursive(node) {
    var results = [];
    var visited = {};
    var adjacencyList = this.adjacencyList;

    function dfs(node) {
      if (!node) return;

      visited[node] = true;
      results.push(node);
      adjacencyList[node].forEach((vertex) => {
        if (!visited[vertex]) {
          dfs(vertex);
        }
      });
    }
    dfs(node);
    return results;
  }

  depthFirstIterative(start) {
    let stack = [];
    let results = [];
    let visited = {};
    stack.push(start);
    while (stack.length > 0) {
      let node = stack.pop();
      if (!visited[node]) {
        results.push(node);
        visited[node] = true;
        this.adjacencyList[node].forEach((node) => {
          stack.push(node);
        });
      }
    }
    return results;
  }

  breadthFirstIterative(start) {
    let queue = [];
    let results = [];
    let visited = {};
    let node;

    queue.push(start);
    while (queue.length) {
      node = queue.shift();

      if (!visited[node]) {
        results.push(node);
        visited[node] = true;
        this.adjacencyList[node].forEach((node) => {
          queue.push(node);
        });
      }
    }
    return results;
  }
}

const graph = new Graph();
graph.populate();
const graphList = graph.breadthFirstIterative('A');
console.log(graphList);
