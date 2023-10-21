const testGraph = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};

const hasPath = (graph: Object, src: string, dst: string) => {
  if (src === dst) return true;
  let hasAPath = false;

  for (let neighbor of graph[src]) {
    if (hasPath(graph, neighbor, dst)) {
      hasAPath = true;
    }
  }

  return hasAPath;
};

console.log(`Should be a path from f->h: ${hasPath(testGraph, "f", "h")}`);
console.log(`Should be a path from f->k: ${hasPath(testGraph, "f", "k")}`);
console.log(`Should not be a path from f->j: ${hasPath(testGraph, "f", "j")}`);
console.log(`Should not be a path from h->k: ${hasPath(testGraph, "h", "k")}`);
console.log(
  `Should not be a path from h->a since a does not exist in the graph: ${hasPath(
    testGraph,
    "h",
    "a"
  )}`
);
