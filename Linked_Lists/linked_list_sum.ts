import { Node, setUpLinkedListSum } from "./Node";

const a = setUpLinkedListSum();

/**
 * (iterative) traverses through linked list and returns sum of values
 * @param head head of the linked list
 * @returns sum of linked list values
 */
const getLinkedListSumIterative = (head: Node): number => {
  let current = head;
  let sum = 0;

  while (current) {
    sum += current.value;
    current = current.next;
  }

  return sum;
};
console.log("-----iterative-----");
console.log(getLinkedListSumIterative(a));

/**
 * (iterative) traverses through linked list and returns sum of values
 * @param head head of the linked list
 * @param sum sum of linked list values
 * @returns sum of linked list values
 */
const getLinkedListSumRecursive = (head: Node, sum: number = 0): number => {
  if (!head) return sum;

  sum += head.value;

  return getLinkedListSumRecursive(head.next, sum);
};
console.log("-----recursive-----");
console.log(getLinkedListSumRecursive(a));
