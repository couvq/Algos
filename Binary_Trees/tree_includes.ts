import { StackArrayImpl } from "../Stacks/Stack";
import { buildDefaultTree, Node } from "./Node";

/**
 * Iterative implementation of tree includes
 * @param root root of the tree
 * @param value value to search for in the given tree
 * @returns boolean indicating if value is present in the given tree
 */
const treeIncludesIterative = (root: Node<string>, value: string): boolean => {
  if (!root) return false;
  const stack = new StackArrayImpl<Node<string>>();
  stack.push(root);

  while (stack.size()) {
    const current = stack.pop();

    if (current.value === value) return true;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }

  return false;
};

/**
 * Recursive implementation of tree includes
 * @param root root of the tree
 * @param value value to search for in the given tree
 * @returns boolean indicating if value is present in the given tree
 */
const treeIncludesRecursive = (root: Node<string>, value: string): boolean => {
  if (!root) return false;
  if (root.value === value) return true;
  return (
    treeIncludesRecursive(root.left, value) ||
    treeIncludesRecursive(root.right, value)
  );
};

const root = buildDefaultTree();
console.log("-----Iterative-----");
console.log(
  `Should return true since tree includes D: ${treeIncludesIterative(
    root,
    "D"
  )}`
);
console.log(
  `Should return false since tree doesn't include Z: ${treeIncludesIterative(
    root,
    "Z"
  )}`
);

console.log("-----Recursive-----");
console.log(
  `Should return true since tree includes D: ${treeIncludesRecursive(
    root,
    "D"
  )}`
);
console.log(
  `Should return false since tree doesn't include Z: ${treeIncludesRecursive(
    root,
    "Z"
  )}`
);
