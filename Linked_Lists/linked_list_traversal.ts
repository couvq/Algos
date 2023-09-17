import { Node, setUpLinkedList } from "./Node";

const a = setUpLinkedList();

// A -> B -> C -> D -> null
/**
 * (iterative) traverses linked list and prints out each node in consecutive order
 * @param head the head of the linked list
 */
const printLinkedListIterative = (head: Node): void => {
  let current = head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
};
console.log("-----iterative-----");
printLinkedListIterative(a);

/**
 * (recursive) traverses linked list and prints out each node in consecutive order
 * @param head the head of the linked list
 */
const printLinkedListRecursive = (head: Node): void => {
  if (!head) return;
  console.log(head.value);
  printLinkedListRecursive(head.next);
};
console.log("-----recursive-----");
printLinkedListRecursive(a);
