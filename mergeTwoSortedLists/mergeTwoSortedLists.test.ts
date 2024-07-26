import { describe, expect, it } from "vitest";
import { ListNode, arrayToLinkedList, linkedListToArray } from "../addTwoNumbers/addTwoNumbers";
import { mergeTwoLists } from "./mergeTwoSortedLists";


const arr1 = [1, 2, 4]
const arr2 = [1, 3, 4]

const ll1 = arrayToLinkedList(arr1)
const ll2 = arrayToLinkedList(arr2)

describe("linkedListToArray", function () {
  it("handles merge easy", function () {
    const answer = mergeTwoLists(ll1, ll2)

    expect(linkedListToArray(answer!)).toEqual([1, 1, 2, 3, 4, 4])
  });

  it("handles empty list", function () {
    const a = new ListNode()
    const b = new ListNode()
    const answer = mergeTwoLists(a, b)
    expect(answer).toEqual(a)
  });

  it("handles empty list", function () {
    const a = new ListNode()
    const b = new ListNode(0)
    const answer = mergeTwoLists(a, b)
    expect(linkedListToArray(answer!)).toEqual([0])
  });
});