/*
 * @lc app=leetcode.cn id=235 lang=typescript
 *
 * [235] 二叉搜索树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (66.14%)
 * Likes:    549
 * Dislikes: 0
 * Total Accepted:    127.4K
 * Total Submissions: 192.6K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * 给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 * 例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]
 *
 *
 *
 *
 *
 * 示例 1:
 *
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * 输出: 6
 * 解释: 节点 2 和节点 8 的最近公共祖先是 6。
 *
 *
 * 示例 2:
 *
 * 输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * 输出: 2
 * 解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 *
 * 说明:
 *
 *
 * 所有节点的值都是唯一的。
 * p、q 为不同节点且均存在于给定的二叉搜索树中。
 *
 *
 */

export {};

// Definition for a binary tree node.
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
var lowestCommonAncestor = function (
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (!root) return null;
  const parentVal = root.val;
  const pVal = p.val;
  const qVal = q.val;

  if (pVal > parentVal && qVal > parentVal) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (pVal < parentVal && qVal < parentVal) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

// iterative
var lowestCommonAncestor = function (
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  const pVal = p.val;
  const qVal = q.val;
  let node: TreeNode | null = root;

  while (node) {
    const parentVal = node.val;
    if (pVal > parentVal && qVal > parentVal) {
      node = node.right;
    } else if (pVal < parentVal && qVal < parentVal) {
      node = node.left;
    } else {
      return node;
    }
  }

  return null;
};
// @lc code=end
