interface Stack<T> {
  /** Adds an item to the stack. */
  push(item: T): void;
  /** Returns the last item added and removes it from the stack. */
  pop(): T;
  /** Returns the last item added to the stack, does not remove it. */
  peek(): T;
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

  print(): void {
    console.debug(`Current stack contents is: ${this.storage}`);
  }

  push(item: T): void {
    this.storage.push(item);
  }

  pop(): T {
    if (!this.storage.length) {
      throw new Error("Stack is empty, can't call pop!");
    } else {
      return this.storage.pop();
    }
  }

  peek(): T {
    if (!this.storage.length) {
      throw new Error("Stack is empty, can't call peek!");
    } else {
      return this.storage[this.storage.length - 1];
    }
  }
}

console.log("-----StackArrayImpl-----");
const stackArray = new StackArrayImpl<string>();
console.log("initially empty...");
stackArray.print();
console.log("adding a to the stack...");
stackArray.push("a");
stackArray.print();
console.log("adding b to the stack...");
stackArray.push("b");
stackArray.print();
console.log(`peeking, should be b: ${stackArray.peek()}`);
console.log(`popping, b should have been returned: ${stackArray.pop()}`);
console.log("array should only have a now...");
stackArray.print();
console.log(`popping one more time, should return a: ${stackArray.pop()}`);
console.log(`array should now be empty: ${stackArray.print()}`);