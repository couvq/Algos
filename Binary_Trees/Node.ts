export class Node<T> {
  public value: T;
  public left: Node<T>;
  public right: Node<T>;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

/**
 * Builds a default binary tree and returns the root node
 * @returns root of binary tree
 */
export const buildDefaultTree = (): Node<string> => {
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

/**
 *           1
 *          / \
 *         2   3
 *        / \  / \
 *       4   5 6  7
 * @returns root of tree
 */
export const buildTreeSumTree = (): Node<number> => {
  const one = new Node(1);
  const two = new Node(2);
  const three = new Node(3);

  one.left = two;
  one.right = three;

  const four = new Node(4);
  const five = new Node(5);

  two.left = four;
  two.right = five;

  const six = new Node(6);
  const seven = new Node(7);

  three.left = six;
  three.right = seven;

  return one;
};

/**
 *           5
 *          / \
 *        11   3
 *        /\    \
 *      4  15   12
 */
export const buildTreeMinValueTree = (): Node<number> => {
  const five = new Node(5);
  const eleven = new Node(11);
  const three = new Node(3);

  five.left = eleven;
  five.right = three;

  const four = new Node(4);
  const fifteen = new Node(15);
  const twelve = new Node(12);

  eleven.left = four;
  eleven.right = fifteen;
  three.right = twelve;

  return five;
};

/**
 *           5
 *          / \
 *        11   3
 *        /\    \
 *       4  2    1
 */
export const buildMaxPathSumTree = (): Node<number> => {
  const five = new Node(5);
  const eleven = new Node(11);
  const three = new Node(3);

  five.left = eleven;
  five.right = three;

  const four = new Node(4);
  const two = new Node(2);
  const one = new Node(1);

  eleven.left = four;
  eleven.right = two;
  three.right = one;

  return five;
};
