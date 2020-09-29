/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (55.35%)
 * Likes:    416
 * Dislikes: 0
 * Total Accepted:    58.6K
 * Total Submissions: 90.3K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
// recursive 👌
var buildTree = function (
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const map: Map<number, number> = new Map();
  let preIdx = 0; // preorder pointer
  // create a map: val -> inorderIndex
  for (let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }

  return build(0, inorder.length);

  function build(left: number, right: number): TreeNode | null {
    if (left === right) return null;
    const rootVal = preorder[preIdx]; 
    const root = new TreeNode(rootVal); 
    const index = map.get(rootVal)!; // get index of root value in the Map
    preIdx++; // the next postInorder value is left child
    root.left = build(left, index);
    root.right = build(index + 1, right);
    return root;
  }
};

// iterative 😥
var buildTree = function (
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  if (!preorder.length || !inorder.length) return null;
  const root = new TreeNode(preorder[0]);
  const stack: TreeNode[] = [];
  stack.push(root);
  let inorderIdx = 0; // inorder pointer from zero

  for (let i = 1; i < preorder.length; i++) {
    let preorderVal = preorder[i];
    let node = stack[stack.length - 1];
    if (node.val !== inorder[inorderIdx]) {
      node.left = new TreeNode(preorderVal); // create left child
      stack.push(node.left);
    } else {
      while (
        stack.length &&
        stack[stack.length - 1].val === inorder[inorderIdx]
      ) {
        node = stack.pop()!; // backtrack until find parent node
        inorderIdx++;
      }
      node.right = new TreeNode(preorderVal); // create right child
      stack.push(node.right);
    }
  }

  return root;
};
// @lc code=end
