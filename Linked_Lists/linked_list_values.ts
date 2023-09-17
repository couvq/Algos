import { Node, setUpLinkedList } from "./Node";

const a = setUpLinkedList();

/**
 * (iterative) traverses through linked list and returns an array of node values
 * @param head head of the linked list 
 * @returns array of all linked list values
 */
const getLinkedListValuesIterative = (head: Node): string[] => {
    let current = head;
    const values = [];

    while(current) {
        values.push(current.value);
        current = current.next
    }

    return values;
}
console.log('-----iterative-----')
console.log(getLinkedListValuesIterative(a));

/**
 * (recursive) traverses through linked list and returns an array of node values
 * @param head head of the linked list 
 * @returns array of all linked list values
 */
 const getLinkedListValuesRecursive = (head: Node, values: string[] = []): string[] => {
    if(!head) return values;

    values.push(head.value)

    return getLinkedListValuesRecursive(head.next, values);
}
console.log('-----recursive-----')
console.log(getLinkedListValuesRecursive(a));