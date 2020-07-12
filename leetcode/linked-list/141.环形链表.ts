/*
 * @lc app=leetcode.cn id=141 lang=typescript
 *
 * [141] 环形链表
 *
 * https://leetcode-cn.com/problems/linked-list-cycle/description/
 *
 * algorithms
 * Easy (33.73%)
 * Likes:    571
 * Dislikes: 0
 * Total Accepted:    144.8K
 * Total Submissions: 304.2K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，判断链表中是否有环。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 *
 *
 *
 * 示例 1：
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 *
 *
 * 示例 2：
 *
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 *
 *
 * 示例 3：
 *
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 *
 *
 *
 *
 *
 *
 * 进阶：
 *
 * 你能用 O(1)（即，常量）内存解决此问题吗？
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
// ! hash table Wrong Answer
var hasCycle = function (head: ListNode | null): boolean {
  const set: Set<ListNode | null> = new Set();
  while (head) {
    if (set.has(head)) {
      return true;
    } else {
      set.add(head);
    }
    head = head.next;
  }
  return false;
};

// ! two pointers Wrong Answer
var hasCycle = function (head: ListNode | null): boolean {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;

  while (slow !== fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next!;
    fast = fast.next.next!;
  }

  return true;
};
// @lc code=end
