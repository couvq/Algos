import { buildDefaultTree, Node } from "./Node";

const depthFirstPrintIterative = (root: Node<string>) => {
  if (!root) return;
  const stack = [root];

  while (stack.length) {
    const current = stack.pop();
    console.log(current.value);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
};

const depthFirstPrintRecursive = (root: Node<string>) => {
  if (!root) return;
  console.log(root.value);
  depthFirstPrintRecursive(root.left);
  depthFirstPrintRecursive(root.right);
};

const depthFirstListRecursive = (root: Node<string>, result: string[] = []) => {
  if (!root) return [];
  result.push(root.value);
  depthFirstListRecursive(root.left, result);
  depthFirstListRecursive(root.right, result);
  return result;
};

const root = buildDefaultTree();
console.log("-----Iterative-----");
depthFirstPrintIterative(root);
console.log("-----Recursive-----");
depthFirstPrintRecursive(root);
console.log("-----Recursive returns list of values-----");
console.log(depthFirstListRecursive(root));