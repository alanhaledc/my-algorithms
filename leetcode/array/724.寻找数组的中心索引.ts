/*
 * @lc app=leetcode.cn id=724 lang=typescript
 *
 * [724] 寻找数组的中心索引
 *
 * https://leetcode-cn.com/problems/find-pivot-index/description/
 *
 * algorithms
 * Easy (39.63%)
 * Likes:    258
 * Dislikes: 0
 * Total Accepted:    80K
 * Total Submissions: 198K
 * Testcase Example:  '[1,7,3,6,5,6]'
 *
 * 给定一个整数类型的数组 nums，请编写一个能够返回数组 “中心索引” 的方法。
 *
 * 我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
 *
 * 如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
 *
 *
 *
 * 示例 1：
 *
 * 输入：
 * nums = [1, 7, 3, 6, 5, 6]
 * 输出：3
 * 解释：
 * 索引 3 (nums[3] = 6) 的左侧数之和 (1 + 7 + 3 = 11)，与右侧数之和 (5 + 6 = 11) 相等。
 * 同时, 3 也是第一个符合要求的中心索引。
 *
 *
 * 示例 2：
 *
 * 输入：
 * nums = [1, 2, 3]
 * 输出：-1
 * 解释：
 * 数组中不存在满足此条件的中心索引。
 *
 *
 *
 * 说明：
 *
 *
 * nums 的长度范围为 [0, 10000]。
 * 任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。
 *
 *
 */

// @lc code=start
// array
var pivotIndex = function (nums: number[]): number {
  let ret = -1;
  for (let i = 0; i < nums.length; i++) {
    const left = nums.slice(0, i);
    const right = nums.slice(i + 1);
    if (sum(left) === sum(right)) {
      ret = i;
      break;
    }
  }
  return ret;

  function sum(arr: number[]): number {
    return arr.reduce((acc, i) => acc + i, 0);
  }
};

// prefix sum
var pivotIndex = function (nums: number[]): number {
  const total = nums.reduce((acc, i) => acc + i, 0);
  let ret = -1;
  let leftSum = 0; // the sum of element on the left
  for (let i = 0; i < nums.length; i++) {
    // leftSum === rightSum === total - nums[i] - leftSum
    if (2 * leftSum + nums[i] === total) {
      ret = i;
      break;
    }
    leftSum += nums[i];
  }
  return ret;
};
// @lc code=end
