import { describe, expect, it } from "vitest";
import { linkedListToArray, addTwoNumbers, ListNode, arrayToLinkedList } from "./addTwoNumbers";

const a = new ListNode(2)
const b = new ListNode(4)
const c = new ListNode(3)

a.next = b
b.next = c

const x = new ListNode(5)
const y = new ListNode(6)
const z = new ListNode(4)

x.next = y
y.next = z

const testList1 = arrayToLinkedList([9,9,9,9,9,9,9])
const testList2 = arrayToLinkedList([9,9,9,9])


describe("linkedListToArray", function () {
  it("handles list a", function () {
    expect(linkedListToArray(a)).toEqual([2, 4, 3])
  });

  it("handles list b", function () {
    expect(linkedListToArray(x)).toEqual([5, 6, 4])
  });
});

describe("arrayToLinkedList", function () {

  it("handles list a", function () {
    const ll = arrayToLinkedList([2, 4, 3])

    expect(linkedListToArray(ll)).toEqual([2, 4, 3])
  });

  it("handles long list", function () {
    const ll = arrayToLinkedList([9,9,9,9,9,9,9])

    expect(linkedListToArray(ll)).toEqual([9,9,9,9,9,9,9])
  });

});

describe("addTwoNumbers", function () {
  it("handles addition easy", function () {
    const answer = addTwoNumbers(a, x)

    expect(linkedListToArray(answer!)).toEqual([7, 0, 8])
  });

  it("handles remainders", function () {
    const answer = addTwoNumbers(testList1, testList2)

    expect(linkedListToArray(answer!)).toEqual([8,9,9,9,0,0,0,1])
  });

});