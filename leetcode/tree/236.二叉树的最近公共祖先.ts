/*
 * @lc app=leetcode.cn id=236 lang=typescript
 *
 * [236] 二叉树的最近公共祖先
 *
 * https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/description/
 *
 * algorithms
 * Medium (66.61%)
 * Likes:    992
 * Dislikes: 0
 * Total Accepted:    170.1K
 * Total Submissions: 255.4K
 * Testcase Example:  '[3,5,1,6,2,0,8,null,null,7,4]\n5\n1'
 *
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。
 *
 * 百度百科中最近公共祖先的定义为：“对于有根树 T 的两个节点 p、q，最近公共祖先表示为一个节点 x，满足 x 是 p、q 的祖先且 x
 * 的深度尽可能大（一个节点也可以是它自己的祖先）。”
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * 输出：3
 * 解释：节点 5 和节点 1 的最近公共祖先是节点 3 。
 *
 *
 * 示例 2：
 *
 *
 * 输入：root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
 * 输出：5
 * 解释：节点 5 和节点 4 的最近公共祖先是节点 5 。因为根据定义最近公共祖先节点可以为节点本身。
 *
 *
 * 示例 3：
 *
 *
 * 输入：root = [1,2], p = 1, q = 2
 * 输出：1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 树中节点数目在范围 [2, 10^5] 内。
 * -10^9
 * 所有 Node.val 互不相同 。
 * p != q
 * p 和 q 均存在于给定的二叉树中。
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
  let res: TreeNode | null = null;
  dfs(root, p, q);
  return res;

  function dfs(root: TreeNode | null, p: TreeNode, q: TreeNode): boolean {
    if (!root) return false;
    const isLeftSon = dfs(root.left, p, q);
    const isRightSon = dfs(root.right, p, q);
    if (
      (isLeftSon && isRightSon) ||
      ((root.val === p.val || root.val === q.val) && (isLeftSon || isRightSon))
    ) {
      res = root;
    }
    return isLeftSon || isRightSon || root.val === p.val || root.val === q.val;
  }
};

// save parent node
var lowestCommonAncestor = function (
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  const map: Map<number, TreeNode> = new Map();
  const set: Set<number> = new Set();

  dfs(root!);

  while (p) {
    set.add(p.val);
    p = map.get(p.val)!;
  }
  while (q) {
    if (set.has(q.val)) {
      return q;
    }
    q = map.get(q.val)!;
  }

  return null;

  function dfs(root: TreeNode): void {
    if (root.left) {
      map.set(root.left.val, root);
      dfs(root.left);
    }
    if (root.right) {
      map.set(root.right.val, root);
      dfs(root.right);
    }
  }
};
// @lc code=end
