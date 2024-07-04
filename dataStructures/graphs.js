class Graph {
  constructor() {
    this.adjacencyList = {};
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
}
