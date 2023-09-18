import { Node, setUpLinkedList } from "./Node";

const a = setUpLinkedList();

/**
 * (iterative) returns true/false if value is present in the given linked list
 * @param head head of the linked list
 * @param value value to find in the linked list
 * @returns true if value is present, false otherwise
 */
const isPresentIterative = (head: Node, value: string): boolean => {
  let current = head;

  while (current) {
    if (current.value === value) return true;
    current = current.next;
  }
  return false;
};
console.log("-----iterative-----");
console.log(`D is present? ${isPresentIterative(a, "D")}`);
console.log(`E is present? ${isPresentIterative(a, "E")}`);

/**
 * (recursive) returns true/false if value is present in the given linked list
 * @param head head of the linked list
 * @param value value to find in the linked list
 * @returns true if value is present, false otherwise
 */
const isPresentRecursive = (head: Node, value: string): boolean => {
  // end algorithm when we either find the node or we get to end of list and it is not found
  if (!head) return false;
  if (head.value === value) return true;
  return isPresentRecursive(head.next, value);
};
console.log("-----recursive-----");
console.log(`D is present? ${isPresentRecursive(a, "D")}`);
console.log(`E is present? ${isPresentRecursive(a, "E")}`);
