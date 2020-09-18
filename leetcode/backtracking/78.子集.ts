/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 *
 * https://leetcode-cn.com/problems/subsets/description/
 *
 * algorithms
 * Medium (70.51%)
 * Likes:    620
 * Dislikes: 0
 * Total Accepted:    100.6K
 * Total Submissions: 129.9K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
 *
 * 说明：解集不能包含重复的子集。
 *
 * 示例:
 *
 * 输入: nums = [1,2,3]
 * 输出:
 * [
 * ⁠ [3],
 * [1],
 * [2],
 * [1,2,3],
 * [1,3],
 * [2,3],
 * [1,2],
 * []
 * ]
 *
 */

// @lc code=start
// recursive
var subsets = function (nums: number[]): number[][] {
  const ret: number[][] = [];
  ret.push([]);

  for (const num of nums) {
    const set: number[][] = [];
    for (const subset of ret) {
      set.push(subset.concat(num));
    }
    for (const subset of set) {
      ret.push(subset);
    }
  }

  return ret;
};

// backtracking
var subsets = function (nums: number[]): number[][] {
  const n = nums.length;
  const ret: number[][] = [];
  let k: number;
  for (k = 0; k < n + 1; k++) {
    dfs([], 0);
  }
  return ret;

  function dfs(subset: number[], idx: number) {
    if (subset.length === k) {
      ret.push(subset.slice());
    }
    for (let i = idx; i < n; i++) {
      subset.push(nums[i]);
      dfs(subset, i + 1);
      subset.pop();
    }
  }
};
// @lc code=end
