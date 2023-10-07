import { buildDefaultTree, Node } from "./Node";

const depthFirstPrintIterative = (root: Node) => {
  const stack = [];
  stack.push(root);

  while (stack.length) {
    const current = stack.pop();
    console.log(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
};

const depthFirstPrintRecursive = (root: Node, stack: Node[] = []) => {
  if (!root) return;
  stack.push(root);
  console.log(root.value);
  depthFirstPrintRecursive(root.left, stack);
  depthFirstPrintRecursive(root.right, stack);
};

const root = buildDefaultTree();
console.log("-----Iterative-----");
depthFirstPrintIterative(root);
console.log("-----Recursive-----");
depthFirstPrintRecursive(root);
