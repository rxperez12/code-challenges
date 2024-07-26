import {
  ListNode,
  arrayToLinkedList,
  linkedListToArray,
} from "../addTwoNumbers/addTwoNumbers";
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null {
  let currentNodeL1 = list1;
  let currentNodeL2 = list2;

  let startingNode: ListNode | null = null;
  let currentAnswerNode: ListNode | null = null;

  while (currentNodeL1 !== null || currentNodeL2 !== null) {
    let largestNode: ListNode;

    // gets the largest of the nodes and updates linked list
    if (currentNodeL1 === null) {
      largestNode = currentNodeL2!;
      currentNodeL2 = currentNodeL2!.next;
    } else if (currentNodeL2 === null) {
      largestNode = currentNodeL1;
      currentNodeL1 = currentNodeL1.next;
    } else {
      largestNode =
        currentNodeL1.val < currentNodeL2.val ? currentNodeL1 : currentNodeL2;
      if (largestNode === currentNodeL1) {
        currentNodeL1 = currentNodeL1.next;
      } else {
        currentNodeL2 = currentNodeL2.next;
      }
    }

    console.log(
      "!!!!!current l1, l2",
      linkedListToArray(currentNodeL1),
      linkedListToArray(currentNodeL2),
    );
    // sets the starting node if null, otherwise links current answer node to current largest
    if (currentAnswerNode === null) {
      startingNode = largestNode;
      currentAnswerNode = largestNode;
    } else {
      currentAnswerNode.next = largestNode;
      currentAnswerNode = largestNode;
    }
    console.log("largestNode", largestNode.val);
    console.log("currentList", linkedListToArray(startingNode));
  }

  return startingNode;
}

export { mergeTwoLists };
