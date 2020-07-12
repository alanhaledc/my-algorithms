/*
 * @lc app=leetcode.cn id=143 lang=typescript
 *
 * [143] 重排链表
 *
 * https://leetcode-cn.com/problems/reorder-list/description/
 *
 * algorithms
 * Medium (47.45%)
 * Likes:    203
 * Dislikes: 0
 * Total Accepted:    22.2K
 * Total Submissions: 39.9K
 * Testcase Example:  '[1,2,3,4]'
 *
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 *
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 *
 * 示例 1:
 *
 * 给定链表 1->2->3->4, 重新排列为 1->4->2->3.
 *
 * 示例 2:
 *
 * 给定链表 1->2->3->4->5, 重新排列为 1->5->2->4->3.
 *
 */

export {};

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
// two pointers
var reorderList = function (head: ListNode | null) {
  if (!head) return;
  const list = [];

  while (head) {
    list.push(head);
    head = head.next;
  }

  let i = 0;
  let j = list.length - 1;

  // 依次头尾排列列表
  while (i < j) {
    list[i].next = list[j];
    i++;
    if (i === j) break;
    list[j].next = list[i];
    j--;
  }

  list[i].next = null;
};
// @lc code=end
