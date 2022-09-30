/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*eslint-disable */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}
// [2,4,3]
// [5,6,4]
// const l1_hunds = new ListNode(2);
// const l1_tens = new ListNode(4, l1_hunds);
const l1_tens = new ListNode(4);
const l1_ones = new ListNode(8, l1_tens);

const l2_hunds = new ListNode(5);
const l2_tens = new ListNode(2, l2_hunds);
const l2_ones = new ListNode(8, l2_tens);
// let currentNode1 = {...l1_hunds};
// console.log(currentNode1.val)

// const l1_ones = new ListNode(0);
// const l2_ones = new ListNode(1);

var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let head;
    let currentNode1, currentNode2;
    currentNode1 = l1;
    currentNode2 = l2;
    let carryValue = 0;
    while(currentNode1 || currentNode2) {
      let newNode;
      let addValues;
      // Checking if there are any defined values
      if (currentNode1 && currentNode2) {
        addValues = currentNode1.val + currentNode2.val + carryValue;
        currentNode1 = currentNode1.next; // Incrementing to next nodes
        currentNode2 = currentNode2.next; // Incrementing to next nodes
      } else if (currentNode1) {
        addValues = currentNode1.val + carryValue;
        currentNode1 = currentNode1.next; // Incrementing to next nodes
      } else if (currentNode2) {
        addValues = currentNode2.val + carryValue;
        currentNode2 = currentNode2.next; // Incrementing to next nodes
      } 

      // Reset carry value counter
      carryValue = 0;
      // Creating new node
      newNode = new ListNode(addValues % 10);

      if (!head) {
        head = newNode
        result = head; // first value
      } else {
        // Adding new node to linked list
        head.next = newNode
        head = head.next;
      }

      // Setting new carry value counter
      carryValue = Math.floor(addValues / 10);
      if (carryValue > 0 && (!currentNode1 && !currentNode2 ))  {
        newNode = new ListNode(carryValue);
        head.next = newNode
        head = head.next;
      }
    }
    return result;
};

console.log(addTwoNumbers(l1_ones, l2_ones));