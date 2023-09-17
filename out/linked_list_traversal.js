"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var a = (0, Node_1.setUpLinkedList)();
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