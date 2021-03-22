/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  // 迭代实现
  // 时间复杂度：O(n)
  // 空间复杂度：O(1)
  let prev = null;
  let curr = head;
  while (curr !== null) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function (head) {
  // 递归实现
  // 输入一个节点 head，将「以 head 为起点」的链表反转，并返回反转之后的头结点
  if (head === null || head.next === null) {
    return head;
  }
  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};