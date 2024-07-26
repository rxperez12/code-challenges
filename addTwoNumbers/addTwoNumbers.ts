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

function addTwoNumbers(
  l1: ListNode | null,
  l2: ListNode | null,
): ListNode | null {
  const numsL1 = l1 ? linkedListToArray(l1) : [];
  const numsL2 = l2 ? linkedListToArray(l2) : [];

  const totalLength = Math.max(numsL1.length, numsL2.length);
  const answer: number[] = []
  let remainder = 0
  let i = 0

  while (i < totalLength || remainder !== 0 ) {
    const numL1 = numsL1[i] | 0;
    const numL2 = numsL2[i] | 0;

    let sum = numL1 + numL2 + remainder
    remainder = 0

    if(sum > 9){
      remainder = Number(sum.toString()[0])
      sum = sum % 10;
    }
    answer.push(sum)
    i++
  }
  console.log(answer)

  return arrayToLinkedList(answer)
}

/** Given array of values, returns starting ListNode of array as linked list */
function arrayToLinkedList(arr: number[]): ListNode {
  const startingNode = new ListNode(arr[0])
  let lastNode = startingNode

  for(let i = 1; i < arr.length; i++){
    const newNode = new ListNode(arr[i])
    lastNode.next = newNode
    lastNode = newNode
  }

  return startingNode
}

/** Given the starting node of linked list, returns node values in array */
function linkedListToArray(node: ListNode | null): number[] {
  const nums: number[] = [];
  let currNode: ListNode | null = node;

  while (currNode !== null) {
    nums.push(currNode.val);
    currNode = currNode.next;
  }

  return nums;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export { linkedListToArray, addTwoNumbers, ListNode, arrayToLinkedList };
