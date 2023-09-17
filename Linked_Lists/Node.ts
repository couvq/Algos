export class Node {
  public value: any;
  public next: Node;

  constructor(value: any) {
    this.value = value;
    this.next = null;
  }
}

/**
 * Sets up linked list A -> B -> C -> D test data
 * @returns head of linked list
 */
export const setUpLinkedList = (): Node => {
  const a = new Node("A");
  const b = new Node("B");
  const c = new Node("C");
  const d = new Node("D");

  a.next = b;
  b.next = c;
  c.next = d;
  return a;
};

/**
 * Sets up linked list A -> B -> C -> D test data with number values
 * @returns head of linked list
 */
 export const setUpLinkedListSum = (): Node => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    const d = new Node(4);
  
    a.next = b;
    b.next = c;
    c.next = d;
    return a;
  };
