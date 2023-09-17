"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUpLinkedList = exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
/**
 * Sets up linked list A -> B -> C -> D test data
 * @returns head of linked list
 */
var setUpLinkedList = function () {
    var a = new Node("A");
    var b = new Node("B");
    var c = new Node("C");
    var d = new Node("D");
    a.next = b;
    b.next = c;
    c.next = d;
    return a;
};
exports.setUpLinkedList = setUpLinkedList;
//# sourceMappingURL=Node.js.map