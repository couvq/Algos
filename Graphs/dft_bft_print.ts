const graph = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

const dftIterative = (graph: Object, node: string) => {
  if (!node) return;
  const stack = [node];

  while (stack.length) {
    const current = stack.pop();
    console.log(current);

    if (graph[current]) {
      for (let i = graph[current].length - 1; i >= 0; i--) {
        stack.push(graph[current][i]);
      }
    }
  }
};

const dftRecursive = (graph: Object, node: string) => {
  if (!node) return;

  console.log(node);

  for (let neighbor of graph[node]) {
    dftRecursive(graph, neighbor);
  }
};

const bft = (graph: Object, node: string) => {
    if(!node) return;

    const queue = [ node ];

    while(queue.length) {
        const current = queue.pop()

        console.log(current)

        for(let neighbor of graph[current]) {
            queue.unshift(neighbor)
        }
    }
}

console.log("-----dft iterative-----");
dftIterative(graph, "a");
console.log("-----dft recursive------");
dftRecursive(graph, "a");
console.log('-----bft-----')
bft(graph, 'a')
