/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (50.90%)
 * Likes:    340
 * Dislikes: 0
 * Total Accepted:    77.5K
 * Total Submissions: 135.7K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 示例 1:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 *
 * ⁠       [1,2,3],   [1,2,3]
 *
 * 输出: true
 *
 * 示例 2:
 *
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 *
 * ⁠       [1,2],     [1,null,2]
 *
 * 输出: false
 *
 *
 * 示例 3:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 *
 * ⁠       [1,2,1],   [1,1,2]
 *
 * 输出: false
 *
 *
 */

export {};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// @lc code=start
// recursive
var isSameTree = function (p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// iterative
var isSameTree = function (p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!check(p, q)) return false;

  const queueP: (TreeNode | null)[] = [];
  const queueQ: (TreeNode | null)[] = [];
  queueP.push(p);
  queueQ.push(q);

  while (queueP.length) {
    p = queueP.shift()!;
    q = queueQ.shift()!;
    if (!check(p, q)) return false;
    if (p) {
      if (!check(p.left, q.left)) return false;
      if (p.left) {
        queueP.push(p.left);
        queueQ.push(q.left);
      }

      if (!check(p.right, q.right)) return false;
      if (p.right) {
        queueP.push(p.right);
        queueQ.push(q.right);
      }
    }
  }

  return true;

  function check(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return true;
  }
};
// @lc code=end
