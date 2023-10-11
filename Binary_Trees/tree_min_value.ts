import { StackArrayImpl } from "../Stacks/Stack";
import { buildTreeMinValueTree, buildTreeSumTree, Node } from "./Node";

const treeMinValueRecursive = (root: Node<number>): number => {
  if (!root) return Infinity;
  return Math.min(
    root.value,
    treeMinValueRecursive(root.left),
    treeMinValueRecursive(root.right)
  );
};

const treeMinValueIterative = (root: Node<number>): number => {
  if (!root) return Infinity;
  const stack = new StackArrayImpl<Node<number>>();
  stack.push(root);
  let min = Infinity;

  while (stack.size()) {
    const current = stack.pop();

    if (current.value < min) {
      min = current.value;
    }

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return min;
};

const treeSumRoot = buildTreeSumTree();
const treeMinValRoot = buildTreeMinValueTree();
console.log("-----Recursive-----");
console.log(`min value should be 1: ${treeMinValueRecursive(treeSumRoot)}`);
console.log(`min value should be 3: ${treeMinValueRecursive(treeMinValRoot)}`);
console.log("-----Iterative-----");
console.log(`min value should be 1: ${treeMinValueIterative(treeSumRoot)}`);
console.log(`min value should be 3: ${treeMinValueIterative(treeMinValRoot)}`);
