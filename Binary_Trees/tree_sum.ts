import { StackArrayImpl } from "../Stacks/Stack";
import { buildTreeSumTree, Node } from "./Node";

/**
 * 
 * @param root root of tree
 * @returns sum of all the node values in the tree
 */
const treeSumRecursive = (root: Node<number>): number => {
  if (!root) return 0;
  return (
    root.value + treeSumRecursive(root.left) + treeSumRecursive(root.right)
  );
};

const treeSumIterative = (root: Node<number>): number => {
  if (!root) return 0;
  const stack = new StackArrayImpl<Node<number>>();
  stack.push(root);
  let sum = 0;

  while (stack.size()) {
    const current = stack.pop();
    sum += current.value;
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return sum;
};

const root = buildTreeSumTree();
console.log("-----Recursive-----");
console.log(`sum should equal 28: ${treeSumRecursive(root)}`);
console.log("-----Iterative-----");
console.log(`sum should equal 28: ${treeSumIterative(root)}`);
