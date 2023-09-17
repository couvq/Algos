"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
var a = (0, Node_1.setUpLinkedList)();
/**
 * (iterative) traverses through linked list and returns an array of node values
 * @param head head of the linked list
 * @returns array of all linked list values
 */
var getLinkedListValuesIterative = function (head) {
    var current = head;
    var values = [];
    while (current) {
        values.push(current.value);
        current = current.next;
    }
    return values;
};
console.log('-----iterative-----');
console.log(getLinkedListValuesIterative(a));
/**
 * (recursive) traverses through linked list and returns an array of node values
 * @param head head of the linked list
 * @returns array of all linked list values
 */
var getLinkedListValuesRecursive = function (head, values) {
    if (values === void 0) { values = []; }
    if (!head)
        return values;
    values.push(head.value);
    return getLinkedListValuesRecursive(head.next, values);
};
console.log('-----recursive-----');
console.log(getLinkedListValuesRecursive(a));
//# sourceMappingURL=linked_list_values.js.map