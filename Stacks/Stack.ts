interface Stack<T> {
  /** Adds an item to the stack. */
  push(item: T): void;
  /** Returns the last item added and removes it from the stack. */
  pop(): T;
  /** Returns the last item added to the stack, does not remove it. */
  peek(): T;
  /** Returns the current length of the stack. */
  size(): number;
  /** Prints out array contents (for debugging) */
  print(): void;
}

/** A stack implementation using an array under the hood.
 * Time complexity: O(1) push, O(1) pop, O(1) peek
 * Space complexity: O(n)
 */
export class StackArrayImpl<T> implements Stack<T> {
  private readonly storage: Array<T>;

  constructor() {
    this.storage = [];
  }

  size(): number {
    return this.storage.length;
  }

  print(): void {
    console.debug(`Current stack contents is: ${this.storage}`);
  }

  push(item: T): void {
    this.storage.push(item);
  }

  pop(): T {
    return this.storage.pop();
  }

  peek(): T {
    return this.storage[this.storage.length - 1];
  }
}
