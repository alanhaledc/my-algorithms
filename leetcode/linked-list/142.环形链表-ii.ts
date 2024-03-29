/*
 * @lc app=leetcode.cn id=142 lang=typescript
 *
 * [142] 环形链表 II
 *
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/description/
 *
 * algorithms
 * Medium (54.45%)
 * Likes:    909
 * Dislikes: 0
 * Total Accepted:    195.6K
 * Total Submissions: 359.3K
 * Testcase Example:  '[3,2,0,-4]\n1'
 *
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是
 * -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。
 *
 * 说明：不允许修改给定的链表。
 *
 * 进阶：
 *
 *
 * 你是否可以使用 O(1) 空间解决此题？
 *
 *
 *
 *
 * 示例 1：
 *
 *
 *
 *
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 *
 *
 * 示例 2：
 *
 *
 *
 *
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 *
 *
 * 示例 3：
 *
 *
 *
 *
 * 输入：head = [1], pos = -1
 * 输出：返回 null
 * 解释：链表中没有环。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 链表中节点的数目范围在范围 [0, 10^4] 内
 * -10^5
 * pos 的值为 -1 或者链表中的一个有效索引
 *
 *
 */

export {};

// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// @lc code=start
// hash table
var detectCycle = function (head: ListNode | null): ListNode | null {
  const set: Set<ListNode> = new Set();
  let cur = head;
  while (cur) {
    if (set.has(cur)) return cur;
    set.add(cur);
    cur = cur.next;
  }
  return null;
};

var detectCycle = function (head: ListNode | null): ListNode | null {
  if (!head) return null;
  let fast = head;
  let slow = head;
  while (fast) {
    slow = slow.next!;
    if (fast.next) {
      fast = fast.next.next!;
    } else {
      return null;
    }
    if (slow === fast) {
      let cur = head;
      while (cur !== slow) {
        cur = cur.next!;
        slow = slow.next!;
      }
      return cur;
    }
  }
  return null;
};
// @lc code=end
