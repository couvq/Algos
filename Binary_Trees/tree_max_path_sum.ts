import { Node, buildMaxPathSumTree } from "./Node";

/**
 * Given a binary tree, return the max path sum from the root to any leaf node.
 * @param root root of binary tree
 * @returns max path sum of tree
 */
const treeMaxPathSumRecursive = (root: Node<number>) => {
  if (!root) return -Infinity;
  if (!root.left && !root.right) return root.value;
  return (
    root.value +
    Math.max(
      treeMaxPathSumRecursive(root.left),
      treeMaxPathSumRecursive(root.right)
    )
  );
};

const root = buildMaxPathSumTree();
console.log("-----Recursive-----");
console.log(`Max path sum should be 20: ${treeMaxPathSumRecursive(root)}`);
