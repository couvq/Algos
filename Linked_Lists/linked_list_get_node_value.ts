import { Node, setUpLinkedList } from "./Node";

const a = setUpLinkedList();

/**
 * (iterative) gets value of a node at a given index, null if node at index does not exist
 * @param head head of the linked list
 * @param index index of node we want the value
 */
const getNodeValueIterative = (head: Node, index: number): string => {
  let current = head;
  let count = 0;

  while (current) {
    if (count === index) return current.value;
    count++;
    current = current.next;
  }

  return `no node for index ${index}`;
};
console.log("-----iterative------");
console.log(getNodeValueIterative(a, 2));
console.log(getNodeValueIterative(a, 4));

/**
 * (recursive) gets value of a node at a given index, null if node at index does not exist
 * @param head head of the linked list
 * @param index index of node we want the value
 */
 const getNodeValueRecursive = (head: Node, index: number, count: number = 0): string => {
    // when do we stop the algorithm? 
    // 1. when we find the index we are looking for
    // 2. when our current node is null (end of list)
    if(!head) return `no node for index ${index}`;
    if(count === index) return head.value;
    return getNodeValueRecursive(head.next, index, count + 1);
  };
  console.log("-----recursive------");
  console.log(getNodeValueRecursive(a, 2));
  console.log(getNodeValueRecursive(a, 10));
