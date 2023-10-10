import { buildDefaultTree, Node } from "./Node";

const breadthFirstPrint = (root: Node): void => {
  if (!root) return;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    console.log(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
};

const root = buildDefaultTree();
console.log("-----Breadth first traversal-----");
console.log(breadthFirstPrint(root));
