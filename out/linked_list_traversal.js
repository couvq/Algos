"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var a = new Node_1.Node("A");
var b = new Node_1.Node("B");
var c = new Node_1.Node("C");
var d = new Node_1.Node("D");
a.next = b;
b.next = c;
c.next = d;
// A -> B -> C -> D -> null
/**
 * (iterative) traverses linked list and prints out each node in consecutive order
 * @param head the head of the linked list
 */
var printLinkedListIterative = function (head) {
    var current = head;
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
var printLinkedListRecursive = function (head) {
    if (!head)
        return;
    console.log(head.value);
    printLinkedListRecursive(head.next);
};
console.log("-----recursive-----");
printLinkedListRecursive(a);
//# sourceMappingURL=linked_list_traversal.js.map