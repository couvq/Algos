export class Node {
  public value: any;
  public left: Node;
  public right: Node;

  constructor(value: any) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Builds a default binary tree and returns the root node
 * @returns root of binary tree
 */
export const buildDefaultTree = (): Node => {
  const a = new Node("A");
  const b = new Node("B");
  const c = new Node("C");
  const d = new Node("D");
  const e = new Node("E");
  const f = new Node("F");

  a.left = b;
  a.right = c;

  b.left = d;
  b.right = e;

  c.right = f;
  return a;
};
