import { Node } from "./Node";

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

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

  return printLinkedListRecursive(head.next);
};
console.log("-----recursive-----");
printLinkedListRecursive(a);
